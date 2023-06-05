import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import technon from "../../media/technon.png";
import CustomButton from "../CustomButton";
const ImgContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

const HeadingText = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  color: "#03265B",
  fontWeight: "700",

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
  fontSize: "18px",
  fontFamily: "Popine",
  fontWeight: "300",
  color: "rgba(0, 0, 0, 1)",
  marginBottom: "2rem",
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

const TechNon = () => {
  return (
    <>
      <Box sx={{ py: 10, backgroundColor: "#F5F5F5" }}>
        <Container>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            direction={{ xs: "column", sm: "column",lg:"row" }}
          >
            <Grid item xs={12} sm={6} md={8}>
              <Box sx={{ py: { xs: 3, sm: 5 }, pr: { xs: 0, sm: 5, md: 10 } }}>
                <HeadingText>
                  Technical & Non-Technical Professionals
                </HeadingText>
                <BodyText>
                  Hire technical professionals such as Cargowise Consultants,
                  Software Developers, IT Experts, at AMUSHIRING. Hire non
                  technical profiles Import Executive, Export Executive, Ocean
                  Executive, Air Executive, Custom Executive, Process Executives
                  everything you need is in one place.
                </BodyText>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <ImgContainer>
                <img alt="technon" src={technon} style={{ height: "auto" }} />
               
              </ImgContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Box sx={{ py: { xs: 3, sm: 5 }, pr: { xs: 0, sm: 5, md: 10 } }}>
                <HeadingText>
                  Technical & Non-Technical Professionals
                </HeadingText>
                <BodyText>
                  Sea Import Executive, Sea Export Executive,Air Import
                  Executive, Air Export Executive, Road Import Executive, Road
                  Export Executive, Custom Import Executive, Custom Export
                  Executive, Warehouse Executive, Sales Support, Sales
                  Executives, Master Data Support, Account Executive,
                  Documentation Executive.
                </BodyText>
            
              </Box>
            </Grid>
            
          </Grid>
          <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
           marginLeft="520px"
            buttonText="Apply Now"
            heroBtn={true}
          />
        </Container>
      </Box>
    </>
  );
};

export default TechNon;
