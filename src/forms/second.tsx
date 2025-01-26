import { Box, Checkbox, Container, FormControlLabel, FormGroup, Typography } from "@mui/material"
import { Header } from "../components/header"
import { FormWrapper } from "../components/form-wrapper"
import { FormTitle, TextInput, TextInputLabel } from "../styles/global"

export const SecondForm = () => {
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

            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <TextInputLabel htmlFor="companyName">
                Company Name:
              </TextInputLabel>
              <TextInput id='companyName' fullWidth size='small' />
            </Box>
            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <TextInputLabel htmlFor="siteProjectName">
                Site/Project Name:
              </TextInputLabel>
              <TextInput id='siteProjectName' fullWidth size='small' />
            </Box>

            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="streetNumber">
                  Street Number:
                </TextInputLabel>
                <TextInput id='streetNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '50%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="streetName">
                  Street Name:
                </TextInputLabel>
                <TextInput id='streetName">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '25%'}}>
                <TextInputLabel htmlFor="suiteNo">
                  Suite No:
                </TextInputLabel>
                <TextInput id='suiteNo">' fullWidth size='small' />
              </Box>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="city">
                  City:
                </TextInputLabel>
                <TextInput id='city">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="province">
                  Province:
                </TextInputLabel>
                <TextInput id='province">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="postalCode">
                  Postal Code:
                </TextInputLabel>
                <TextInput id='postalCode">' fullWidth size='small' />
              </Box>
            </Box>
          </Box>

          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
              (1) Emergency Contact
            </FormTitle>

            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <TextInputLabel htmlFor="name">
                Name:
              </TextInputLabel>
              <TextInput id='name' fullWidth size='small' />
            </Box>

            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="primaryNumber">
                  Primary Number:
                </TextInputLabel>
                <TextInput id='primaryNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="secondaryNumber">
                  Secondary Number:
                </TextInputLabel>
                <TextInput id='secondaryNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="emailAddress">
                  Email Address:
                </TextInputLabel>
                <TextInput id='emailAddress">' fullWidth size='small' />
              </Box>
            </Box>

            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <TextInputLabel htmlFor="name">
              This User is Authorized to (Check All that Apply) 
              </TextInputLabel>
            </Box>
            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
              <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Authorized to make service request/changes" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Access to Live Stream" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Override Alarm Dispatch Procedures" />
              </FormGroup>
            </Box>
            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', px: '14px'}}>
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Receive Alarm Notification (False/Positive)" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Receive Incident Reports (SOR)" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Online Access to Reporting System" />
              </FormGroup>
            </Box>
          </Box>

          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
              (2) Emergency Contact
            </FormTitle>

            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <TextInputLabel htmlFor="name">
                Name:
              </TextInputLabel>
              <TextInput id='name' fullWidth size='small' />
            </Box>

            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="primaryNumber">
                  Primary Number:
                </TextInputLabel>
                <TextInput id='primaryNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="secondaryNumber">
                  Secondary Number:
                </TextInputLabel>
                <TextInput id='secondaryNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="emailAddress">
                  Email Address:
                </TextInputLabel>
                <TextInput id='emailAddress">' fullWidth size='small' />
              </Box>
            </Box>
          </Box>

          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
              System Access & Report Distribution
            </FormTitle>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="primaryNumber">
                  Primary Number:
                </TextInputLabel>
                <TextInput id='primaryNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="secondaryNumber">
                  Secondary Number:
                </TextInputLabel>
                <TextInput id='secondaryNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="emailAddress">
                  Email Address:
                </TextInputLabel>
                <TextInput id='emailAddress">' fullWidth size='small' />
              </Box>
            </Box>

            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <TextInputLabel htmlFor="name">
              This User is Authorized to (Check All that Apply) 
              </TextInputLabel>
            </Box>
            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
              <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Authorized to make service request/changes" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Access to Live Stream" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Override Alarm Dispatch Procedures" />
              </FormGroup>
            </Box>
            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', px: '14px'}}>
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Receive Alarm Notification (False/Positive)" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Receive Incident Reports (SOR)" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Online Access to Reporting System" />
              </FormGroup>
            </Box>
          </Box>

          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
              (3) Emergency Contact
            </FormTitle>

            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <TextInputLabel htmlFor="name">
                Name:
              </TextInputLabel>
              <TextInput id='name' fullWidth size='small' />
            </Box>

            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="primaryNumber">
                  Primary Number:
                </TextInputLabel>
                <TextInput id='primaryNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="secondaryNumber">
                  Secondary Number:
                </TextInputLabel>
                <TextInput id='secondaryNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="emailAddress">
                  Email Address:
                </TextInputLabel>
                <TextInput id='emailAddress">' fullWidth size='small' />
              </Box>
            </Box>

            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <TextInputLabel htmlFor="name">
              This User is Authorized to (Check All that Apply) 
              </TextInputLabel>
            </Box>
            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
              <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Authorized to make service request/changes" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Access to Live Stream" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Override Alarm Dispatch Procedures" />
              </FormGroup>
            </Box>
            <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
              <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', px: '14px'}}>
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Receive Alarm Notification (False/Positive)" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Receive Incident Reports (SOR)" />
                <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Online Access to Reporting System" />
              </FormGroup>
            </Box>
          </Box>

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

                <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
                  <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Receive Alarm Notification (False/Positive)" />
                </Box>

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

                <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
                  <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Receive Alarm Notification (False/Positive)" />
                </Box>

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

                <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
                  <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label="Receive Alarm Notification (False/Positive)" />
                </Box>

                <Box sx={{borderBottom: '1.5px solid black', display: 'flex', alignItems: 'center', px: '14px'}}>
                  <Typography variant="caption" component="p">
                    Provide Authorization/Contact Details
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{px: '14px', borderBottom: '1.5px solid black'}}>
              <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox />} label=" Do Not Take Dispatch Action" />

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