import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import houseCard from "../media/notePad.png";
import CustomButton from "./CustomButton";

const ImgContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

const HeadingText = styled(Typography)(({ theme }) => ({
  fontSize: "35px",
  color: "#000339",
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
  fontFamily:"sans-serif",
  fontWeight:"300",
  color: "#5A6473",
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
  fontSize: "18px",
  color: "#000339",
  fontWeight: "700",
  my: 3,
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

const Details = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
      <Container>
        <Grid container spacing={5} direction={{ xs: "column-reverse", sm: "row-reverse" }}>
          <Grid item xs={12} sm={6} md={8}>
            <Box sx={{ py: { xs: 3, sm: 5 }, pr: { xs: 0, sm: 5, md: 10 } }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <DividerText>Hiring</DividerText>
                <Divider />
              </Box>
              <HeadingText>
                Full-Time Dedicated Employee
              </HeadingText>
              <BodyText>
                Hire full time dedicated employees from different places in the 
                world. In AMUS HIRING you
                can find people who can speak 
                English, Spanish, French and other languages. There are
                hundreds of professionals in our database, select your ideal 
                candidate from our pool of top
                talent.
              </BodyText>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Apply Now"
                heroBtn={true}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ImgContainer>
              <img src={houseCard} alt="house" style={{ maxWidth: "80%", height: "auto" }} />
            </ImgContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Details;
