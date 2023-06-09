import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
//import Navbar from "./Navbar";

import heroImg from "../media/Homepage 12.png";
import CustomButton from "./CustomButton";

const Hero = () => {
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
  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
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
  const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: "#000336",
    fontWeight: "lighter",
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  }));

  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        minHeight: "90vh",
        paddingTop: "10rem",
      }}
    >
      <Container>
       
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#03265B",
                  fontWeight: "500",
                  mt: 6,
                  mb: 1,
                }}
              >
                Hire remote employees in a few clicks
              </Typography>
              <Title variant="h1">
                WELCOME TO THE FUTURE OF REMOTE WORKING
              </Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#rgba(3, 38, 91, 0.92)", my: 1 }}
              >
                <ul>
                  <li>Save your time and money.</li>
                  <li>
                    Full-time dedicated Technical and Non-Technical profiles
                    at your fingertips now.
                  </li>
                  <li>
                    Hire your ideal employee from our pool of skilled
                    candidates.
                  </li>
                </ul>
              </Typography>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                heroBtn={true}
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SubTitle variant="p">Looking for remote jobs?</SubTitle>
                <Button>
                  <NavLink variant="body2">Apply now</NavLink>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={heroImg}
                alt="heroImg"
                style={{ width: "80%", height: "auto", marginTop: "4rem" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
