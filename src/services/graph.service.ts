import { Client } from "@microsoft/microsoft-graph-client";
import axios from "axios";
import { FormType } from "../schemas/schema";

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me", //e.g. https://graph.microsoft.com/v1.0/me
  gfhpmGraphSiteId:
    "synergyprotection.sharepoint.com,4c127e1e-75aa-4915-b5ff-f2bd5a7389e5,88e3dd5f-7caa-4de7-a372-8eaab72fc088",
  registrationsListId: "c1fe449a-ac1a-42f1-858e-7227e281ef44",
  graphBaseEndPoint: "https://graph.microsoft.com/v1.0", //e.g. https://graph.microsoft.com/v1.0/me
  tokenEndpoint:
    "https://scg-token-manager.azurewebsites.net/api/gettokentrigger", // production
  tokenRoute: "token",
  //tokenEndpoint: "https://acquire-token.azurewebsites.net/api/gettokentrigger", // localhost
  listId: "6078D11F-DABA-4E10-9873-642334371C46",
  documentListId: "63d11f83-278b-4711-81bf-f43389a7a374",
  captchaSecretKet: "6LeO-WsmAAAAALL52q9iWnplQf2jEppIhUHhFaok",
  captchaVerifyEndPoint: "https://www.google.com/recaptcha/api/siteverify",
};

export async function getAppOnlyBearerToken() {
  const requestBody = {
    route: graphConfig.tokenRoute,
  };

  const { data } = await axios.post(
    `${graphConfig.tokenEndpoint}`,
    requestBody
  );
  return {
    access_token: data.access_token,
    expires_on: data.expires_on,
  };
}

export async function uploadFileToSharePointAsync(
  file: File,
  fileName: string,
  bearerToken: string,
  storageName: "security" | "scg"
) {
  try {
    const client = Client.init({
      authProvider: (done) => {
        done(null, bearerToken);
      },
    });

    const documentName =
      storageName === "security" ? "Security Application" : "SCG Applications";

    const response = await client
      .api(
        `/sites/${graphConfig.gfhpmGraphSiteId}/drive/root:/${documentName}/${fileName}:/content`
      )
      .put(file);
    console.log("File uploaded to SharePoint:", response);

    // Update the title same as the file name
    const itemPayload = {
      fields: {
        Title: file.name,
      },
    };
    const responseItemProps = await client
      .api(
        `/sites/${graphConfig.gfhpmGraphSiteId}/drive/items/${response.id}/ListItem`
      )
      .update(itemPayload);
    //console.log('Title updated for ListItem:', listItemResponse.id);

    // Return the ItemID
    return responseItemProps.id;
  } catch (error) {
    console.log("Error uploading file to SharePoint:", error);
    throw error;
  }
}

