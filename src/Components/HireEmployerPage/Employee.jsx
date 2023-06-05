import React from 'react'
import { Grid, Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
//import houseCard from "../MediaCard/talent";
import talent from "../../media/talent.png"
import CustomButton from "../CustomButton";

const ImgContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

const HeadingText = styled(Typography)(({ theme }) => ({
  fontSize: "35px",
  color: "rgba(3, 38, 91, 0.66)",
  fontWeight: "700",
  my: 3,
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "20px",
  },
}));

const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  fontFamily:"Popine",
  fontWeight:"300",
  color: "rgba(0, 0, 0, 1)",
  lineHeight: "27px",
  marginBottom:"2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "16px",
  },
}));

const Divider = styled("div")(({ theme }) => ({
  width: "15%",
  height: "5px",
  backgroundColor: "#000339",
  marginLeft: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "30%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));

const DividerText = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  color: "#03265B",
  fontWeight: "700",
  my: 3,
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

const Employee = () => {
  return (
    <Box sx={{  backgroundColor: "#E6F0FF",
    minHeight: "90vh",
    paddingTop: "10rem", }}>
      <Container>
        <Grid container spacing={5} direction={{ xs: "column-reverse", sm: "row-reverse" }}>
          <Grid item xs={8} sm={6} md={6}>
            <Box sx={{marginLeft:"70px" }}>
              
              <HeadingText >
              Hire the best talent at the<DividerText sx={{ display: "flex", alignItems: "center" }} > Lowest Cost <Divider /> </DividerText> 
              </HeadingText>
              <BodyText>
              Find the best remote talent at the 
lowest cost. Hire full-time, dedicated,  remote professionals with experience  in your industry 
              </BodyText>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Apply Now"
                heroBtn={true}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ImgContainer>
              <img 
                alt="talent" src={talent}
                 style={{ maxWidth: "60%", height: "auto" }} />
            </ImgContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Employee
