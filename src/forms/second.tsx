import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  styled,
  Typography,
} from "@mui/material";
import { FormWrapper } from "../components/form-wrapper";
import { TextInputLabel } from "../styles/global";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import { FormType } from "../schemas/schema";
import { useEffect } from "react";
import { CardTitle, Title } from "../components/title";
import SingleInput from "../components/singleInput";
import SelectDropdown from "../components/select";
import {
  BilledPerOptions,
  LocationTypeOptions,
  PriceOptions,
  ServiceOptions,
} from "../constants/constants";
import DatePickerInput from "../components/datepicker";

type SecondFormProps = {
  form: UseFormReturn<FormType>;
};

export const SecondForm = ({
  form: {
    control,
    watch,
    formState: { errors },
  },
}: SecondFormProps) => {
  const {
    fields: contactFields,
    append: newContact,
    remove: removeContact,
  } = useFieldArray({
    control,
    name: "emergency.contact",
  });
  const {
    fields: userFields,
    append: newUser,
    remove: removeUser,
  } = useFieldArray({
    control,
    name: "additionalUsers",
  });

  useEffect(() => {
    if (!contactFields.length && !userFields.length) {
      newContact({});
      newUser({});
    }
  }, []);

  return (
    <Box>
      <Title text="Service Overview" />
      <Typography variant="body2" component="p" gutterBottom>
        A summary of the agreed-upon security services, including scope, pricing, and key deliverables.  
        </Typography>

      <FormWrapper>
        {/* <CardTitle text="Service Location" /> */}

        <Controller
          name="authorized.siteName"
          control={control}
          render={({ field }) => (
            <SingleInput
              label="Site/Project Name"
              id="siteProjectName"
              isError={!!errors.authorized?.siteName}
              errorMessage={errors.authorized?.siteName?.message}
              {...field}
            />
          )}
        />

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

        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Controller
              name="authorized.city"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Location Type"
                  options={LocationTypeOptions}
                  // isError={!!errors[field.name]}
                  // errorMessage={errors[field.name]?.message?.toString()}
                />
              )}
            />
          </Grid2>
          <Grid2 size={6}>
            <Controller
              name="authorized.city"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Service Environment"
                  options={[]}
                  // isError={!!errors[field.name]}
                  // errorMessage={errors[field.name]?.message?.toString()}
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <SingleInput label="Scope of Work" />
          </Grid2>
          <Grid2 size={4}>
            <SingleInput label="eference RFP/Quote Number" />
          </Grid2>
          <Grid2 size={4}>
            <SelectDropdown
              label="Service Environment"
              onChange={() => null}
              options={[
                "High Risk",
                "Mid Risk",
                "Low Risk",
                "Customer Service",
              ]}
              value=""
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          </Grid2>
        </Grid2>

        <SelectDropdown
          label="Service Type"
          onChange={() => null}
          options={["Traffic Management"]}
          value=""
          // isError={!!errors[field.name]}
          // errorMessage={errors[field.name]?.message?.toString()}
        />

        <Controller
          name="serviceDetails.service"
          control={control}
          render={({ field }) => (
            <SelectDropdown
              {...field}
              label="Service"
              options={ServiceOptions}
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          )}
        />
        {watch("serviceDetails.service") === "Other" ? (
          <Controller
            name="serviceDetails.serviceOther"
            control={control}
            render={({ field }) => (
              <SingleInput
                label="Other"
                id="serviceDetailsserviceOther"
                // isError={!!errors.emergency?.contact?.[idx]?.name}
                // errorMessage={errors.emergency?.contact?.[idx]?.name?.message}
                {...field}
              />
            )}
          />
        ) : null}
        <Controller
          name="authorized.city"
          control={control}
          render={({ field }) => (
            <SelectDropdown
              {...field}
              label="Rates"
              options={PriceOptions}
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          )}
        />
        <Grid2 sx={{ alignItems: "end" }} container spacing={2}>
          <Grid2 size={2}>
            <SingleInput
              label="Regular Rate"
              id="serviceDetails.billedPerOther"
            />
          </Grid2>

          <Grid2 size={2}>
            <SingleInput
              label="Statutory Holiday Rate"
              id="serviceDetails.billedPerOther"
            />
          </Grid2>

          <Grid2 size={2}>
            <SingleInput
              label="Emergency Coverage Rate"
              id="serviceDetails.billedPerOther"
            />
          </Grid2>

          <Grid2 size={2}>
            <SingleInput
              label="Emergency Coverage Rate"
              id="serviceDetails.billedPerOther"
            />
          </Grid2>

          <Grid2 size={2}>
            <SingleInput
              label="Overtime Rate "
              id="serviceDetails.billedPerOther"
            />
          </Grid2>

          <Grid2 size={2}>
            <SingleInput
              label="Holiday Emergency Rate "
              id="serviceDetails.billedPerOther"
            />
          </Grid2>
        </Grid2>

        <Typography variant="body2" component="h6" sx={{ mb: 2 }} gutterBottom>
          Synergy applies statutory holiday rates for Ontario’s 10 recognized statutory holidays. Overtime charges apply only when a client requests a specific staff member. Emergency rates and holiday emergency rates are billed separately and apply only upon request.
        </Typography>

        <Controller
          name="serviceDetails.uniformStyle"
          control={control}
          render={({ field }) => (
            <SelectDropdown
              {...field}
              label="Uniform Style"
              options={['Standard Security', 'Tactical Security', 'Concierge', 'Custom']}
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          )}
        />
        {watch("serviceDetails.uniformStyle") === "Custom" ? (
          <SingleInput
          label="Custom"
          id="serviceDetails.billedPerOther"
          // isError={!!errors.emergency?.contact?.[idx]?.name}
          // errorMessage={errors.emergency?.contact?.[idx]?.name?.message}
          // {...field}
        />
        ) : null}

