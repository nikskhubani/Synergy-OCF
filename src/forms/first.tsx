import { Box, Checkbox, Container, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { FormTitle, TextInput, TextInputLabel } from '../styles/global';
import { Header } from '../components/header';

export const FirstForm = () => {
  return (
    <Container maxWidth="md" sx={{py: 4}}>
      <Header />

      <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h6" component="h6" gutterBottom>
          New Account Setup
        </Typography>

        <Box sx={{width: '100%', border: '1.5px solid black'}}>
          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
            Company Information
            </FormTitle>

            <Box sx={{borderBottom: '1.5px solid black'}}>
              <TextInputLabel htmlFor="companyName">
                Company Name:
              </TextInputLabel>
              <TextInput id='companyName' fullWidth size='small' />
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
              <Box sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="city">
                  City:
                </TextInputLabel>
                <TextInput id='city">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="province">
                  Province:
                </TextInputLabel>
                <TextInput id='province">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="postalCode">
                  Postal Code:
                </TextInputLabel>
                <TextInput id='postalCode">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '25%'}}>
                <TextInputLabel htmlFor="website">
                  Website:
                </TextInputLabel>
                <TextInput id='website">' fullWidth size='small' />
              </Box>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="ma">
                  Main Number:
                </TextInputLabel>
                <TextInput id='ma">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="faxPhone">
                  Fax Phone:
                </TextInputLabel>
                <TextInput id='faxPhone">' fullWidth size='small' />
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
            Authorized Contact Information
            </FormTitle>

            <Box sx={{borderBottom: '1.5px solid black'}}>
              <TextInputLabel htmlFor="name">
                Name:
              </TextInputLabel>
              <TextInput id='name' fullWidth size='small' />
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="position">
                  Position:
                </TextInputLabel>
                <TextInput id='position">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="mobileNumber">
                  Mobile Number:
                </TextInputLabel>
                <TextInput id='mobileNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="officeNumber">
                  Office Number:
                </TextInputLabel>
                <TextInput id='officeNumber">' fullWidth size='small' />
              </Box>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="faxNumber">
                  Fax Number:
                </TextInputLabel>
                <TextInput id='faxNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="emailAddress">
                  Email Address:
                </TextInputLabel>
                <TextInput id='emailAddress">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%'}}>
                
              </Box>
            </Box>
          </Box>

          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
            Account Payable Information 
            </FormTitle>

            <Box sx={{borderBottom: '1.5px solid black'}}>
              <TextInputLabel htmlFor="name">
                Name:
              </TextInputLabel>
              <TextInput id='name' fullWidth size='small' />
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="faxNumber">
                  Fax Number:
                </TextInputLabel>
                <TextInput id='faxNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="directNumber">
                  Direct Number:
                </TextInputLabel>
                <TextInput id='directNumber">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="emailAddress">
                  Email Address:
                </TextInputLabel>
                <TextInput id='emailAddress">' fullWidth size='small' />
              </Box>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '50%', borderRight: '1.5px solid black', display: 'flex', alignItems: 'center'}}>
                <TextInputLabel>
                  Invoice Delivery:
                </TextInputLabel>
                <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <FormControlLabel control={<Checkbox />} label="Email" />
                  <FormControlLabel control={<Checkbox />} label="Fax" />
                  <FormControlLabel control={<Checkbox />} label="Mail" />
                </FormGroup>
              </Box>
              <Box sx={{flexBasis: '20%', borderRight: '1.5px solid black'}}>
                <TextInputLabel>
                  Attention:
                </TextInputLabel>
                {/* <TextInput id='emailAddress">' fullWidth size='small' /> */}
              </Box>
              <Box sx={{flexBasis: '30%'}}>
                
              </Box>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <Box sx={{flexBasis: '50%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="emailAddress">
                  Email Address/ Fax No:
                </TextInputLabel>
                <TextInput id='emailAddress">' fullWidth size='small' />
              </Box>
              <Box sx={{flexBasis: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <TextInputLabel>
                  Payment Method:
                </TextInputLabel>
                <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <FormControlLabel control={<Checkbox />} label="EFT" />
                  <FormControlLabel control={<Checkbox />} label="Cheque" />
                  <FormControlLabel control={<Checkbox />} label="Visa/Mastercard" />
                </FormGroup>
              </Box>
            </Box>
          </Box>

          <FormTitle sx={{m: 0, p: 0}} variant="body1" component="h6" gutterBottom></FormTitle>
        </Box>
      </Box>
    </Container>
  )
}
