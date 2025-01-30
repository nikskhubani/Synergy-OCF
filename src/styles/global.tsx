import { FormLabel, styled, TextField, Typography } from '@mui/material';

export const AddressText = styled('span')({
  display: 'block',
  margin: 0,
  padding: 0,
  fontSize: '0.7rem',
  lineHeight: '1.5rem',
})

export const FormTitle = styled(Typography)({
  backgroundColor: '#d7d7d7',
  width: '100%',
  height: '25px',
  textAlign: 'center',
  fontWeight: 500,
  borderBottom: '1.5px solid black',
}) as typeof Typography

export const TextInputLabel = styled(FormLabel)({
  padding: '8.5px 14px',
  fontSize: '0.9rem',
  color: 'black',
}) as typeof FormLabel

export const TextInput = styled(TextField)({
  backgroundColor: '#daebff',

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    borderRadius: '0px',
  },
}) as typeof TextField