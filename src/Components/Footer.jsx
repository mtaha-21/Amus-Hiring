import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "#E6F0FF" }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Companies
            </Typography>

            <FooterLink>Hire Employee</FooterLink>
            <br />
            <FooterLink>Get Remote Job</FooterLink>
            <br />
            <FooterLink>How to hire</FooterLink>
            <br />
            <FooterLink>Customer Reviews</FooterLink>
            <br />
            <FooterLink>HIring Resource</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Developer
            </Typography>

            <FooterLink>Apply for job</FooterLink>
            <br />
            <FooterLink>Developer Login</FooterLink>
            <br />
            <FooterLink>Remote Developer job</FooterLink>
            <br />
            <FooterLink>Developer Reviews</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>PRIVACY POLICY </FooterLink>
            <br />
            <FooterLink>Careers</FooterLink>
            <br />                          
            <FooterLink>TERMS & CONDITIONS </FooterLink>
            <br />
            <FooterLink>LEGAL NOTICE    </FooterLink>
            <br />
            <FooterLink>COOKIES POLICIES</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              You’ll find your next home, in any style you prefer.
            </Typography>

            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
