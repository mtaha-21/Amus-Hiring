import React from 'react'
import { Grid, Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import topcomapanies from "../../media/topcompanies.png"
import CustomButton from "../CustomButton";

const ImgContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }));
  
  const HeadingText = styled(Typography)(({ theme }) => ({
    fontSize: "35px",
    color: "#03265B",
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
    width: "90%",
    height: "2px",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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

const GetHire = () => {
  return (
    <Box sx={{  backgroundColor: "#F5F5F5" }}>
    <Container>
      <Grid container spacing={5} direction={{ xs: "column", sm: "row-reverse" }}>
      <Grid item xs={12} sm={6} md={4}>
          <ImgContainer>
            <img alt="topcomapanies" src={topcomapanies}  style={{ maxWidth: "90%", height: "auto" }} />
          </ImgContainer>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Box sx={{ py: { xs: 3, sm: 5 }, pr: { xs: 0, sm: 5, md: 10 },marginLeft:"70px" }}>
            
            <HeadingText >
            Get Hired by Top Companies Around 
The World <Divider />
            </HeadingText>
            <BodyText>
            Apply now for jobs in Logistics, Freight Forwarding, 
Transport, Supply Chain and other
industries. 
Pool of highly paid jobs are available in AMUS HIRING
            </BodyText>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Get full time job"
              heroBtn={true}
            />
          </Box>
        </Grid>
        
      </Grid>
    </Container>
  </Box>
  )
}

export default GetHire
