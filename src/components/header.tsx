import { Box, styled, Typography } from "@mui/material"
import { AddressText } from "../styles/global"

export const Header = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <BrandLogo src="/synergy.png" alt="logo" />

        <Typography variant="body1" component="p"sx={{textAlign: 'right'}} gutterBottom>
          <AddressText>150 Bridgeland Ave, Suite 100,</AddressText>
          <AddressText>Toronto, ON M6A 1Z5</AddressText>
          <AddressText><strong>(888) 705-0097</strong></AddressText>
          <AddressText><strong>synergyintegrated.ca</strong></AddressText>
        </Typography>
      </Box>
  )
}

const BrandLogo = styled('img')({
  width: '200px'
})