export async function saveToSharePointAsync(
  form: FormType,
  bearerToken: string
) {
  try {
    const client = Client.init({
      authProvider: (done) => {
        done(null, bearerToken);
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const itemPayload: any = {
      fields: {
        Title: form.companyName,
        company_name: form.companyName,
        street_number: form.streetNumber?.toString(),
        street_name: form.streetName,
        suite_no: form.suiteNo?.toString(),
        city: form.city,
        province: form.province,
        postal_code: form.postalCode,
        website: form.website,
        main_number: form.mainNumber,
        fax_number: form.faxPhone,
        email_address: form.emailAddress,
        authorized_name: form.authorized?.name,
        authorized_position: form.authorized?.position,
        authorized_phone_number: form.authorized?.mobileNumber,
        authorized_office_number: form.authorized?.officeNumber,
        authorized_fax_number: form.authorized?.faxNumber,
        authorized_email_address: form.authorized?.emailAddress,
        account_name: form.account?.name,
        account_direct_number: form.account?.directNumber,
        account_fax_number: form.account?.faxNumber,
        account_email_address: form.account?.emailAddress,
        email_address_or_fax: form.account?.emailAddressFax,
        emergency_company_name: form.emergency?.companyName,
        emergency_project_site_name: form.emergency?.siteName,
        emergency_street_number: form.emergency?.streetNumber?.toString(),
        emergency_street_name: form.emergency?.streetName,
        emergency_suite_no: form.emergency?.suiteNo?.toString(),
        emergency_city: form.emergency?.city,
        emergency_province: form.emergency?.province,
        emergency_postal_code: form.emergency?.postalCode,
        emergency_contacts: JSON.stringify(form.emergency?.contact),
        authorization_client: form.authorization?.client,
        authorization_address: form.authorization?.address,
        authorization_effective_date: form.authorization?.effectiveDate
          ? new Date(form.authorization?.effectiveDate).toISOString()
          : undefined,
        authorization_multiple_locations: form.authorization?.multipleLocations,
        authorization_signature: form.authorization?.signature,
        authorization_fullname: form.authorization?.fullName,
        authorization_position: form.authorization?.position,
        additional_users: JSON.stringify(form.additionalUsers),
      },
    };

    if (form.account?.invoiceDelivery) {
      const keys = Object.keys(form.account.invoiceDelivery) as Array<
        keyof typeof form.account.invoiceDelivery
      >;
      itemPayload.fields = {
        ...itemPayload.fields,
        "invoice_delivery@odata.type": "Collection(Edm.String)",
        invoice_delivery: keys.filter(
          (key) => form.account?.invoiceDelivery?.[key]
        ),
      };
    }

    if (form.account?.paymentMethod) {
      const keys = Object.keys(form.account.paymentMethod) as Array<
        keyof typeof form.account.paymentMethod
      >;
      itemPayload.fields = {
        ...itemPayload.fields,
        "payment_method@odata.type": "Collection(Edm.String)",
        payment_method: keys.filter(
          (key) => form.account?.paymentMethod?.[key]
        ),
      };
    }

    if (form.emergency?.unreachable) {
      const keys = Object.keys(form.emergency.unreachable) as Array<
        keyof typeof form.emergency.unreachable
      >;
      itemPayload.fields = {
        ...itemPayload.fields,
        "emergency_unreachable@odata.type": "Collection(Edm.String)",
        emergency_unreachable: keys.filter((key) =>
          form.emergency?.unreachable?.[key] ? key.replace(/_/g, " ") : false
        ),
      };
    }

    const response = await client
      .api(
        `/sites/${graphConfig.gfhpmGraphSiteId}/lists/${graphConfig.listId}/items`
      )
      .post(itemPayload);
    console.log("Item saved to SharePoint:", response);
    return response;
  } catch (error) {
    console.log("Error saving item to SharePoint:", error);
    throw error;
  }
}

export async function updateSharePointAsync(
  id: string,
  form: FormType,
  bearerToken: string
) {
  try {
    const client = Client.init({
      authProvider: (done) => {
        done(null, bearerToken);
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const itemPayload: any = {
      fields: {
        Title: form.companyName,
        company_name: form.companyName,
        street_number: form.streetNumber?.toString(),
        street_name: form.streetName,
        suite_no: form.suiteNo?.toString(),
        city: form.city,
        province: form.province,
        postal_code: form.postalCode,
        website: form.website,
        main_number: form.mainNumber,
        fax_number: form.faxPhone,
        email_address: form.emailAddress,
        authorized_name: form.authorized?.name,
        authorized_position: form.authorized?.position,
        authorized_phone_number: form.authorized?.mobileNumber,
        authorized_office_number: form.authorized?.officeNumber,
        authorized_fax_number: form.authorized?.faxNumber,
        authorized_email_address: form.authorized?.emailAddress,
        account_name: form.account?.name,
        account_direct_number: form.account?.directNumber,
        account_fax_number: form.account?.faxNumber,
        account_email_address: form.account?.emailAddress,
        email_address_or_fax: form.account?.emailAddressFax,
        emergency_company_name: form.emergency?.companyName,
        emergency_project_site_name: form.emergency?.siteName,
        emergency_street_number: form.emergency?.streetNumber?.toString(),
        emergency_street_name: form.emergency?.streetName,
        emergency_suite_no: form.emergency?.suiteNo?.toString(),
        emergency_city: form.emergency?.city,
        emergency_province: form.emergency?.province,
        emergency_postal_code: form.emergency?.postalCode,
        emergency_contacts: JSON.stringify(form.emergency?.contact),
        authorization_client: form.authorization?.client,
        authorization_address: form.authorization?.address,
        authorization_effective_date: form.authorization?.effectiveDate
          ? new Date(form.authorization?.effectiveDate).toISOString()
          : undefined,
        authorization_multiple_locations: form.authorization?.multipleLocations,
        authorization_signature: form.authorization?.signature,
        authorization_fullname: form.authorization?.fullName,
        authorization_position: form.authorization?.position,
        additional_users: JSON.stringify(form.additionalUsers),
      },
    };

    if (form.account?.invoiceDelivery) {
      const keys = Object.keys(form.account.invoiceDelivery) as Array<
        keyof typeof form.account.invoiceDelivery
      >;
      itemPayload.fields = {
        ...itemPayload.fields,
        "invoice_delivery@odata.type": "Collection(Edm.String)",
        invoice_delivery: keys.filter(
          (key) => form.account?.invoiceDelivery?.[key]
        ),
      };
    }

    if (form.account?.paymentMethod) {
      const keys = Object.keys(form.account.paymentMethod) as Array<
        keyof typeof form.account.paymentMethod
      >;
      itemPayload.fields = {
        ...itemPayload.fields,
        "payment_method@odata.type": "Collection(Edm.String)",
        payment_method: keys.filter(
          (key) => form.account?.paymentMethod?.[key]
        ),
      };
    }

    if (form.emergency?.unreachable) {
      const keys = Object.keys(form.emergency.unreachable) as Array<
        keyof typeof form.emergency.unreachable
      >;
      itemPayload.fields = {
        ...itemPayload.fields,
        "emergency_unreachable@odata.type": "Collection(Edm.String)",
        emergency_unreachable: keys.filter((key) =>
          form.emergency?.unreachable?.[key] ? key.replace(/_/g, " ") : false
        ),
      };
    }

    const response = await client
      .api(
        `/sites/${graphConfig.gfhpmGraphSiteId}/lists/${graphConfig.listId}/items/${id}`
      )
      .update(itemPayload);
    console.log("Item updated to SharePoint:", response);
    return response;
  } catch (error) {
    console.log("Error updating item to SharePoint:", error);
    throw error;
  }
}

export async function getSharePointData(bearerToken: string, itemId: string) {
  try {
    const client = Client.init({
      authProvider: (done) => {
        done(null, bearerToken);
      },
    });
    const responseItem = await client
      .api(
        `/sites/${graphConfig.gfhpmGraphSiteId}/lists/${graphConfig.listId}/items/${itemId}`
      )
      .get();

    return responseItem.fields;
  } catch (error) {
    console.log("Error getting columns: ", error);
    throw error;
  }
}
