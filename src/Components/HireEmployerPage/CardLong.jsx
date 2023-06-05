import React from 'react'
import { Grid, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const CardLong = () => {
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
        color: "#03265B",
        fontWeight: "500",
        marginBottom:"2rem",
        [theme.breakpoints.down("md")]: {
          fontSize: "14px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "14px",
        },
      }));
    
      const TextFlexbox = styled(Box)(({ theme }) => ({
        marginTop: theme.spacing(7),
        display: "flex",
        justifyContent: "space-between",
        borderRadius:"10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        border:"1px solid #B0B0B0",
        backgroundColor:" #D9D9D9 ",
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
      const HeadingText = styled(Typography)(({ theme }) => ({
        fontSize: "26px",
        color: "#000000",
        fontWeight: "700",
        my: 3,
        textAlign:"center",
        [theme.breakpoints.down("md")]: {
          fontSize: "20px",
        },
      }));
  return (
    <Box sx={{ py: 10 }}>
    <Container>
    <Grid item xs={12} sm={6} md={8}>
    <HeadingText sx={{mb: 5}} direction={{ xs: "row", sm: "column",lg:"row" }}>
    
    Hundreds of Logistics companies trust <span style={{color: "#03265B"}}  > AMUS HIRING  </span> to hire remote employees
        </HeadingText>
      <TextFlexbox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
         
          <SmallText sx={{mt:5}} >Join hundreds of Logistics, Freight Forwarding,Transport, Supply Chain and other <span style={{alignContent:"space-between"}}  > companies that  trust to hire remote profile with us</span></SmallText>
        </Box>

       
      </TextFlexbox>
      </Grid>
    </Container>
  </Box>
  )
}

export default CardLong
