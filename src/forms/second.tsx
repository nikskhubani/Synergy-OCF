import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  styled,
  Typography,
} from "@mui/material";
import { FormWrapper } from "../components/form-wrapper";
import { FormTitle, TextInput, TextInputLabel } from "../styles/global";
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import { FormType } from "../schemas/schema";
import { useEffect } from "react";

type SecondFormProps = {
  form: UseFormReturn<FormType>;
};

export const SecondForm = ({
  form: {
    control,
    formState: { errors },
  },
}: SecondFormProps) => {
  const { fields: contactFields, append: newContact, remove: removeContact } = useFieldArray({
    control,
    name: "emergency.contact",
  });
  const { fields: userFields, append: newUser, remove: removeUser } = useFieldArray({
    control,
    name: "additionalUsers",
  });

  useEffect(() => {
    if (!contactFields.length && !userFields.length) {
      newContact({})
      newUser({})
    }
  }, [])

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <FormWrapper>
        <Typography variant="h6" component="h6" gutterBottom>
          Emergency Contact List
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Please complete this form in full; The emergency contacts listed will
          be called in order listed
        </Typography>

        <Box sx={{ width: "100%", border: "1.5px solid black" }}>
          <Box sx={{ width: "100%" }}>
            <FormTitle variant="body1" component="h6" gutterBottom>
              Site/Project Information
            </FormTitle>

            <FormControl
              error={!!errors.emergency?.companyName}
              sx={{
                borderBottom: "1.5px solid black",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextInputLabel htmlFor="companyName">
                Company Name:
              </TextInputLabel>

              <Controller
                name="emergency.companyName"
                control={control}
                render={({ field }) => (
                  <TextInput
                    id="companyName"
                    fullWidth
                    size="small"
                    {...field}
                  />
                )}
              />
              <FormHelperText>
                {errors.emergency?.companyName?.message}
              </FormHelperText>
            </FormControl>

            <FormControl
              error={!!errors.emergency?.siteName}
              sx={{
                borderBottom: "1.5px solid black",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextInputLabel htmlFor="siteProjectName">
                Site/Project Name:
              </TextInputLabel>

              <Controller
                name="emergency.siteName"
                control={control}
                render={({ field }) => (
                  <TextInput
                    id="siteProjectName"
                    fullWidth
                    size="small"
                    {...field}
                  />
                )}
              />
              <FormHelperText>
                {errors.emergency?.siteName?.message}
              </FormHelperText>
            </FormControl>

            <Box sx={{ display: "flex", borderBottom: "1.5px solid black" }}>
              <FormControl
                error={!!errors.emergency?.streetNumber}
                sx={{ flexBasis: "25%", borderRight: "1.5px solid black" }}
              >
                <TextInputLabel htmlFor="streetNumber">
                  Street Number:
                </TextInputLabel>

                <Controller
                  name="emergency.streetNumber"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      id="streetNumber"
                      fullWidth
                      size="small"
                      {...field}
                    />
                  )}
                />
                <FormHelperText>
                  {errors.emergency?.streetNumber?.message}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={!!errors.emergency?.streetName}
                sx={{ flexBasis: "50%", borderRight: "1.5px solid black" }}
              >
                <TextInputLabel htmlFor="streetName">
                  Street Name:
                </TextInputLabel>

                <Controller
                  name="emergency.streetName"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      id="streetName"
                      fullWidth
                      size="small"
                      {...field}
                    />
                  )}
                />
                <FormHelperText>
                  {errors.emergency?.streetName?.message}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={!!errors.emergency?.suiteNo}
                sx={{ flexBasis: "25%" }}
              >
                <TextInputLabel htmlFor="suiteNo">Suite No:</TextInputLabel>

                <Controller
                  name="emergency.suiteNo"
                  control={control}
                  render={({ field }) => (
                    <TextInput id="suiteNo" fullWidth size="small" {...field} />
                  )}
                />
                <FormHelperText>
                  {errors.emergency?.suiteNo?.message}
                </FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", borderBottom: "1.5px solid black" }}>
              <FormControl
                error={!!errors.emergency?.city}
                sx={{ flexBasis: "33.3%", borderRight: "1.5px solid black" }}
              >
                <TextInputLabel htmlFor="city">City:</TextInputLabel>

                <Controller
                  name="emergency.city"
                  control={control}
                  render={({ field }) => (
                    <TextInput id="city" fullWidth size="small" {...field} />
                  )}
                />
                <FormHelperText>
                  {errors.emergency?.city?.message}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={!!errors.emergency?.province}
                sx={{ flexBasis: "33.3%", borderRight: "1.5px solid black" }}
              >
                <TextInputLabel htmlFor="province">Province:</TextInputLabel>

                <Controller
                  name="emergency.province"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      id="province"
                      fullWidth
                      size="small"
                      {...field}
                    />
                  )}
                />
                <FormHelperText>
                  {errors.emergency?.province?.message}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={!!errors.emergency?.postalCode}
                sx={{ flexBasis: "33.3%" }}
              >
                <TextInputLabel htmlFor="postalCode">
                  Postal Code:
                </TextInputLabel>

                <Controller
                  name="emergency.postalCode"
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      id="postalCode"
                      fullWidth
                      size="small"
                      {...field}
                    />
                  )}
                />
                <FormHelperText>
                  {errors.emergency?.postalCode?.message}
                </FormHelperText>
              </FormControl>
            </Box>
          </Box>

          {contactFields.map((field, idx) => (
            <Box key={field.id} sx={{ width: "100%", position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <FormTitle variant="body1" component="h6" gutterBottom>
                ({idx + 1}) Emergency Contact
              </FormTitle>

              <FormControl
                error={!!errors.emergency?.contact?.[idx]?.name}
                sx={{ borderBottom: "1.5px solid black", width: "100%" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TextInputLabel htmlFor="name">Name:</TextInputLabel>

                  <Controller
                    name={`emergency.contact.${idx}.name`}
                    control={control}
                    render={({ field }) => (
                      <TextInput id="name" fullWidth size="small" {...field} />
                    )}
                  />
                </Box>
                {Array.isArray(errors.emergency?.contact) && (
                  <FormHelperText>
                    {errors.emergency?.contact[idx]?.name?.message}
                  </FormHelperText>
                )}
              </FormControl>

              <Box sx={{ display: "flex", borderBottom: "1.5px solid black" }}>
                <FormControl
                  error={!!errors.emergency?.contact?.[idx]?.primaryNumber}
                  sx={{ flexBasis: "33.3%", borderRight: "1.5px solid black" }}
                >
                  <TextInputLabel htmlFor={`primaryNumber-${idx}`}>
                    Primary Number:
                  </TextInputLabel>

                  <Controller
                    name={`emergency.contact.${idx}.primaryNumber`}
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        id={`primaryNumber-${idx}`}
                        fullWidth
                        size="small"
                        {...field}
                      />
                    )}
                  />
                  {Array.isArray(errors.emergency?.contact) && (
                    <FormHelperText>
                      {errors.emergency?.contact[idx]?.primaryNumber?.message}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  error={!!errors.emergency?.contact?.[idx]?.secondaryNumber}
                  sx={{ flexBasis: "33.3%", borderRight: "1.5px solid black" }}
                >
                  <TextInputLabel htmlFor={`secondaryNumber-${idx}`}>
                    Secondary Number:
                  </TextInputLabel>

                  <Controller
                    name={`emergency.contact.${idx}.secondaryNumber`}
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        id={`secondaryNumber-${idx}`}
                        fullWidth
                        size="small"
                        {...field}
                      />
                    )}
                  />
                  {Array.isArray(errors.emergency?.contact) && (
                    <FormHelperText>
                      {errors.emergency?.contact[idx]?.secondaryNumber?.message}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  error={!!errors.emergency?.contact?.[idx]?.emailAddress}
                  sx={{ flexBasis: "33.3%" }}
                >
                  <TextInputLabel htmlFor={`emailAddress-${idx}`}>
                    Email Address:
                  </TextInputLabel>

                  <Controller
                    name={`emergency.contact.${idx}.emailAddress`}
                    control={control}
                    render={({ field }) => (
                      <TextInput
                        id={`emailAddress-${idx}`}
                        fullWidth
                        size="small"
                        {...field}
                      />
                    )}
                  />
                  {Array.isArray(errors.emergency?.contact) && (
                    <FormHelperText>
                      {errors.emergency?.contact[idx]?.emailAddress?.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>

              <Box sx={{ width: "100%" }}>
                <FormTitle variant="body1" component="h6" gutterBottom>
                  System Access & Report Distribution
                </FormTitle>
              </Box>

              <Box
                sx={{
                  borderBottom: "1.5px solid black",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextInputLabel htmlFor="name">
                  This User is Authorized to (Check All that Apply)
                </TextInputLabel>
              </Box>

              <FormControl
                sx={{
                  borderBottom: "1.5px solid black",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    px: "14px",
                  }}
                >
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
                </FormGroup>
              </FormControl>

              <FormControl
                sx={{
                  borderBottom: "1.5px solid black",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    px: "14px",
                  }}
                >
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
                </FormGroup>
              </FormControl>

              <RemoveWrapper>
                <RemoveButton color="error" onClick={() => removeContact(idx)}>Remove</RemoveButton>
              </RemoveWrapper>
            </Box>
          ))}
          <Button type="button" variant="outlined" onClick={() => newContact({})}>
            Add More Contact
          </Button>

          <Box sx={{ width: "100%", borderTop: '1.5px solid black' }}>
            <FormTitle variant="body1" component="h6" gutterBottom>
              Unreachable Information
            </FormTitle>

            <Box
              sx={{
                borderBottom: "1.5px solid black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextInputLabel>
                When active event/alarm is identified and our operators can not
                reach any of the above listed contacts, please choose how you
                would like proceed
              </TextInputLabel>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "100%", borderRight: "1.5px solid black" }}>
                <FormTitle variant="body1" component="h6" gutterBottom>
                  Option 1
                </FormTitle>

                <FormControl
                  sx={{
                    borderBottom: "1.5px solid black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    px: "14px",
                  }}
                >
                  <FormGroup
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Controller
                      name="emergency.unreachable.dispatch_synergy_alarm_response"
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "14px",
                            },
                          }}
                          control={
                            <Checkbox checked={field.value} {...field} />
                          }
                          label="Receive Alarm Notification (False/Positive)"
                        />
                      )}
                    />
                  </FormGroup>
                </FormControl>

                <Box
                  sx={{
                    borderBottom: "1.5px solid black",
                    display: "flex",
                    alignItems: "center",
                    px: "14px",
                  }}
                >
                  <Typography variant="caption" component="p">
                    Billed per visit/ per price schedule
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: "100%", borderRight: "1.5px solid black" }}>
                <FormTitle variant="body1" component="h6" gutterBottom>
                  Option 2
                </FormTitle>

                <FormControl
                  sx={{
                    borderBottom: "1.5px solid black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    px: "14px",
                  }}
                >
                  <FormGroup
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Controller
                      name="emergency.unreachable.dispatch_police"
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "14px",
                            },
                          }}
                          control={
                            <Checkbox checked={field.value} {...field} />
                          }
                          label="Dispatch Police"
                        />
                      )}
                    />
                  </FormGroup>
                </FormControl>

                <Box
                  sx={{
                    borderBottom: "1.5px solid black",
                    display: "flex",
                    alignItems: "center",
                    px: "14px",
                  }}
                >
                  <Typography variant="caption" component="p">
                    Additional Cost May Occur
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ width: "100%" }}>
                <FormTitle variant="body1" component="h6" gutterBottom>
                  Option 3
                </FormTitle>

                <FormControl
                  sx={{
                    borderBottom: "1.5px solid black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    px: "14px",
                  }}
                >
                  <FormGroup
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Controller
                      name="emergency.unreachable.dispatch_another_service_provider"
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "14px",
                            },
                          }}
                          control={
                            <Checkbox checked={field.value} {...field} />
                          }
                          label="Dispatch Another Service Provider"
                        />
                      )}
                    />
                  </FormGroup>
                </FormControl>

                <Box
                  sx={{
                    borderBottom: "1.5px solid black",
                    display: "flex",
                    alignItems: "center",
                    px: "14px",
                  }}
                >
                  <Typography variant="caption" component="p">
                    Provide Authorization/Contact Details
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ px: "14px", borderBottom: "1.5px solid black" }}>
              <FormControl>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Controller
                    name="emergency.unreachable.do_not_take_dispatch_action"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        sx={{
                          "& .MuiFormControlLabel-label": { fontSize: "14px" },
                        }}
                        control={<Checkbox checked={field.value} {...field} />}
                        label="Do Not Take Dispatch Action"
                      />
                    )}
                  />
                </FormGroup>
              </FormControl>

              <Typography variant="body2" component="p">
                I understand that if I do not elect to dispatch Police, Synergy
                or another provider, we cannot assist with stopping any criminal
                activity. We may only report the event/alarm to the authorized
                contacts above.
              </Typography>
            </Box>
          </Box>

          <Box>
            <FormTitle variant="body1" component="h6" gutterBottom>
              Additional Electronic Report Delivery
            </FormTitle>
            <Typography sx={{textAlign: 'center'}} variant="body2" component="p" gutterBottom>
              Please complete this form in full; The emergency contacts listed will
              be called in order listed
            </Typography>
            {userFields.map((field, idx) => (
              <Box key={field.id} sx={{ width: "100%", position: 'relative', borderTop: '1.5px solid black', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: "flex", borderBottom: "1.5px solid black" }}>
                  <FormControl
                    error={!!errors.additionalUsers?.[idx]?.name}
                    sx={{ flexBasis: "50%", borderRight: "1.5px solid black" }}
                  >
                    <TextInputLabel htmlFor={`additionalUsers-name-${idx}`}>
                      Name:
                    </TextInputLabel>

                    <Controller
                      name={`additionalUsers.${idx}.name`}
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id={`additionalUsers-name-${idx}`}
                          fullWidth
                          size="small"
                          {...field}
                        />
                      )}
                    />
                    {Array.isArray(errors.additionalUsers) && (
                      <FormHelperText>
                        {errors.additionalUsers?.[idx]?.primaryNumber?.message}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl
                    error={!!errors.additionalUsers?.[idx]?.emailAddress}
                    sx={{ flexBasis: "50%" }}
                  >
                    <TextInputLabel htmlFor={`additionalUsers-email-${idx}`}>
                      Email Address:
                    </TextInputLabel>

                    <Controller
                      name={`additionalUsers.${idx}.emailAddress`}
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id={`additionalUsers-email-${idx}`}
                          fullWidth
                          size="small"
                          {...field}
                        />
                      )}
                    />
                    {Array.isArray(errors.additionalUsers) && (
                      <FormHelperText>
                        {errors.additionalUsers?.[idx]?.emailAddress?.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>

                <Box sx={{ display: "flex", borderBottom: "1.5px solid black" }}>
                  <FormControl
                    error={!!errors.additionalUsers?.[idx]?.name}
                    sx={{ flexBasis: "50%", borderRight: "1.5px solid black" }}
                  >
                    <TextInputLabel htmlFor={`additionalUsers-position-${idx}`}>
                      Position:
                    </TextInputLabel>

                    <Controller
                      name={`additionalUsers.${idx}.position`}
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id={`additionalUsers-position-${idx}`}
                          fullWidth
                          size="small"
                          {...field}
                        />
                      )}
                    />
                    {Array.isArray(errors.additionalUsers) && (
                      <FormHelperText>
                        {errors.additionalUsers?.[idx]?.position?.message}
                      </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl
                    error={!!errors.additionalUsers?.[idx]?.telephone}
                    sx={{ flexBasis: "50%" }}
                  >
                    <TextInputLabel htmlFor={`additionalUsers-telephone-${idx}`}>
                      Telephone:
                    </TextInputLabel>

                    <Controller
                      name={`additionalUsers.${idx}.telephone`}
                      control={control}
                      render={({ field }) => (
                        <TextInput
                          id={`additionalUsers-telephone-${idx}`}
                          fullWidth
                          size="small"
                          {...field}
                        />
                      )}
                    />
                    {Array.isArray(errors.additionalUsers) && (
                      <FormHelperText>
                        {errors.additionalUsers?.[idx]?.telephone?.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Box>

                <FormControl
                  sx={{
                    borderBottom: "1.5px solid black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FormGroup
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      px: "14px",
                    }}
                  >
                    <Controller
                      name={`additionalUsers.${idx}.securityReport`}
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": { fontSize: "14px" },
                          }}
                          control={<Checkbox checked={field.value} {...field} />}
                          label="Security Reports (DSOR)"
                        />
                      )}
                    />
                    <Controller
                      name={`additionalUsers.${idx}.specialOccurrences`}
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": { fontSize: "14px" },
                          }}
                          control={<Checkbox checked={field.value} {...field} />}
                          label="Special Occurrences (SOR)"
                        />
                      )}
                    />
                    <Controller
                      name={`additionalUsers.${idx}.QAInspectionReport`}
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": { fontSize: "14px" },
                          }}
                          control={<Checkbox checked={field.value} {...field} />}
                          label="Q&A Inspection Reports"
                        />
                      )}
                    />
                    <Controller
                      name={`additionalUsers.${idx}.systemNotice`}
                      control={control}
                      render={({ field }) => (
                        <FormControlLabel
                          sx={{
                            "& .MuiFormControlLabel-label": { fontSize: "14px" },
                          }}
                          control={<Checkbox checked={field.value} {...field} />}
                          label="System Notice"
                        />
                      )}
                    />
                  </FormGroup>
                </FormControl>

                <RemoveWrapper>
                  <RemoveButton color="error" onClick={() => removeUser(idx)}>Remove</RemoveButton>
                </RemoveWrapper>
              </Box>
            ))}
            <Button type="button" variant="outlined" onClick={() => newUser({})}>
              Add More User
            </Button>
          </Box>

          <FormTitle
            sx={{ m: 0, p: 0 }}
            variant="body1"
            component="h6"
            gutterBottom
          ></FormTitle>
        </Box>
      </FormWrapper>
    </Container>
  );
};

const RemoveWrapper = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
})

const RemoveButton = styled(Button)({
  textDecoration: 'underline',
  width: '80px'
})
