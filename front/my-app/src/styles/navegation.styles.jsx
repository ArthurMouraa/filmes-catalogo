
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import Image from 'next/image';
import { Box } from '@mui/material';



export const MyAppbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "black",
  position: 'sticky',
  marginTop: 'none',
  marginBottom: '20px',


  [theme.breakpoints.down("sm")]: {
    overflowX: 'hidden',
  }

}))

export const MyTooldbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}))


export const MyImage = styled(Image)(({ theme }) => ({
  width: '50px',
  height: '50px',
  marginRight: '10px',

  [theme.breakpoints.down("sm")]: {
    width: '40px',
    height: '40px'
  }

}))

export const MyTypography = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
  fontWeight: 'bold',
  flexGrow: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: '25px'
  }
}))


export const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4B4B4B', color: 'white', padding: '1',
  [theme.breakpoints.down("sm")]: {
    padding: '0'
    
    
  }
}))

export const MyBoxDrawer = styled(Box)(({ theme }) => ({

  width: '300px',
  [theme.breakpoints.down("sm")]: {
    width: '170px'
  }
}))

export const MyBoxItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5px',
  margin: '10px'
}))

export const BoxItemButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  width: "100%",
  color: 'white',
  backgroundColor: 'black',
  fontSize: '15px',
  justifyContent: 'center',

}