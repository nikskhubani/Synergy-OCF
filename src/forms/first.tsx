import { Controller, UseFormReturn } from "react-hook-form";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid2,
  Typography,
} from "@mui/material";
import { TextInputLabel } from "../styles/global";
import { FormWrapper } from "../components/form-wrapper";
import { FormType } from "../schemas/schema";
import { CardTitle, Title } from "../components/title";
import SingleInput from "../components/singleInput";
import SelectDropdown from "../components/select";
import {
  InvoiceSubmissionOptions,
  NewAddressOptions,
  TermsOptions,
} from "../constants/constants";
import SignaturePad from "../components/signature";

type FirstFormProps = {
  form: UseFormReturn<FormType>;
};

export const FirstForm = ({
  form: {
    control,
    watch,
    formState: { errors },
    getValues
  },
}: FirstFormProps) => {
  const importSiteOffice = watch('account.billTo')=== 'Import from Site/Head office';

  return (
    <Box>
      <Title text="Synergy New Account Information" />
      <Typography variant="body2" component="p" gutterBottom>Welcome to Synergy Protection Group! We are honoured to be your security partner and appreciate your trust in our team. At Synergy, we are committed to delivering best-in-class security solutions tailored to your needs while exceeding expectations. Please complete the details below to help us set up your account and ensure a seamless onboarding experience. Thank you for choosing Synergy—we look forward to a strong and lasting partnership! </Typography>

      <FormWrapper>
        <CardTitle text="Company Information" />

        <Controller
          name="companyName"
          control={control}
          render={({ field }) => (
            <SingleInput
              label="Company Name"
              id="companyName"
              isError={!!errors.companyName}
              errorMessage={errors.companyName?.message}
              {...field}
            />
          )}
        />

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Controller
              name="streetNumber"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Street Number"
                  id="streetNumber"
                  isError={!!errors.streetNumber}
                  errorMessage={errors.streetNumber?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="streetName"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Street Name"
                  id="streetName"
                  isError={!!errors.streetName}
                  errorMessage={errors.streetName?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="suiteNo"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Suite No"
                  id="suiteNo"
                  isError={!!errors.suiteNo}
                  errorMessage={errors.suiteNo?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={3}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="City"
                  id="city"
                  isError={!!errors.city}
                  errorMessage={errors.city?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={3}>
            <Controller
              name="province"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Province"
                  id="province"
                  isError={!!errors.province}
                  errorMessage={errors.province?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={3}>
            <Controller
              name="postalCode"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Postal Code"
                  id="postalCode"
                  isError={!!errors.postalCode}
                  errorMessage={errors.postalCode?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={3}>
            <Controller
              name="website"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Website"
                  id="website"
                  isError={!!errors.website}
                  errorMessage={errors.website?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Controller
              name="mainNumber"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Main Number"
                  id="mainNumber"
                  isError={!!errors.mainNumber}
                  errorMessage={errors.mainNumber?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="faxPhone"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Fax Phone"
                  id="faxPhone"
                  isError={!!errors.faxPhone}
                  errorMessage={errors.faxPhone?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="emailAddress"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Email Address"
                  id="emailAddress"
                  isError={!!errors.emailAddress}
                  errorMessage={errors.emailAddress?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
        </Grid2>
      </FormWrapper>

      <FormWrapper>
        <CardTitle marginBottom={1} text="Primary User Information" />
        <Typography sx={{mb: 2}} variant="body2" component="p" gutterBottom>Please provide the details for the primary contact responsible for communication regarding Synergy’s services. </Typography>
        
        <Controller
          name="authorized.name"
          control={control}
          render={({ field }) => (
            <SingleInput
              label="Name"
              id="authorizedName"
              isError={!!errors.authorized?.name}
              errorMessage={errors.authorized?.name?.message}
              {...field}
            />
          )}
        />

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Controller
              name="authorized.position"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Position"
                  id="authorizedposition"
                  isError={!!errors.authorized?.position}
                  errorMessage={errors.authorized?.position?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="authorized.mobileNumber"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Mobile Number"
                  id="authorizedmobileNumber"
                  isError={!!errors.authorized?.mobileNumber}
                  errorMessage={errors.authorized?.mobileNumber?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="authorized.officeNumber"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Office Number"
                  id="authorizedofficeNumber"
                  isError={!!errors.authorized?.officeNumber}
                  errorMessage={errors.authorized?.officeNumber?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Controller
              name="authorized.emailAddress"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Email Address"
                  id="authorizedemailAddress"
                  isError={!!errors.authorized?.emailAddress}
                  errorMessage={errors.authorized?.emailAddress?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}></Grid2>
          <Grid2 size={4}></Grid2>
        </Grid2>

        <Typography variant="body1" component="h6" sx={{ mb: 2 }} gutterBottom>
          System Access & Report Distribution
        </Typography>
        <TextInputLabel htmlFor="name">
          This User is Authorized to (Check All that Apply)
        </TextInputLabel>

        <Grid2 container sx={{ my: 2 }} spacing={2}>
          <Grid2 size={4}>
            <Controller
              name="authorized.systemReport.accessToRealTimeDashboard"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "14px" },
                  }}
                  control={<Checkbox checked={field.value} {...field} />}
                  label="Access To Synergy’s Real-Time Dashboard"
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="authorized.systemReport.receiveDsor"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "14px" },
                  }}
                  control={<Checkbox checked={field.value} {...field} />}
                  label="Receive DSOR (Daily Shift Occurrence Report)"
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="authorized.systemReport.receiveInspection"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "14px" },
                  }}
                  control={<Checkbox checked={field.value} {...field} />}
                  label="Receive Inspection or Response Reports, if applicable"
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Controller
              name="authorized.systemReport.receiveSor"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "14px" },
                  }}
                  control={<Checkbox checked={field.value} {...field} />}
                  label="Receive SOR (Special Occurrence Reports)"
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="authorized.systemReport.receiveSqi"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "14px" },
                  }}
                  control={<Checkbox checked={field.value} {...field} />}
                  label="Receive SQI (Service Quality Inspections Reports)"
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="authorized.systemReport.receiveNotification"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "14px" },
                  }}
                  control={<Checkbox checked={field.value} {...field} />}
                  label="Receive notifications on Service Interruptions"
                />
              )}
            />
          </Grid2>
        </Grid2>
      </FormWrapper>

      <FormWrapper>
        <CardTitle marginBottom={1} text="Account Payable Information" />
        <Typography sx={{mb: 2}} variant="body2" component="p" gutterBottom>
          A summary of the agreed-upon security services, including scope, pricing, and key deliverables. 
        </Typography>

        <Controller
          name="account.name"
          control={control}
          render={({ field }) => (
            <SingleInput
              label="Name"
              id="accountName"
              isError={!!errors.account?.name}
              errorMessage={errors.account?.name?.message}
              {...field}
            />
          )}
        />

        <Grid2 container spacing={2}>
          <Grid2 size={3}>
            <Controller
              name="account.faxNumber"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Fax Number"
                  id="accountfaxNumber"
                  isError={!!errors.account?.faxNumber}
                  errorMessage={errors.account?.faxNumber?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={3}>
            <Controller
              name="account.directNumber"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Direct Number"
                  id="accountdirectNumber"
                  isError={!!errors.account?.directNumber}
                  errorMessage={errors.account?.directNumber?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={3}>
            <Controller
              name="account.directNumber"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Ext"
                  id="accountExt"
                  isError={!!errors.account?.directNumber}
                  errorMessage={errors.account?.directNumber?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={3}>
            <Controller
              name="account.emailAddress"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Email Address"
                  id="accountemailAddress"
                  isError={!!errors.account?.emailAddress}
                  errorMessage={errors.account?.emailAddress?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <Controller
              name="account.invoiceSubmission"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Invoice Submission"
                  options={InvoiceSubmissionOptions}
                  // isError={!!errors[field.name]}
                  // errorMessage={errors[field.name]?.message?.toString()}
                />
              )}
            />
          </Grid2>
          {watch('account.invoiceSubmission')?.includes('ERP') && (
            <Grid2 size={12}>
              <Controller
                name="account.invoiceSubmissionPo"
                control={control}
                render={({ field }) => (
                  <SingleInput
                    label="Platform – Ref/PO"
                    id="platform-ref-po"
                    // isError={!!errors.account?.emailAddress}
                    // errorMessage={errors.account?.emailAddress?.message}
                    {...field}
                  />
                )}
              />
            </Grid2>
          )}

          {watch('account.invoiceSubmission') === 'Email' && (
            <Grid2 size={12}>
              <Controller
                name="account.invoiceSubmissionEmail"
                control={control}
                render={({ field }) => (
                  <SingleInput
                    label="Email Address"
                    id="emailAddress"
                    // isError={!!errors.account?.emailAddress}
                    // errorMessage={errors.account?.emailAddress?.message}
                    {...field}
                  />
                )}
              />
            </Grid2>
          )}

          {watch('account.invoiceSubmission') === 'Fax' && (
            <Grid2 size={12}>
              <Controller
                name="account.invoiceSubmissionFax"
                control={control}
                render={({ field }) => (
                  <SingleInput
                    label="Fax Number"
                    id="faxNumber"
                    // isError={!!errors.account?.emailAddress}
                    // errorMessage={errors.account?.emailAddress?.message}
                    {...field}
                  />
                )}
              />
            </Grid2>
          )}

          {watch('account.invoiceSubmission') === 'Mail' && (
            <Grid2 size={12}>
              <Controller
                name="account.invoiceSubmissionMail"
                control={control}
                render={({ field }) => (
                  <SelectDropdown
                    {...field}
                    label="Mail Options"
                    options={NewAddressOptions}
                    // isError={!!errors[field.name]}
                    // errorMessage={errors[field.name]?.message?.toString()}
                  />
                )}
              />
            </Grid2>
          )}
        </Grid2>

        {watch('account.invoiceSubmissionMail') === 'New Address' && (
          <>
            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Controller
                  name="authorized.streetNumber"
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Street Number"
                      id="authorizedStreetNumber"
                      isError={!!errors.authorized?.streetNumber}
                      errorMessage={errors.authorized?.streetNumber?.message}
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name="authorized.streetName"
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Street Name"
                      id="authorizedStreetName"
                      isError={!!errors.authorized?.streetName}
                      errorMessage={errors.authorized?.streetName?.message}
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name="authorized.suiteNo"
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Suite No"
                      id="authorizedSuiteNo"
                      isError={!!errors.authorized?.suiteNo}
                      errorMessage={errors.authorized?.suiteNo?.message}
                      {...field}
                    />
                  )}
                />
              </Grid2>
            </Grid2>

            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Controller
                  name="authorized.city"
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="City"
                      id="authorizedcity"
                      isError={!!errors.authorized?.city}
                      errorMessage={errors.authorized?.city?.message}
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name="authorized.province"
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Province"
                      id="authorizedProvince"
                      isError={!!errors.authorized?.province}
                      errorMessage={errors.authorized?.province?.message}
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name="authorized.postalCode"
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Postal Code"
                      id="authorizedPostalCode"
                      isError={!!errors.authorized?.postalCode}
                      errorMessage={errors.authorized?.postalCode?.message}
                      {...field}
                    />
                  )}
                />
              </Grid2>
            </Grid2>
          </>
        )}

        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <Controller
              name="account.invoiceBackup"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Invoice Backup Required"
                  options={['Yes', 'No']}
                  // isError={!!errors[field.name]}
                  // errorMessage={errors[field.name]?.message?.toString()}
                />
              )}
            />
          </Grid2>
          <Grid2 size={12}>
            <Controller
              name="account.invoicePO"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="PO required on Invoices"
                  options={['Yes', 'No']}
                  // isError={!!errors[field.name]}
                  // errorMessage={errors[field.name]?.message?.toString()}
                />
              )}
            />
          </Grid2>
          {watch('account.invoicePO') === 'Yes' && (
            <Grid2 size={12}>
              <Controller
                name="account.invoiceSubmissionPo"
                control={control}
                render={({ field }) => (
                  <SingleInput
                    label="Add a PO"
                    id="addAPO"
                    isError={!!errors.account?.emailAddress}
                    errorMessage={errors.account?.emailAddress?.message}
                    {...field}
                  />
                )}
              />
            </Grid2>
          )}

          <Grid2 size={12}>
            <Controller
              name="account.billTo"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Bill To Alternative"
                  options={['Import from Site/Head office', 'New']}
                  // isError={!!errors[field.name]}
                  // errorMessage={errors[field.name]?.message?.toString()}
                />
              )}
            />
          </Grid2>
          {/* {watch('account.billTo') === 'New' && (
            <Grid2 size={12}>
              <Controller
                name="account.emailAddress"
                control={control}
                render={({ field }) => (
                  <SingleInput
                    label="Bill To Name"
                    id="addAPO"
                    isError={!!errors.account?.emailAddress}
                    errorMessage={errors.account?.emailAddress?.message}
                    {...field}
                  />
                )}
              />
            </Grid2>
          )} */}
        </Grid2>

        {['Import from Site/Head office', 'New'].includes(watch('account.billTo') || '') && (
          <>
            <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <Controller
                name="authorized.streetNumber"
                control={control}
                render={({ field }) => (
                  <SingleInput
                    label="Street Number"
                    id="authorizedStreetNumber"
                    defaultValue={importSiteOffice ? getValues('streetNumber') : ''}
                    isError={!!errors.authorized?.streetNumber}
                    errorMessage={errors.authorized?.streetNumber?.message}
                    {...field}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="authorized.streetName"
                control={control}
                render={({ field }) => (
                  <SingleInput
                    label="Street Name"
                    id="authorizedStreetName"
                    defaultValue={importSiteOffice ? getValues('streetName') : ''}
                    isError={!!errors.authorized?.streetName}
                    errorMessage={errors.authorized?.streetName?.message}
                    {...field}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={4}>
              <Controller
                name="authorized.suiteNo"
                control={control}
                render={({ field }) => (
                  <SingleInput
                    label="Suite No"
                    id="authorizedSuiteNo"
                    defaultValue={importSiteOffice ? getValues('suiteNo') : ''}
                    isError={!!errors.authorized?.suiteNo}
                    errorMessage={errors.authorized?.suiteNo?.message}
                    {...field}
                  />
                )}
              />
            </Grid2>
            </Grid2>

            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Controller
                  name="authorized.city"
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="City"
                      id="authorizedcity"
                      defaultValue={importSiteOffice ? getValues('city') : ''}
                      isError={!!errors.authorized?.city}
                      errorMessage={errors.authorized?.city?.message}
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name="authorized.province"
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Province"
                      id="authorizedProvince"
                      defaultValue={importSiteOffice ? getValues('province') : ''}
                      isError={!!errors.authorized?.province}
                      errorMessage={errors.authorized?.province?.message}
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name="authorized.postalCode"
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Postal Code"
                      id="authorizedPostalCode"
                      defaultValue={importSiteOffice ? getValues('postalCode') : ''}
                      isError={!!errors.authorized?.postalCode}
                      errorMessage={errors.authorized?.postalCode?.message}
                      {...field}
                    />
                  )}
                />
              </Grid2>
            </Grid2>
          </>
        )}

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Controller
              name="account.emailAddressFax"
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Email Address / Fax No"
                  id="accountemailAddressFax"
                  isError={!!errors.account?.emailAddressFax}
                  errorMessage={errors.account?.emailAddressFax?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={4}>
            <Controller
              name="account.invoiceSubmissionPo"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Billing Frequency"
                  options={['Per Instance', 'Weekly', 'Biweekly', 'Monthly ']}
                  // isError={!!errors[field.name]}
                  // errorMessage={errors[field.name]?.message?.toString()}
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <Controller
              name="account.paymentMethod"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Payment Method"
                  options={["EFT", "Cheque", "Credit"]}
                  // isError={true}
                  // errorMessage={'3% Surcharge Applies'}
                  message={watch("account.paymentMethod") === "Credit" ? "(3% Surcharge Applies)" : ""}
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <Controller
              name="account.terms"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Terms"
                  options={TermsOptions}
                  // isError={true}
                  // errorMessage={'3% Surcharge Applies'}
                />
              )}
            />
          </Grid2>
        </Grid2>

        {watch('account.terms')?.includes('PAD') ? (
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <Controller
                name="account.pad"
                control={control}
                render={({ field }) => (
                  <SelectDropdown
                    {...field}
                    label="Discount Rate"
                    options={["Yes", "No"]}
                    // isError={true}
                    // errorMessage={'3% Surcharge Applies'}
                  />
                )}
              />
            </Grid2>
          </Grid2>
        ) : null}

        {watch('account.pad') === 'Yes' ? (
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <Controller
                name="account.padDiscount"
                control={control}
                render={({ field }) => (
                  <SingleInput
                    label="Discount Percentage"
                    id="discountPercentage"
                    // isError={!!errors.account?.emailAddress}
                    // errorMessage={errors.account?.emailAddress?.message}
                    {...field}
                  />
                )}
              />
            </Grid2>
          </Grid2>
        ) : null}

        <Grid2 container spacing={2}>
          <Grid2 size={12}>
            <Typography>Arrears Interest Acknowledgement</Typography>
          </Grid2>
          <Grid2 size={12}>
            <Controller
              name="account.acknowledge"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "14px" },
                  }}
                  control={<Checkbox checked={field.value} {...field} />}
                  label="I acknowledge that overdue balances are subject to 2.5% interest per month (30% per annum) until paid in full. This policy is part of Synergy Protection Group Inc.'s Terms of Service, further outlined in our service agreements."
                />
              )}
            />
          </Grid2>
          <Grid2 size={12}>
          <SignaturePad />
          </Grid2>
        </Grid2>
      </FormWrapper>
    </Box>
  );
};
