import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Box, FormHelperText } from '@mui/material';
import 'dayjs/locale/en';
import { FormControl, InputLabel } from '../styles/global';

type DatePickerInputProps = {
  name?: string;
  label: string;
  isError?: boolean;
  required?: boolean;
  errorMessage?: string;
  onChange?: (e: unknown) => void;
  value?: unknown,
};

const DatePickerInput = ({ name, label, isError, errorMessage, value, onChange, required }: DatePickerInputProps) => {
  return (
    <FormControl fullWidth error={isError}>
      <InputLabel required={required} aria-required={required} id={name}>{label}</InputLabel>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          <DatePicker slotProps={{ textField: { size: 'small' } }} sx={{ width: '100%', background: '#fff' }} value={value ? dayjs(value as Date) : null} onChange={(v) => onChange && onChange(dayjs(v).toDate())} />
        </LocalizationProvider>
      </Box>
      {isError && <FormHelperText error={isError}>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default DatePickerInput;