<Controller
          name="serviceDetails.tacticalEquipment"
          control={control}
          render={({ field }) => (
            <SelectDropdown
              {...field}
              label="Tactical Equipment"
              options={['Baton & Handcuff', 'Handcuff Only', 'No Compliance Tools', 'Custom']}
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          )}
        />
        {watch("serviceDetails.tacticalEquipment") === "Custom" ? (
          <SingleInput
          label="Custom"
          id="serviceDetails.billedPerOther"
          // isError={!!errors.emergency?.contact?.[idx]?.name}
          // errorMessage={errors.emergency?.contact?.[idx]?.name?.message}
          // {...field}
        />
        ) : null}

<Controller
          name="serviceDetails.vehicleRequired"
          control={control}
          render={({ field }) => (
            <SelectDropdown
              {...field}
              label="Vehicle Required"
              options={['N/A', 'Patrol Vehicle', 'Personal Vehicle ($4.00 Surcharge)']}
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          )}
        />
        {watch("serviceDetails.vehicleRequired") && watch("serviceDetails.vehicleRequired") !== 'N/A' ? (
          <Controller
            name="serviceDetails.billedPerOther"
            control={control}
            render={({ field }) => (
              <SingleInput
                label={watch("serviceDetails.vehicleRequired") || ''}
                id="serviceDetails.billedPerOther"
                // isError={!!errors.emergency?.contact?.[idx]?.name}
                // errorMessage={errors.emergency?.contact?.[idx]?.name?.message}
                {...field}
              />
            )}
            />
          ) : null}

          <SingleInput
            label="Access Codes & Other Requirements"
            id="serviceDetails.billedPerOther"
            // isError={!!errors.emergency?.contact?.[idx]?.name}
            // errorMessage={errors.emergency?.contact?.[idx]?.name?.message}
          />
          <Controller
          name="serviceDetails.trainingRequired"
          control={control}
          render={({ field }) => (
            <SelectDropdown
              {...field}
              label="Training Required"
              options={[]}
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          )}
        />
        <Controller
          name="serviceDetails.billedPer"
          control={control}
          render={({ field }) => (
            <SelectDropdown
              {...field}
              label="Billed Per"
              options={BilledPerOptions}
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          )}
        />
        {watch("serviceDetails.billedPer") === "Other" ? (
          <Controller
            name="serviceDetails.billedPerOther"
            control={control}
            render={({ field }) => (
              <SingleInput
                label="Other"
                id="serviceDetails.billedPerOther"
                // isError={!!errors.emergency?.contact?.[idx]?.name}
                // errorMessage={errors.emergency?.contact?.[idx]?.name?.message}
                {...field}
              />
            )}
          />
        ) : null}

        <Controller
          name="serviceSchedule.startDate"
          control={control}
          render={({ field }) => (
            <DatePickerInput
              {...field}
              label="Start Date"
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          )}
        />

        <Controller
          name="serviceSchedule.coverage"
          control={control}
          render={({ field }) => (
            <SelectDropdown
              {...field}
              label="Coverage"
              options={["Ad hoc", "Reoccurring Hours"]}
              // isError={!!errors[field.name]}
              // errorMessage={errors[field.name]?.message?.toString()}
            />
          )}
        />

        {watch("serviceSchedule.coverage") && (
          <Box>
            {[
              "Monday",
              "Tuesday",
              "Wednessday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <Grid2
                key={day}
                sx={{ alignItems: "center" }}
                container
                spacing={2}
              >
                <Grid2 size={2}>
                  <DatePickerInput
                    label="Date"
                    // isError={!!errors[field.name]}
                    // errorMessage={errors[field.name]?.message?.toString()}
                  />
                </Grid2>

                <Grid2 size={1}>
                  <Box>{day}</Box>
                </Grid2>

                <Grid2 size={1}>
                  <SingleInput
                    label="Guard QTY"
                    id="serviceDetails.billedPerOther"
                  />
                </Grid2>

                <Grid2 size={2}>
                  <DatePickerInput
                    label="Start Time"
                    // isError={!!errors[field.name]}
                    // errorMessage={errors[field.name]?.message?.toString()}
                  />
                </Grid2>

                <Grid2 size={2}>
                  <DatePickerInput
                    label="End Time"
                    // isError={!!errors[field.name]}
                    // errorMessage={errors[field.name]?.message?.toString()}
                  />
                  
                </Grid2>

                <Grid2 size={watch("serviceSchedule.coverage") === 'Ad hoc' ? 2 : 4}>
                  <SingleInput
                    label="Comment"
                    id="serviceDetails.billedPerOther"
                  />
                </Grid2>
                {watch("serviceSchedule.coverage") === 'Ad hoc' && (
                  <Grid2 size={2}>
                    <DatePickerInput
                      label="End Date"
                      // isError={!!errors[field.name]}
                      // errorMessage={errors[field.name]?.message?.toString()}
                    />
                  </Grid2>
                )}
              </Grid2>
            ))}
          </Box>
        )}
      </FormWrapper>

      <FormWrapper>
        <CardTitle marginBottom={1} text="Site Authorized Contact" />
        <Typography sx={{mb: 2}} variant="body2" component="p" gutterBottom>
        Please list the individuals authorized to make service-related requests and site-specific changes on behalf of your organization.  
        </Typography>

        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Controller
              name={`siteAuthorizedContact.name`}
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Name"
                  id={`siteAuthorizedContact-name`}
                  isError={!!errors.siteAuthorizedContact?.name}
                  errorMessage={errors.siteAuthorizedContact?.name?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={6}>
            <Controller
              name={`siteAuthorizedContact.emailAddress`}
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Email Address"
                  id={`siteAuthorizedContact-email`}
                  isError={!!errors.siteAuthorizedContact?.emailAddress}
                  errorMessage={
                    errors.siteAuthorizedContact?.emailAddress?.message
                  }
                  {...field}
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Controller
              name={`siteAuthorizedContact.position`}
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Position"
                  id={`siteAuthorizedContact-position`}
                  isError={!!errors.siteAuthorizedContact?.position}
                  errorMessage={errors.siteAuthorizedContact?.position?.message}
                  {...field}
                />
              )}
            />
          </Grid2>
          <Grid2 size={6}>
            <Controller
              name={`siteAuthorizedContact.telephone`}
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Telephone"
                  id={`siteAuthorizedContact-telephone`}
                  isError={!!errors.siteAuthorizedContact?.telephone}
                  errorMessage={
                    errors.siteAuthorizedContact?.telephone?.message
                  }
                  {...field}
                />
              )}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Controller
              name={`siteAuthorizedContact.accessToRealTimeDashboard`}
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
              name={`siteAuthorizedContact.receiveDsor`}
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
              name={`siteAuthorizedContact.receiveInspection`}
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
              name={`siteAuthorizedContact.receiveSor`}
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
              name={`siteAuthorizedContact.receiveSqi`}
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
              name={`siteAuthorizedContact.receiveNotification`}
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

        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Controller
              name="authorized.city"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Authorized Contact Role with service"
                  options={[
                    "Full Control (Order, Change, Cancel Services) ",
                    "Limited (Change Service, but not ordering or cancelling)",
                    "None",
                  ]}
                  // isError={!!errors[field.name]}
                  // errorMessage={errors[field.name]?.message?.toString()}
                />
              )}
            />
          </Grid2>
          <Grid2 size={6}>
            <Controller
              name="authorized.city"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  {...field}
                  label="Authorized Contact Role with Security Directive/Scope "
                  options={[
                    "Full Control (Order, Change, Update Scope of Work)",
                    "Limited (Change Scope of Work, but not ordering or cancelling)",
                    "None",
                  ]}
                  // isError={!!errors[field.name]}
                  // errorMessage={errors[field.name]?.message?.toString()}
                />
              )}
            />
          </Grid2>
        </Grid2>
      </FormWrapper>

      <FormWrapper>
        <CardTitle marginBottom={1} text="Emergency Contact" />
        <Typography sx={{mb: 2}} variant="body2" component="p" gutterBottom>
        Please provide emergency contact details for urgent security-related matters outside regular business hours.   
        </Typography>

        {contactFields.map((field, idx) => (
          <Box
            key={field.id}
            sx={{
              width: "100%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Controller
              name={`emergency.contact.${idx}.name`}
              control={control}
              render={({ field }) => (
                <SingleInput
                  label="Name"
                  id={`emergencyContact${idx}Name`}
                  isError={!!errors.emergency?.contact?.[idx]?.name}
                  errorMessage={errors.emergency?.contact?.[idx]?.name?.message}
                  {...field}
                />
              )}
            />

            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Controller
                  name={`emergency.contact.${idx}.primaryNumber`}
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Primary Number"
                      id={`emergencyprimaryNumber-${idx}`}
                      isError={
                        !!errors.emergency?.contact?.[idx]?.primaryNumber
                      }
                      errorMessage={
                        errors.emergency?.contact?.[idx]?.primaryNumber?.message
                      }
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name={`emergency.contact.${idx}.secondaryNumber`}
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Secondary Number"
                      id={`emergencySecondaryNumber-${idx}`}
                      isError={
                        !!errors.emergency?.contact?.[idx]?.secondaryNumber
                      }
                      errorMessage={
                        errors.emergency?.contact?.[idx]?.secondaryNumber
                          ?.message
                      }
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name={`emergency.contact.${idx}.emailAddress`}
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Email Address"
                      id={`emergencyEmailAddress-${idx}`}
                      isError={!!errors.emergency?.contact?.[idx]?.emailAddress}
                      errorMessage={
                        errors.emergency?.contact?.[idx]?.emailAddress?.message
                      }
                      {...field}
                    />
                  )}
                />
              </Grid2>
            </Grid2>

            <Typography
              variant="body1"
              component="h6"
              sx={{ mb: 2 }}
              gutterBottom
            >
              System Access & Report Distribution
            </Typography>
            <TextInputLabel htmlFor="name">
              This User is Authorized to (Check All that Apply)
            </TextInputLabel>

            <Grid2 container sx={{ my: 2 }} spacing={2}>
              <Grid2 size={4}>
                <Controller
                  name={`emergency.contact.${idx}.authorizedToMakeChanges`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                      }}
                      control={<Checkbox checked={field.value} {...field} />}
                      label="Authorized to make service request/changes"
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name={`emergency.contact.${idx}.accessToLiveStream`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                      }}
                      control={<Checkbox checked={field.value} {...field} />}
                      label="Access to Live Stream"
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name={`emergency.contact.${idx}.overrideAlarmDispatch`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                      }}
                      control={<Checkbox checked={field.value} {...field} />}
                      label="Override Alarm Dispatch Procedures"
                    />
                  )}
                />
              </Grid2>
            </Grid2>

            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Controller
                  name={`emergency.contact.${idx}.receiveAlarmNotification`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                      }}
                      control={<Checkbox checked={field.value} {...field} />}
                      label="Receive Alarm Notification (False/Positive)"
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name={`emergency.contact.${idx}.receiveIncidentReport`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                      }}
                      control={<Checkbox checked={field.value} {...field} />}
                      label="Receive Incident Reports (SOR)"
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={4}>
                <Controller
                  name={`emergency.contact.${idx}.onlineAccessToReportingSystem`}
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                      }}
                      control={<Checkbox checked={field.value} {...field} />}
                      label="Online Access to Reporting System"
                    />
                  )}
                />
              </Grid2>
            </Grid2>

            <RemoveWrapper>
              <RemoveButton color="error" onClick={() => removeContact(idx)}>
                Remove
              </RemoveButton>
            </RemoveWrapper>
          </Box>
        ))}

        <Button type="button" variant="outlined" onClick={() => newContact({})}>
          Add More Contact
        </Button>
      </FormWrapper>

      <FormWrapper>
        <CardTitle marginBottom={1} text=" Additional Electronic Report Delivery" />
        <Typography sx={{mb: 2}} variant="body2" component="p" gutterBottom>
        Please specify any additional recipients who should receive electronic security reports related to your services.   
        </Typography>
        {/* <Typography
          sx={{ textAlign: "center" }}
          variant="body2"
          component="p"
          gutterBottom
        >
          Please complete this form in full; The emergency contacts listed will
          be called in order listed
        </Typography> */}

        {userFields.map((field, idx) => (
          <Box
            key={field.id}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <Controller
                  name={`additionalUsers.${idx}.name`}
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Name"
                      id={`additionalUsers-name-${idx}`}
                      isError={!!errors.additionalUsers?.[idx]?.name}
                      errorMessage={
                        errors.additionalUsers?.[idx]?.name?.message
                      }
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={6}>
                <Controller
                  name={`additionalUsers.${idx}.emailAddress`}
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Email Address"
                      id={`additionalUsers-email-${idx}`}
                      isError={!!errors.additionalUsers?.[idx]?.emailAddress}
                      errorMessage={
                        errors.additionalUsers?.[idx]?.emailAddress?.message
                      }
                      {...field}
                    />
                  )}
                />
              </Grid2>
            </Grid2>

            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <Controller
                  name={`additionalUsers.${idx}.position`}
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Position"
                      id={`additionalUsers-position-${idx}`}
                      isError={!!errors.additionalUsers?.[idx]?.position}
                      errorMessage={
                        errors.additionalUsers?.[idx]?.position?.message
                      }
                      {...field}
                    />
                  )}
                />
              </Grid2>
              <Grid2 size={6}>
                <Controller
                  name={`additionalUsers.${idx}.telephone`}
                  control={control}
                  render={({ field }) => (
                    <SingleInput
                      label="Telephone"
                      id={`additionalUsers-telephone-${idx}`}
                      isError={!!errors.additionalUsers?.[idx]?.telephone}
                      errorMessage={
                        errors.additionalUsers?.[idx]?.telephone?.message
                      }
                      {...field}
                    />
                  )}
                />
              </Grid2>
            </Grid2>

            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Controller
                  name={`additionalUsers.${idx}.securityReport`}
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
                  name={`additionalUsers.${idx}.QAInspectionReport`}
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
                  name={`additionalUsers.${idx}.QAInspectionReport`}
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
                  name={`additionalUsers.${idx}.systemNotice`}
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
                  name={`additionalUsers.${idx}.systemNotice`}
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
                  name={`additionalUsers.${idx}.systemNotice`}
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

            <RemoveWrapper>
              <RemoveButton color="error" onClick={() => removeUser(idx)}>
                Remove
              </RemoveButton>
            </RemoveWrapper>
          </Box>
        ))}
        <Button type="button" variant="outlined" onClick={() => newUser({})}>
          Add More User
        </Button>
      </FormWrapper>
    </Box>
  );
};

const RemoveWrapper = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
});

const RemoveButton = styled(Button)({
  textDecoration: "underline",
  width: "80px",
});
