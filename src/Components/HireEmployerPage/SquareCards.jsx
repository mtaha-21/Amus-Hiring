import React from 'react'
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
//import CustomButton from "../CustomButton";
const SquareCards = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
      }));
   
      const Title = styled(Typography)(({ theme }) => ({
        fontSize: "40px",
        color: "rgba(4, 13, 27, 0.97)",
        fontWeight: "bold",
        fontFamily:"Poppins",
        margin: theme.spacing(2, 0),
        [theme.breakpoints.down("sm")]: {
          fontSize: "35px",
        },
      }));
    
  return (
    <Box
    sx={{
      backgroundColor: "#F5F5F5",
      minHeight: "150vh",
      paddingTop: "10rem",
    }}
  >
    <Container sx={{ position:"relative",display: "flex"}}>
     
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ position:"relative",  width: "413px",
height: "125px", backgroundColor: "#03265B",borderRadius: "40px 40px 0px 0px",border: "1px solid #03265B" }}direction={{ xs: "column", sm: "column",lg:"row" }}>
            <Typography
                variant="h2"
                sx={{  position:"relative", fontSize: "18px", color: "#FFFFFF",top:"50px",left:'120px' }}
              >
               
               HIRE CONSULTANT
                  
              </Typography>
            
            
            <Box sx={{ position:"relative", width: "413px",
height: "325px", backgroundColor: "white",marginTop:"80px",marginBottom:"150px",borderRadius: "0px 0px 40px 40px",border: "1px solid #03265B" ,boxSizing:"border-box",right:"1px"  }}>

  <Box sx={{display:"flex",gap:"1rem"}}>
  <Typography variant="body" sx={{  position:"relative", fontSize: "18px", color: "red",top:"50px", }}>
               HIRE      
              </Typography>
              <Typography
                variant="body" sx={{  position:"relative", fontSize: "18px", color: "red",top:"50px" }}
              >
               CargoWise Consultant 
              </Typography>
              <Typography variant="body" sx={{  position:"relative", fontSize: "18px", color: "red",top:"50px", }}>
               HIRE 
              </Typography>
              <Typography variant="body"sx={{  position:"relative", fontSize: "18px", color: "red",top:"50px" }}>
               CRM Consultant
              </Typography>
              
              </Box>
    
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} direction={{ xs: "column", sm: "column",lg:"row" }}>
          <Box sx={{ position:"relative", width: "413px",
height: "105px", backgroundColor: "#03265B",borderRadius: "40px 40px 0px 0px",border: "1px solid #03265B",boxSizing:"border-box" }} >
           <Typography variant="h2" sx={{  position:"relative", fontSize: "18px", color: "#FFFFFF",top:"50px",left:'120px' }} >
               HIRE  IT EXPERT  </Typography>
          </Box>
          
          <Box sx={{ position:"relative", width: "413px",
height: "325px", backgroundColor: "white",marginBottom:"150px",borderRadius: "0px 0px 40px 40px",border: "1px solid #03265B",boxSizing:"border-box" }}>

<Box sx={{display:"flex",gap:"1rem"}}>
  <Typography variant="body" sx={{  position:"relative", fontSize: "18px", color: "red",top:"50px", }}>
               HIRE      
              </Typography>
              <Typography
                variant="body" sx={{  position:"relative", fontSize: "18px", color: "red",top:"50px" }}
              >
               CargoWise Consultant 
              </Typography>
              
              <Typography variant="body" sx={{  position:"relative", fontSize: "18px", color: "red",top:"50px", }}>
               HIRE 
              </Typography>
              <Typography variant="body"sx={{  position:"relative", fontSize: "18px", color: "red",top:"50px" }}>
               CRM Consultant
              </Typography>
              
              </Box>
             
            </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
  )
}

export default SquareCards

{/*
 <SubTitle variant="p">Looking for remote jobs?</SubTitle>
              <Button>
                <NavLink variant="body2">Apply now</NavLink>
              </Button>


                <img
              src='/'
              alt=""
              style={{ width: "80%", height: "auto", marginTop: "4rem" }}
            />

<CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />



*/}
