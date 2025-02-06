import { Card, CardContent } from "@mui/material"
import { PropsWithChildren } from "react"

type FormWrapperProps = PropsWithChildren & {
}

export const FormWrapper = ({children}: FormWrapperProps) => {
  return (
    <Card sx={{ marginBottom: 5, background: 'linear-gradient(90deg,#fafafa,#f4f4f4)' }} variant="outlined">
      <CardContent>{children}</CardContent>
    </Card>
  )
}
