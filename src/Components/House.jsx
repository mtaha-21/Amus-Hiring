import { Box, Button, Card, CardActions, CardContent, CardMedia, styled, Typography } from "@mui/material";
import React from "react";
import bedroomsIcon from "../media/bedroomsIcon.png";
import bathroomsIcon from "../media/bathroomsIcon.png";
import spaceIcon from "../media/spaceIcon.png";

const House = ({ img, price, address, bedrooms, bathrooms, space }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
    backgroundColor: "#D9D9D93D",
    borderRadius:"10px"
  }));

  return (
    <Card sx={{ width: 345, bgcolor:"#D9D9D93D"}}>
    {/* <HouseBox> */}
      <CardMedia
        sx={{ height: 290, }}
        image={img}
        title=""
        // sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      {/* <ImgContainer>
        <img src={img} alt="housePhoto" style={{ maxWidth: "100%" }} />
      </ImgContainer> */}

      <Box sx={{ padding: "1rem" }}>
        {/* <Typography variant="body2" sx={{ fontWeight: "700" }}>
          ${price}
        </Typography> */}
          <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {address}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Apply Now</Button>
        <Button size="small">About</Button>
      </CardActions>
        <Typography variant="body2" sx={{ my: 2 }}>
          
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          
        </Typography>

        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>
            <img src={bedroomsIcon} alt="bedroomsIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {bedrooms}
            </Typography>
          </InfoBox>

          <InfoBox>
            <img src={bathroomsIcon} alt="bathroomssIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {bathrooms}
            </Typography>
          </InfoBox>

          <InfoBox>
            <img src={spaceIcon} alt="spaceIcon" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {space}
            </Typography>
          </InfoBox>
        </Box> */}
      </Box>
    {/* </HouseBox> */}
    </Card>

  );
};

export default House;
