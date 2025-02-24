import { Typography } from "@mui/material"

type FormTitleProps = {
  text: string
  marginBottom?: number
}

export const Title = ({ text }: FormTitleProps) => {
  return (
    <h1 style={{fontSize: '36.955px', fontWeight: 500, lineHeight: 1.2, marginBottom: '0.5rem', marginTop: 0}}>
      {text}
    </h1>
  )
}

export const CardTitle = ({ text, marginBottom }: FormTitleProps) => {
  return (
    <Typography sx={{ marginBottom: marginBottom || 5 }} variant="h5" component="div">
      {text}
    </Typography>
  )
}
