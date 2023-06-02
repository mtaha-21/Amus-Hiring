import { Grid, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../media/notePad.png";
import CustomButton from "./CustomButton";

const Details = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#fff",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "25px",
    color: "#7B8087",
    fontWeight: "500",
    marginBottom:"2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    borderRadius:"10px",
    backgroundColor:"#03265B",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <Container>
      <Grid container spacing={2}>
        {/* <CustomBox> */}
        <Grid item xs={4}>
          <ImgContainer>
            <img src={houseCard} alt="house" style={{ maxWidth: "100%" }} />
          </ImgContainer>
          </Grid>
          <Grid item xs={8}>
          <Box>
           <Divider/>
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              Full-Time Dedicated Employee
            </Typography>

            <Typography
              sx={{
                fontSize: "22px",
                fontFamily:"sans-serif",
                fontWeight:"300",
                color: "#5A6473",
                lineHeight: "27px",
                marginBottom:"2rem"
              }}
            >
             Hire full time dedicated employees from different places in the 
world. In AMUS HIRING you
can find people who can speak 
English, Spanish, French and other languages. There are
hundreds of professionals in our database, select your ideal 
candidate from our pool of top
talent.
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Apply Now"
              heroBtn={true}
            />
          </Box>
          </Grid>
        {/* </CustomBox> */}
        </Grid>

        {/* <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>2500+</LargeText>
            <SmallText>CargoWise Certified Experts</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3000+</LargeText>
            <SmallText>Tech Profiles</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3500+</LargeText>
            <SmallText>Different Language Profiles</SmallText>
          </Box>
        </TextFlexbox> */}
      </Container>
    </Box>
  );
};

export default Details;
