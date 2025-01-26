import { Box } from "@mui/material"
import { PropsWithChildren } from "react"

type FormWrapperProps = PropsWithChildren & {
}

export const FormWrapper = ({children}: FormWrapperProps) => {
  return (
    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {children}
    </Box>
  )
}