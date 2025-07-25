import { Box} from "@mui/material";
import styled from "@emotion/styled";



export const createMovieContainer = {
  margin: 'auto',
  justifyContent: 'space-around',
  width: '1250px',
  
  width: {
    xs: '90%',    
    sm: '80%',    
    md: '600px',  
    lg: '1000px',  
  },
  display: {
    xs: 'block',   
    md: 'flex'
  },
  flexDirection: {
    sx: 'block',
    md: 'row'
  }

}

export const publicationMovieBox = {
  width: {
    xs: '90%',    
    sm: '80%',    
    md: '600px',  
    lg: '400px',  
  },
  background: "withe",

  maxHeight: '550px',
  mt: 4,
  margin: 'auto',

  overflow: {
    xs: 'scroll',    
    
    md: 'scroll',  
    
  },
  backgroundColor: "white",
  color: "#000",
  padding: "1",
  borderRadius: "8px",
  // boxShadow: "0 0 10px rgba(246, 83, 83, 0.3)",
}


export const headerPublicationBox = {
  position: "sticky",
  top: 0,          
  background: "white", 
  padding: "10px",
  zIndex: 2,     
  borderBottom: "1.5px solid #eee",
}

export const ContentBox = styled(Box)(({ theme }) => ({
  width: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    margin: 'auto',
    

  }
}))
