import React from 'react'
import { Grid, Box, Container, Typography,Button } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../CustomButton";


  
//   const Divider = styled("div")(({ theme }) => ({
//     width: "15%",
//     height: "5px",
//     backgroundColor: "#000339",
//     marginLeft: theme.spacing(1),
//     [theme.breakpoints.down("md")]: {
//       width: "30%",
//     },
//     [theme.breakpoints.down("sm")]: {
//       width: "50%",
//     },
//   }));
  
//   const DividerText = styled(Typography)(({ theme }) => ({
//     fontSize: "25px",
//     color: "#03265B",
//     fontWeight: "700",
//     my: 3,
//     [theme.breakpoints.down("md")]: {
//       fontSize: "16px",
//     },
//   }));

const GetHigh = () => {
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
  const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: "#000336",
    fontWeight: "lighter",
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
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
  return (
    <Box sx={{  backgroundColor: "#E6F0FF",
    minHeight: "90vh",
    paddingTop: "10rem",paddingBottom: "10rem"}}>
      <Container >
        <Grid   >
          <Grid item xs={12} sm={6} md={8} container spacing={5}>
            <Box sx={{ py: { xs: 3, sm: 5 }, pr: { xs: 0, sm: 5, md: 10 },marginLeft:"70px",display: "flex", flexDirection: "column" ,}}>
              
              <HeadingText sx={{alignContent:"center",justifyItems:"center",justifySelf:'center'}} >
              Get High Paid Remote Jobs in  Europe, US, Australia Companies 
              </HeadingText>
              <BodyText>
              Get hired by top logistics companies located in the US, Europe, Australia and other parts of
the world. Get well paid, full time remote jobs in AMUS HIRING
              </BodyText>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Get remote job"
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
        </Grid>
      </Container>
    </Box>
  )
}

export default GetHigh
