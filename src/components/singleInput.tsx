import { Box, TextField, TextFieldProps } from '@mui/material';
import { FormControl, InputLabel } from '../styles/global';

type SingleInputProps = TextFieldProps & {
  name?: string;
  label: string;
  isError?: boolean;
  errorMessage?: string;
};

const SingleInput = ({ name, label, placeholder, type, isError, errorMessage, value, required, ...props }: SingleInputProps) => {
  return (
    <FormControl error={isError}>
      <InputLabel required={required} aria-required={required} htmlFor={name} id={name}>
        {label}
      </InputLabel>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <TextField
          type={type}
          fullWidth
          size="small"
          variant="outlined"
          sx={{background: '#fff'}}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          {...props}
          error={isError}
          helperText={errorMessage}
        />
      </Box>
    </FormControl>
  );
};

export default SingleInput;
