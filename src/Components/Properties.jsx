import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";

const PropertiesContainer = styled(Box)(({ theme }) => ({
  mt: theme.spacing(5),
  py: theme.spacing(8),
  // backgroundColor: "#F6F6F6",
}));

const PropertiesBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const Properties = () => {
  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    textAlign: "center",
    marginBottom: theme.spacing(4),
  }));

  return (
    <PropertiesContainer>
      <Container>
        <PropertiesBox>
          {properties.map((property) => (
            <House
              key={property.id}
              img={property.img}
              address={property.address}
            />
          ))}
        </PropertiesBox>
      </Container>
    </PropertiesContainer>
  );
};

export default Properties;
