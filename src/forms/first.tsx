import { Controller, UseFormReturn } from "react-hook-form"
import { Box, Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import { FormTitle, TextInput, TextInputLabel } from '../styles/global';
import { Header } from '../components/header';
import { FormWrapper } from '../components/form-wrapper';
import { FormType } from "../schemas/schema";

type FirstFormProps = {
  form: UseFormReturn<FormType>
}

export const FirstForm = ({ form: {control, formState: {errors}}}: FirstFormProps) => {
  return (
    <Container maxWidth="md" sx={{py: 4}}>
      <Header />

      <FormWrapper>
        <Typography variant="h6" component="h6" gutterBottom>
          New Account Setup
        </Typography>

        <Box sx={{width: '100%', border: '1.5px solid black'}}>
          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
              Company Information
            </FormTitle>

            <FormControl error={!!errors.companyName} sx={{borderBottom: '1.5px solid black', width: '100%'}}>
              <TextInputLabel htmlFor="companyName">
                Company Name:
              </TextInputLabel>
              <Controller
                name="companyName"
                control={control}
                render={({ field }) => <TextInput id='companyName' fullWidth size='small' {...field} />}
              />
              <FormHelperText>{errors.companyName?.message}</FormHelperText>
            </FormControl>

            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <FormControl error={!!errors.streetNumber} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="streetNumber">
                  Street Number:
                </TextInputLabel>
                <Controller
                  name="streetNumber"
                  control={control}
                  render={({ field }) => <TextInput  id='streetNumber">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.streetNumber?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.streetName} sx={{flexBasis: '50%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="streetName">
                  Street Name:
                </TextInputLabel>
                <Controller
                  name="streetName"
                  control={control}
                  render={({ field }) => <TextInput  id='streetName">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.streetName?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.suiteNo} sx={{flexBasis: '25%'}}>
                <TextInputLabel htmlFor="suiteNo">
                  Suite No:
                </TextInputLabel>
                <Controller
                  name="suiteNo"
                  control={control}
                  render={({ field }) => <TextInput  id='suiteNo">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.suiteNo?.message}</FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <FormControl error={!!errors.city} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="city">
                  City:
                </TextInputLabel>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => <TextInput  id='city">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.city?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.province} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="province">
                  Province:
                </TextInputLabel>
                <Controller
                  name="province"
                  control={control}
                  render={({ field }) => <TextInput  id='province">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.province?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.postalCode} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="postalCode">
                  Postal Code:
                </TextInputLabel>
                <Controller
                  name="postalCode"
                  control={control}
                  render={({ field }) => <TextInput  id='postalCode">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.postalCode?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.website} sx={{flexBasis: '25%'}}>
                <TextInputLabel htmlFor="website">
                  Website:
                </TextInputLabel>
                <Controller
                  name="website"
                  control={control}
                  render={({ field }) => <TextInput  id='website">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.website?.message}</FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <FormControl error={!!errors.mainNumber} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="mainNumber">
                  Main Number:
                </TextInputLabel>
                <Controller
                  name="mainNumber"
                  control={control}
                  render={({ field }) => <TextInput  id='mainNumber">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.mainNumber?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.faxPhone} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="faxPhone">
                  Fax Phone:
                </TextInputLabel>
                <Controller
                  name="faxPhone"
                  control={control}
                  render={({ field }) => <TextInput  id='faxPhone">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.faxPhone?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.emailAddress} sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="emailAddress">
                  Email Address:
                </TextInputLabel>
                <Controller
                  name="emailAddress"
                  control={control}
                  render={({ field }) => <TextInput  id='emailAddress">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.emailAddress?.message}</FormHelperText>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
            Authorized Contact Information
            </FormTitle>

            <FormControl error={!!errors.authorized?.name} sx={{borderBottom: '1.5px solid black', width: '100%'}}>
              <TextInputLabel htmlFor="authorizedName">
                Name:
              </TextInputLabel>
              <Controller
                name="authorized.name"
                control={control}
                render={({ field }) => <TextInput  id='authorizedName">' fullWidth size='small' {...field} />}
              />
              <FormHelperText>{errors.authorized?.name?.message}</FormHelperText>
            </FormControl>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <FormControl error={!!errors.authorized?.position} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="authorizedposition">
                  Position:
                </TextInputLabel>
                <Controller
                  name="authorized.position"
                  control={control}
                  render={({ field }) => <TextInput  id='authorizedposition">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.authorized?.position?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.authorized?.mobileNumber} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="authorizedmobileNumber">
                  Mobile Number:
                </TextInputLabel>
                <Controller
                  name="authorized.mobileNumber"
                  control={control}
                  render={({ field }) => <TextInput  id='authorizedmobileNumber">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.authorized?.mobileNumber?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.authorized?.officeNumber} sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="authorizedofficeNumber">
                  Office Number:
                </TextInputLabel>
                <Controller
                  name="authorized.officeNumber"
                  control={control}
                  render={({ field }) => <TextInput  id='authorizedofficeNumber">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.authorized?.officeNumber?.message}</FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <FormControl error={!!errors.authorized?.faxNumber} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="authorizedfaxNumber">
                  Fax Number:
                </TextInputLabel>
                <Controller
                  name="authorized.faxNumber"
                  control={control}
                  render={({ field }) => <TextInput  id='authorizedfaxNumber">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.authorized?.faxNumber?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.authorized?.emailAddress} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="authorizedemailAddress">
                  Email Address:
                </TextInputLabel>
                <Controller
                  name="authorized.emailAddress"
                  control={control}
                  render={({ field }) => <TextInput  id='authorizedemailAddress">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.authorized?.emailAddress?.message}</FormHelperText>
              </FormControl>
              <Box sx={{flexBasis: '33.3%'}}>
                
              </Box>
            </Box>
          </Box>

          <Box sx={{width: '100%'}}>
            <FormTitle variant="body1" component="h6" gutterBottom>
            Account Payable Information 
            </FormTitle>

            <FormControl error={!!errors.account?.name} sx={{borderBottom: '1.5px solid black', width: '100%'}}>
              <TextInputLabel htmlFor="accountName">
                Name:
              </TextInputLabel>
              <Controller
                name="account.name"
                control={control}
                render={({ field }) => <TextInput  id='accountName">' fullWidth size='small' {...field} />}
              />
              <FormHelperText>{errors.account?.name?.message}</FormHelperText>
            </FormControl>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <FormControl error={!!errors.account?.faxNumber} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="accountfaxNumber">
                  Fax Number:
                </TextInputLabel>
                <Controller
                  name="account.faxNumber"
                  control={control}
                  render={({ field }) => <TextInput  id='accountfaxNumber">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.account?.faxNumber?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.account?.directNumber} sx={{flexBasis: '33.3%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="accountdirectNumber">
                  Direct Number:
                </TextInputLabel>
                <Controller
                  name="account.directNumber"
                  control={control}
                  render={({ field }) => <TextInput  id='accountdirectNumber">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.account?.directNumber?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.account?.emailAddress} sx={{flexBasis: '33.3%'}}>
                <TextInputLabel htmlFor="accountemailAddress">
                  Email Address:
                </TextInputLabel>
                <Controller
                  name="account.emailAddress"
                  control={control}
                  render={({ field }) => <TextInput  id='accountemailAddress">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.account?.emailAddress?.message}</FormHelperText>
              </FormControl>
            </Box>
            <Box sx={{display: 'flex', borderBottom: '1.5px solid black'}}>
              <FormControl error={!!errors.account?.invoiceDelivery} sx={{flexBasis: '50%', borderRight: '1.5px solid black', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <TextInputLabel>
                  Invoice Delivery:
                </TextInputLabel>
                <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <Controller
                    name="account.invoiceDelivery.email"
                    control={control}
                    render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Email" />}
                  />
                  <Controller
                    name="account.invoiceDelivery.fax"
                    control={control}
                    render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Fax" />}
                  />
                  <Controller
                    name="account.invoiceDelivery.mail"
                    control={control}
                    render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Mail" />}
                  />
                </FormGroup>
              </FormControl>
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
              <FormControl error={!!errors.account?.emailAddressFax} sx={{flexBasis: '50%', borderRight: '1.5px solid black'}}>
                <TextInputLabel htmlFor="accountemailAddressFax">
                  Email Address/ Fax No:
                </TextInputLabel>
                <Controller
                  name="account.emailAddressFax"
                  control={control}
                  render={({ field }) => <TextInput  id='accountemailAddressFax">' fullWidth size='small' {...field} />}
                />
                <FormHelperText>{errors.account?.emailAddressFax?.message}</FormHelperText>
              </FormControl>
              <FormControl error={!!errors.account?.paymentMethod} sx={{flexBasis: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <TextInputLabel>
                  Payment Method:
                </TextInputLabel>
                <FormGroup sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Controller
                    name="account.paymentMethod.eft"
                    control={control}
                    render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="EFT" />}
                  />
                  <Controller
                    name="account.paymentMethod.cheque"
                    control={control}
                    render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Cheque" />}
                  />
                  <Controller
                    name="account.paymentMethod.card"
                    control={control}
                    render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Visa/Mastercard" />}
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </Box>

          <FormTitle sx={{m: 0, p: 0}} variant="body1" component="h6" gutterBottom></FormTitle>
        </Box>
      </FormWrapper>
    </Container>
  )
}
