import { Box, Card, CardActions, Button, CardContent, CardMedia, Typography, styled } from "@mui/material";
import React from "react";

const CustomCard = styled(Card)(({ theme }) => ({
  position: "relative",
  width: 345, // Set a fixed width for all cards
  borderRadius: theme.spacing(1),
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const OverlayContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(1),
  background: "linear-gradient(to bottom, rgba(0.3,0.3,0.3,0.3) 0%, #E6F0FF 100%)",
  opacity: 0,
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 1,
  },
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  paddingBottom: `${theme.spacing(2)} !important`,
  position: "relative",
  zIndex: 1,
  textAlign: "center", // Align the text to the center
}));

const CustomCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: "center",
  padding: theme.spacing(2), // Add padding to the card actions
}));

const CustomButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  width: "100%", // Set the width to occupy the full width of the card actions
  textAlign: "center", // Align the buttons to the center
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#0F1B4C",
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
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
const House = ({ img, address }) => {
  return (
    <CustomCard>
      <CardMedia
        component="img"
        src={img}
        alt="housePhoto"
        sx={{ width: "100%", objectFit: "none" }}
      />

      <OverlayContainer />

      <CustomCardContent>
        <Typography variant="h5" sx={{ color:"rgba(3, 38, 91, 1)"}}>
          {address}
        </Typography>
      </CustomCardContent>

      <CustomCardActions>
        <CustomButtonContainer>
          <CustomButton size="small" color="secondary">
            About
          </CustomButton>
        <Button><NavLink variant="body2">Apply Now</NavLink></Button>
        </CustomButtonContainer>
      </CustomCardActions>
    </CustomCard>
  );
};

export default House;
