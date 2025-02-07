import { FormHelperText, MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material';
import { FormControl, InputLabel } from '../styles/global';

type DropDownProps = SelectProps & {
  name?: string;
  label: string;
  options: string[];
  isError?: boolean;
  errorMessage?: string;
  message?: string;
  onChange: (e: unknown) => void;
  value: unknown
};

const SelectDropdown = ({ name, label, options, isError, errorMessage, message, value, onChange, required, multiple, ...props }: DropDownProps) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const targetValue = event.target.value as string;
    onChange(targetValue)
  };
  
  return (
    <FormControl fullWidth error={isError}>
      <InputLabel required={required} aria-required={required} htmlFor={name} id={name}>
        {label}
      </InputLabel>
      <Select
        error={isError}
        labelId={name}
        size="small"
        id={name}
        value={value}
        sx={{background: '#fff'}}
        onChange={handleChange}
        multiple={multiple}
        {...props}
      >
        {options?.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
      {isError && <FormHelperText>{errorMessage}</FormHelperText>}
      {message && <FormHelperText>{message}</FormHelperText>}
    </FormControl>
  );
};

export default SelectDropdown;
