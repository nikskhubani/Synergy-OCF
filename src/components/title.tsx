import { Typography } from "@mui/material"

type FormTitleProps = {
  text: string
}

export const Title = ({ text }: FormTitleProps) => {
  return (
    <Typography sx={{ marginBottom: 1, textTransform: 'capitalize', width: '100%', textAlign: 'center' }} variant="h5" component="p">
      {text}
    </Typography>
  )
}

export const CardTitle = ({ text }: FormTitleProps) => {
  return (
    <Typography sx={{ marginBottom: 5 }} variant="h5" component="div">
      {text}
    </Typography>
  )
}
