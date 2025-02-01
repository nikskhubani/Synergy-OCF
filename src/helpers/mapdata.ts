import { FormType } from "../schemas/schema";
import { DataType } from "../types/data";

const returnMap = (data: string[]) => data?.reduce((a, b) => ({...a, [b]: true}), {})

export const mapData = (data: DataType): FormType => {
  return {
    companyName: data.company_name,
    streetNumber: +data.street_number,
    streetName: data.street_name,
    suiteNo: +data.suite_no,
    city: data.city,
    province: data.province,
    postalCode: data.postal_code,
    website: data.website,
    mainNumber: data.main_number,
    faxPhone: data.fax_number,
    emailAddress: data.email_address,
    authorized: {
      name: data.authorized_name,
      position: data.authorized_position,
      mobileNumber:data.authorized_phone_number,
      officeNumber: data.authorized_office_number,
      faxNumber: data.authorized_fax_number,
      emailAddress: data.authorized_email_address,
    },
    account: {
      name: data.account_name,
      directNumber: data.account_direct_number,
      faxNumber: data.account_fax_number,
      emailAddress: data.account_email_address,
      invoiceDelivery: returnMap(data.invoice_delivery),
      emailAddressFax: data.email_address_or_fax,
      paymentMethod: returnMap(data.payment_method),
    },
    emergency: {
      companyName: data.emergency_company_name,
      siteName: data.emergency_project_site_name,
      streetNumber: +data.emergency_street_number,
      streetName: data.emergency_street_name,
      suiteNo: +data.emergency_suite_no,
      city: data.emergency_city,
      province: data.emergency_province,
      postalCode: data.emergency_postal_code,
      contact: data.emergency_contacts && typeof data.emergency_contacts === 'string' ? JSON.parse(data.emergency_contacts) : [],
      unreachable: returnMap(data.emergency_unreachable),
    },
    authorization: {
      client: data.authorization_client,
      address: data.authorization_address,
      effectiveDate: data.authorization_effective_date,
      multipleLocations: data.authorization_multiple_locations,
      signature: data.authorization_signature,
      position: data.authorization_position,
      fullName: data.authorization_fullname,
    },
  };
};
