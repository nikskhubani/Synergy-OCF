import { Box, Checkbox, Container, FormControl, FormControlLabel, Typography } from "@mui/material"
import { FormWrapper } from "../components/form-wrapper"
import { TextInput, TextInputLabel } from "../styles/global"
import { Controller, UseFormReturn } from "react-hook-form"
import { FormType } from "../schemas/schema"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fr-ca';
import SignaturePad from "../components/signature"

type ThirdFormProps = {
  form: UseFormReturn<FormType>
}

export const ThirdForm = ({ form: { control } }: ThirdFormProps) => {
  return (
    <Container maxWidth="md" sx={{py: 4}}>

      <FormWrapper>
        <Typography variant="h6" component="h6" gutterBottom>
          TRESPASS TO PROPERTY AUTHORIZATION FORM
        </Typography>

        <Box sx={{width: '100%', border: '1.5px solid black'}}>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1.5px solid black'}}>
            <TextInputLabel htmlFor={`authorization-client`} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
              Client:
            </TextInputLabel>
            
            <Controller
              name={`authorization.client`}
              control={control}
              render={({ field }) => <TextInput id={`authorization-client`} fullWidth size='small' {...field} />}
            />
          </FormControl>

          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1.5px solid black'}}>
            <TextInputLabel htmlFor={`authorization-address`} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
              Property/Address:
            </TextInputLabel>
            
            <Controller
              name={`authorization.address`}
              control={control}
              render={({ field }) => <TextInput id={`authorization-address`} fullWidth size='small' {...field} />}
            />
          </FormControl>

          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1.5px solid black'}}>
            <TextInputLabel htmlFor={`authorization-effectiveDate`} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
              Effective Date:
            </TextInputLabel>
            
            <Controller
              name={`authorization.effectiveDate`}
              control={control}
              render={({ field: {value, onChange} }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr-ca">
                  <DatePicker slotProps={{ textField: { size: 'small' } }} sx={{ width: '100%', background: '#fff' }} value={value ? dayjs(value as Date) : null} onChange={(v) => onChange(dayjs(v).toDate())} />
                </LocalizationProvider>
              )}
            />
          </FormControl>

          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <TextInputLabel htmlFor={`authorization-multipleLocations`} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
              Multiple Locations:
            </TextInputLabel>
            
            <Controller
              name={`authorization.multipleLocations`}
              control={control}
              render={({ field }) => <FormControlLabel sx={{width:'30%', display: 'flex', alignItems: 'center', justifyContent: 'center', '& .MuiFormControlLabel-label': {fontSize: '14px'}}} control={<Checkbox checked={field.value} {...field} />} label="" />}
            />

            <TextInputLabel htmlFor="name" sx={{width: '70%', borderLeft: '1.5px solid black', px: '14px'}}>
              “If Yes” A Separate list will be attached to this authorization letter
            </TextInputLabel>
          </FormControl>
        </Box>

        <Typography pt="12px" variant="body1" component="p" gutterBottom>
          The Undersigned hereby authorizes the Synergy Protection Group Inc and all of its subsidiaries and agents
          herein named SYNERGY PROTECTION GROUP INC., to enforce all aspects of the Trespass to Property Act, 
          Revised Statutes of Ontario, 1990, Chapter T.21 (Act) for the above-mentioned Establishment, operated 
          by the Undersigned as Owner or Tenant of the Property. In particular, this will authorize any member of 
          the SYNERGY PROTECTION GROUP INC. to act as agent of the Undersigned with respect to the Act.
        </Typography>

        <Typography pt="12px" variant="body1" component="p" gutterBottom>
          This authorization is intended to confer upon the SYNERGY PROTECTION GROUP INC. the same authority 
          as the Undersigned under the Act, namely the authority to prohibit entry to the Property/Establishment, 
          and/or where SYNERGY PROTECTION GROUP INC. determines it necessary, to remove from the 
          Property/Location, any person who has been verbally or in writing, prohibited entry and is therefore 
          unlawfully in the Property/Location. Any individual who unlawfully is on the Property/Location, in 
          violation of being prohibited entry, as authorized by Section 9(1) of the Act, may be arrested and charged 
          with trespass at the discretion of SYNERGY PROTECTION GROUP INC. 
        </Typography>

        <Typography pt="12px" variant="body1" component="p" gutterBottom>
          Upon the request, SYNERGY PROTECTION GROUP INC., will also issue a second and concurrent notice 
          prohibiting entry to the Property/Location, to any individual who has been given a verbal and/or written 
          notice prohibiting entry by SYNERGY PROTECTION GROUP INC.
          It is acknowledged that this authorization given by this document to SYNERGY PROTECTION GROUP INC.,
          by the undersigned, may be withdrawn at any time by sending written notification.
        </Typography>

        <Box sx={{width: '100%', my: '16px'}}>
          <Box sx={{width: '100%', border: '1.5px solid black'}}>
            <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <TextInputLabel htmlFor={`authorization-signature`} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
                Signature:
              </TextInputLabel>
              
              <Controller
                name={`authorization.signature`}
                control={control}
                render={({ field: {onChange, ...field} }) => <SignaturePad onSignatureChange={onChange} {...field} />}
              />
              
            </FormControl>
          </Box>
          <Typography sx={{width: '100%', textAlign: 'right'}} variant="caption" component="p" gutterBottom>
            I have the authority to bind the coporation.
          </Typography>
        </Box>

        <Box sx={{width: '100%', border: '1.5px solid black'}}>
          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1.5px solid black'}}>
            <TextInputLabel htmlFor={`authorization-fullName`} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
              Full Name:
            </TextInputLabel>
            
            <Controller
              name={`authorization.fullName`}
              control={control}
              render={({ field }) => <TextInput id={`authorization-fullName`} fullWidth size='small' {...field} />}
            />
          </FormControl>

          <FormControl sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <TextInputLabel htmlFor={`authorization-position`} sx={{flexBasis: '25%', borderRight: '1.5px solid black'}}>
              Position:
            </TextInputLabel>
            
            <Controller
              name={`authorization.position`}
              control={control}
              render={({ field }) => <TextInput id={`authorization-position`} fullWidth size='small' {...field} />}
            />
          </FormControl>
        </Box>
      </FormWrapper>
    </Container>
  )
}
