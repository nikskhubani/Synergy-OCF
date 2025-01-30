import { Box, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography } from "@mui/material"
import { Header } from "../components/header"
import { FormWrapper } from "../components/form-wrapper"
import { FormTitle, TextInput, TextInputLabel } from "../styles/global"
import { Controller, UseFormReturn } from "react-hook-form"
import { FormType } from "../schemas/schema"

type SecondFormProps = {
  form: UseFormReturn<FormType>
}

const emergencyContactForm = [0,1,2]

export const SecondForm = ({ form: {control, formState: {errors}}}: SecondFormProps) => {
  return (
    <Container maxWidth="md" sx={{py: 4}}>
      <Header />

      <FormWrapper>
        <Typography variant="h6" component="h6" gutterBottom>
          Emergency Contact List
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Please complete this form in full; The emergency contacts listed will be called in order listed
        </Typography>

        <Box sx={{width: '100%', border: '1.5px solid black'}}>
          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
              Site/Project Information
            </FormTitle>

            <FormControl error={!!errors.emergency?.companyName} sx={{borderBottom: '1.5px solid black', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <TextInputLabel htmlFor="companyName">
                Company Name:
              </TextInputLabel>
              
              <Controller
                name="emergency.companyName"
                control={control}
                render={({ field }) => <TextInput id='companyName' fullWidth size='small' {...field} />}
              />
              <FormHelperText>{errors.emergency?.companyName?.message}</FormHelperText>
            </FormControl>

            <FormControl error={!!errors.emergency?.siteName} sx={{borderBottom: '1.5px solid black', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <TextInputLabel htmlFor="siteProjectName">
                Site/Project Name:
              </TextInputLabel>
              
              <Controller
                name="emergency.siteName"
                control={control}
                render={({ field }) => <TextInput id='siteProjectName' fullWidth size='small' {...field} />}
              />
              <FormHelperText>{errors.emergency?.siteName?.message}</FormHelperText>
            </FormControl>

            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <FormControl error={!!errors.emergency?.streetNumber} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="streetNumber">
                  Street Number:
                </TextInputLabel>
                
                <Controller
                  name="emergency.streetNumber"
                  control={control}
                  render={({ field }) => <TextInput id='streetNumber' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.emergency?.streetNumber?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.emergency?.streetName} sx={{flexBasis: '50%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="streetName">
                  Street Name:
                </TextInputLabel>
                
                <Controller
                  name="emergency.streetName"
                  control={control}
                  render={({ field }) => <TextInput id='streetName' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.emergency?.streetName?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.emergency?.suiteNo} sx={{flexBasis: '25%'}}>
                <TextInputLabel htmlFor="suiteNo">
                  Suite No:
                </TextInputLabel>
                
                <Controller
                  name="emergency.suiteNo"
                  control={control}
                  render={({ field }) => <TextInput id='suiteNo' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.emergency?.suiteNo?.message}</FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <FormControl error={!!errors.emergency?.city} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="city">
                  City:
                </TextInputLabel>
                
                <Controller
                  name="emergency.city"
                  control={control}
                  render={({ field }) => <TextInput id='city' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.emergency?.city?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.emergency?.province} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="province">
                  Province:
                </TextInputLabel>
                
                <Controller
                  name="emergency.province"
                  control={control}
                  render={({ field }) => <TextInput id='province' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.emergency?.province?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.emergency?.postalCode} sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="postalCode">
                  Postal Code:
                </TextInputLabel>
                
                <Controller
                  name="emergency.postalCode"
                  control={control}
                  render={({ field }) => <TextInput id='postalCode' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.emergency?.postalCode?.message}</FormHelperText>
              </FormControl>
            </Box>
          </Box>

          {emergencyContactForm.map((conForm) => (
            <Box key={`emr-con-form-${conForm}`} sx={{width: '100%'}}>
              <FormTitle variant="body1" component="h6" gutterBottom>
                ({conForm + 1}) Emergency Contact
              </FormTitle>

              <FormControl error={!!errors.emergency?.contact?.[conForm]} sx={{borderBottom: '1.5px solid black', width: '100%'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <TextInputLabel htmlFor="name">
                    Name:
                  </TextInputLabel>
                  
                  <Controller
                    name={`emergency.contact.${conForm}.name`}
                    control={control}
                    render={({ field }) => <TextInput id='name' fullWidth size='small' {...field} />}
                  />
                </Box>
                {Array.isArray(errors.emergency?.contact) && <FormHelperText>{errors.emergency?.contact[conForm]?.name?.message}</FormHelperText>}
               </FormControl>

              <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
                <FormControl error={!!errors.emergency?.contact?.[conForm]?.primaryNumber} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                  <TextInputLabel htmlFor={`primaryNumber-${conForm}`}>
                    Primary Number:
                  </TextInputLabel>
                  
                  <Controller
                    name={`emergency.contact.${conForm}.primaryNumber`}
                    control={control}
                    render={({ field }) => <TextInput id={`primaryNumber-${conForm}`} fullWidth size='small' {...field} />}
                  />
                  {Array.isArray(errors.emergency?.contact) && <FormHelperText>{errors.emergency?.contact[conForm]?.primaryNumber?.message}</FormHelperText>}
                </FormControl>

                <FormControl error={!!errors.emergency?.contact?.[conForm]?.secondaryNumber} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                  <TextInputLabel htmlFor={`secondaryNumber-${conForm}`}>
                    Secondary Number:
                  </TextInputLabel>
                  
                  <Controller
                    name={`emergency.contact.${conForm}.secondaryNumber`}
                    control={control}
                    render={({ field }) => <TextInput id={`secondaryNumber-${conForm}`} fullWidth size='small' {...field} />}
                  />
                  {Array.isArray(errors.emergency?.contact) && <FormHelperText>{errors.emergency?.contact[conForm]?.secondaryNumber?.message}</FormHelperText>}
                </FormControl>

                <FormControl error={!!errors.emergency?.contact?.[conForm]?.emailAddress} sx={{flexBasis: '33.3%'}}>
                  <TextInputLabel htmlFor={`emailAddress-${conForm}`}>
                    Email Address:
                  </TextInputLabel>
                  
                  <Controller
                    name={`emergency.contact.${conForm}.emailAddress`}
                    control={control}
                    render={({ field }) => <TextInput id={`emailAddress-${conForm}`} fullWidth size='small' {...field} />}
                  />
                  {Array.isArray(errors.emergency?.contact) && <FormHelperText>{errors.emergency?.contact[conForm]?.emailAddress?.message}</FormHelperText>}
                </FormControl>
              </Box>

              <Box sx={{width: '100%'}}>
                <FormTitle variant="body1" component="h6" gutterBottom>
                  System Access & Report Distribution
                </FormTitle>
              </Box>

              <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
                <TextInputLabel htmlFor="name">
                This User is Authorized to (Check All that Apply) 
                </TextInputLabel>
              </Box>

              <FormControl sx={{borderBottom: '1.5px solid black', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', px: '14px'}}>
                  <Controller
                    name={`emergency.contact.${conForm}.authorizedToMakeChanges`}
                    control={control}
                    render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Authorized to make service request/changes" />}
                  />
                  <Controller
                    name={`emergency.contact.${conForm}.accessToLiveStream`}
                    control={control}
                    render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Access to Live Stream" />}
                  />
                  <Controller
                    name={`emergency.contact.${conForm}.overrideAlarmDispatch`}
                    control={control}
                    render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Override Alarm Dispatch Procedures" />}
                  />
                </FormGroup>
              </FormControl>

              <FormControl sx={{borderBottom: '1.5px solid black', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', px: '14px'}}>
                  <Controller
                    name={`emergency.contact.${conForm}.receiveAlarmNotification`}
                    control={control}
                    render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Receive Alarm Notification (False/Positive)" />}
                  />
                  <Controller
                    name={`emergency.contact.${conForm}.receiveIncidentReport`}
                    control={control}
                    render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Receive Incident Reports (SOR)" />}
                  />
                  <Controller
                    name={`emergency.contact.${conForm}.onlineAccessToReportingSystem`}
                    control={control}
                    render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Online Access to Reporting System" />}
                  />
                </FormGroup>
              </FormControl>
            </Box>
          ))}

          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
              Unreachable Information
            </FormTitle>

            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <TextInputLabel>
                When active event/alarm is identified and our operators can not reach any of the above listed contacts, please choose how 
                you would like proceed
              </TextInputLabel>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Box sx={{width: '100%', borderRight: '1.5px solid black'}}>
                <FormTitle variant="body1" component="h6" gutterBottom>
                  Option 1
                </FormTitle>

                <FormControl sx={{borderBottom: '1.5px solid black', display: 'flex', flexDirection: 'row', alignItems: 'center', px: '14px'}}>
                  <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Controller
                      name="emergency.unreachable.dispatchSynergyAlarmResponse"
                      control={control}
                      render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Receive Alarm Notification (False/Positive)" />}
                    />
                  </FormGroup>
                </FormControl>

                <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
                  <Typography variant="caption" component="p">
                    Billed per visit/ per price schedule
                  </Typography>
                </Box>
              </Box>
              <Box sx={{width: '100%', borderRight: '1.5px solid black'}}>
                <FormTitle variant="body1" component="h6" gutterBottom>
                  Option 2
                </FormTitle>

                <FormControl sx={{borderBottom: '1.5px solid black', display: 'flex', flexDirection: 'row', alignItems: 'center', px: '14px'}}>
                  <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Controller
                      name="emergency.unreachable.dispatchPolice"
                      control={control}
                      render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Dispatch Police" />}
                    />
                  </FormGroup>
                </FormControl>

                <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
                  <Typography variant="caption" component="p">
                    Additional Cost May Occur
                  </Typography>
                </Box>
              </Box>

              <Box sx={{width: '100%'}}>
                <FormTitle variant="body1" component="h6" gutterBottom>
                  Option 3
                </FormTitle>

                <FormControl sx={{borderBottom: '1.5px solid black', display: 'flex', flexDirection: 'row', alignItems: 'center', px: '14px'}}>
                  <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Controller
                      name="emergency.unreachable.dispatchAnotherServiceProvider"
                      control={control}
                      render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Dispatch Another Service Provider" />}
                    />
                  </FormGroup>
                </FormControl>

                <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
                  <Typography variant="caption" component="p">
                    Provide Authorization/Contact Details
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{px: '14px', borderBottom: '1.5px solid black'}}>
              <FormControl>
                <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <Controller
                    name="emergency.unreachable.dontDispatch"
                    control={control}
                    render={({ field }) => <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox {...field} />} label="Do Not Take Dispatch Action" />}
                  />
                </FormGroup>
              </FormControl>

              <Typography variant="body2" component="p">
                I understand that if I do not elect to dispatch Police, Synergy or another provider, we cannot assist with stopping any criminal activity. We may only report the event/alarm to the authorized contacts above.
              </Typography>
            </Box>
          </Box>


          <FormTitle sx={{m: 0, p: 0}} variant="body1" component="h6" gutterBottom></FormTitle>
        </Box>
      </FormWrapper>
    </Container>
  )
}