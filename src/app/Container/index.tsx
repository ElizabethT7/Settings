import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  width: '100%', 
  maxWidth: '1920px',
  margin: '0 auto',
  padding: '0 16px',

  [theme.breakpoints.up('desktopXS')]: {
    padding: '0 64px',
  },
}))