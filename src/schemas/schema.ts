import { z } from 'zod';

export const FormSchema = z.object({
  companyName: z.string().optional(),
  streetNumber: z.coerce.number().optional(),
  streetName: z.string().optional(),
  suiteNo: z.coerce.number().optional(),
  city: z.string().optional(),
  province: z.string().optional(),
  postalCode: z.string().optional(),
  website: z.string().url().optional(),
  mainNumber: z.string().optional(),
  faxPhone: z.string().optional(),
  emailAddress: z.string().email().optional(),
  authorized: z.object({
    name: z.string().optional(),
    position: z.string().optional(),
    mobileNumber: z.string().optional(),
    officeNumber: z.string().optional(),
    faxNumber: z.string().optional(),
    emailAddress: z.string().email().optional(),
  }).optional(),
  account: z.object({
    name: z.string().optional(),
    directNumber: z.string().optional(),
    faxNumber: z.string().optional(),
    emailAddress: z.string().email().optional(),
    invoiceDelivery: z.object({
      email: z.boolean().optional(),
      fax: z.boolean().optional(),
      mail: z.boolean().optional(),
    }).optional(),
    emailAddressFax: z.string().optional(),
    paymentMethod: z.object({
      eft: z.boolean().optional(),
      cheque: z.boolean().optional(),
      card: z.boolean().optional(),
    }).optional(),
  }).optional(),
  emergency: z.object({
    companyName: z.string().optional(),
    siteName: z.string().optional(),
    streetNumber: z.coerce.number().optional(),
    streetName: z.string().optional(),
    suiteNo: z.coerce.number().optional(),
    city: z.string().optional(),
    province: z.string().optional(),
    postalCode: z.string().optional(),
    contact: z.array(z.object({
      name: z.string().optional(),
      primaryNumber: z.string().optional(),
      secondaryNumber: z.string().optional(),
      emailAddress: z.string().email().optional(),
      authorizedToMakeChanges: z.boolean().optional(),
      accessToLiveStream: z.boolean().optional(),
      overrideAlarmDispatch: z.boolean().optional(),
      receiveAlarmNotification: z.boolean().optional(),
      receiveIncidentReport: z.boolean().optional(),
      onlineAccessToReportingSystem: z.boolean().optional(),
    })).optional(),
    unreachable: z.object({
      dispatchSynergyAlarmResponse: z.boolean().optional(),
      dispatchPolice: z.boolean().optional(),
      dispatchAnotherServiceProvider: z.boolean().optional(),
      dontDispatch: z.boolean().optional(),
    }).optional()
  }).optional(),
  authorization: z.object({
    client: z.string().optional(),
    address: z.string().optional(),
    effectiveDate: z.string().optional(),
    multipleLocations: z.boolean().optional(),
    signature: z.string().optional(),
    position: z.string().optional(),
    fullName: z.string().optional(),
  }).optional()
});

export type FormType = z.infer<typeof FormSchema>;