import { Grid, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import clipCard from "../media/clip.png";
import compteruCard from "../media/computer.png";
import CustomButton from "./CustomButton";

const AboutAmus = () => {
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
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    // justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(1),
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
      <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                textAlign:"center",
                fontWeight: "700",
                my: 3,
              }}
            >
              Why Amus Soft constantly superior to others
            </Typography>
      <Grid container spacing={2}>
        {/* <CustomBox> */}
        <Grid item xs={8}>
          <Box>
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              Save Your Time and Money
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
             AMUS HIRING helps you save up to 80% of your manager 
time in preparing job description,
job posting, searching 
profiles, shortlisting, interviewing etc. Find skilled employees 
in a few
clicks. Reduce your employee cost up to 60% 
by hiring remote employees with AMUS
HIRING.
            </Typography>
          </Box>
          </Grid>
          <Grid item xs={4}>
          <ImgContainer>
            <img src={clipCard} alt="house" style={{ maxWidth: "100%", marginLeft:"5rem" }} />
          </ImgContainer>
          </Grid>
          <Grid item xs={4}>
          <ImgContainer>
            <img src={compteruCard} alt="house" style={{ maxWidth: "100%", marginLeft:"5rem" }} />
          </ImgContainer>
          </Grid>
          <Grid item xs={8}>
          <Box>
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
                Work Remotely From Anywhere
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
             Get hired by top companies in Europe, US, Australia and 
other countries. Enrich your
personal and professional life 
working remotely from home or any other place. Join the
revolution of remote working with AMUS HIRING and 
accomplish your dream.
            </Typography>
          </Box>
          </Grid>
        {/* </CustomBox> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutAmus;
