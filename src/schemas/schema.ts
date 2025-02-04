import { z } from 'zod';
import {isMobilePhone} from 'validator'

export const FormSchema = z.object({
  companyName: z.string().optional(),
  streetNumber: z.coerce.number().optional(),
  streetName: z.string().optional(),
  suiteNo: z.coerce.number().optional(),
  city: z.string().optional(),
  province: z.string().optional(),
  postalCode: z.string().optional(),
  website: z.string().url().optional(),
  mainNumber: z.string().trim().optional().refine((val) => val ? isMobilePhone(val) : true, 'Invalid Phone'),
  faxPhone: z.string().optional(),
  emailAddress: z.string().email().optional(),
  authorized: z.object({
    name: z.string().optional(),
    position: z.string().optional(),
    mobileNumber: z.string().trim().optional().refine((val) => val ? isMobilePhone(val) : true, 'Invalid Phone'),
    officeNumber: z.string().trim().optional().refine((val) => val ? isMobilePhone(val) : true, 'Invalid Phone'),
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
      primaryNumber: z.string().trim().optional().refine((val) => val ? isMobilePhone(val) : true, 'Invalid Phone'),
      secondaryNumber: z.string().trim().optional().refine((val) => val ? isMobilePhone(val) : true, 'Invalid Phone'),
      emailAddress: z.string().email().optional(),
      authorizedToMakeChanges: z.boolean().optional(),
      accessToLiveStream: z.boolean().optional(),
      overrideAlarmDispatch: z.boolean().optional(),
      receiveAlarmNotification: z.boolean().optional(),
      receiveIncidentReport: z.boolean().optional(),
      onlineAccessToReportingSystem: z.boolean().optional(),
    })).optional(),
    unreachable: z.object({
      dispatch_synergy_alarm_response: z.boolean().optional(),
      dispatch_police: z.boolean().optional(),
      dispatch_another_service_provider: z.boolean().optional(),
      do_not_take_dispatch_action: z.boolean().optional(),
    }).optional()
  }).optional(),
  authorization: z.object({
    client: z.string().optional(),
    address: z.string().optional(),
    effectiveDate: z.coerce.date().optional(),
    multipleLocations: z.boolean().optional(),
    signature: z.string().optional(),
    position: z.string().optional(),
    fullName: z.string().optional(),
  }).optional(),
  additionalUsers: z.array(z.object({
    name: z.string().optional(),
    position: z.string().optional(),
    telephone: z.string().trim().optional().refine((val) => val ? isMobilePhone(val) : true, 'Invalid Phone'),
    emailAddress: z.string().email().optional(),
    securityReport: z.boolean().optional(),
    specialOccurrences: z.boolean().optional(),
    QAInspectionReport: z.boolean().optional(),
    systemNotice: z.boolean().optional(),
  })).optional()
});

export type FormType = z.infer<typeof FormSchema>;