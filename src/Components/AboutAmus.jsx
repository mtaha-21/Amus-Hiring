import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import clipCard from "../media/clip.png";
import computerCard from "../media/computer.png";

const ImgContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const HeadingText = styled(Typography)(({ theme }) => ({
  fontSize: "35px",
  color: "#000339",
  fontWeight: "700",
  my: 3,
  textAlign:"center",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
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
    fontSize: "18px",
  },
}));

const ResponsiveGridItem = styled(Grid)(({ theme }) => ({
  order: ({ order }) => order,
  [theme.breakpoints.down("md")]: {
    order: 0,
  },
}));

const AboutAmus = () => {
  const sections = [
    {
      title: "Save Your Time and Money",
      body: `AMUS HIRING helps you save up to 80% of your manager 
time in preparing job description,
job posting, searching 
profiles, shortlisting, interviewing etc. Find skilled employees 
in a few
clicks. Reduce your employee cost up to 60% 
by hiring remote employees with AMUS
HIRING.`,
      image: clipCard,
    },
    {
      title: "Work Remotely From Anywhere",
      body: `Get hired by top companies in Europe, US, Australia and 
other countries. Enrich your
personal and professional life 
working remotely from home or any other place. Join the
revolution of remote working with AMUS HIRING and 
accomplish your dream.`,
      image: computerCard,
    }
  ];

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <HeadingText sx={{mb: 5}}>
          Why Amus Soft constantly superior to others
        </HeadingText>
        <Grid container spacing={4}>
          {sections.map((section, index) => {
            const isImageFirst = index % 2 !== 0;
            return (
              <React.Fragment key={index}>
                <ResponsiveGridItem item xs={12} md={6} order={isImageFirst ? 1 : 0} sx={{ py: 5 }}>
                  <HeadingText>
                    {section.title}
                  </HeadingText>
                  <BodyText>
                    {section.body}
                  </BodyText>
                </ResponsiveGridItem>
                <ResponsiveGridItem item xs={12} md={6} order={isImageFirst ? 0 : 1} sx={{ py: 5 }}>
                  <ImgContainer>
                    <img src={section.image} alt="section illustration" style={{ maxWidth: "80%" }} />
                  </ImgContainer>
                </ResponsiveGridItem>
              </React.Fragment>
            )
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutAmus;
