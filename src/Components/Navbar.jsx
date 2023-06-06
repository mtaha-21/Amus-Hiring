import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import logoImg from "../media/navlogo3.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > window.innerHeight) {
  //       setHideOnScroll(true);
  //     } else {
  //       setHideOnScroll(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 800) {  // This line has been changed
        setTimeout(() => setHideOnScroll(true), 400);  // Delay state update
      } else {
        setTimeout(() => setHideOnScroll(false), 400); // Delay state update
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Hire Employee", "Get Remote Job"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {/* {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: "#03265B66",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#0F1B4C",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    marginLeft:"15rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  // const NavbarContainer = styled(Container)(({ theme }) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   position:"fixed",
  //   backgroundColor: "#F5F5F5",
  //   borderRadius:"10px",
  //   justifyContent: "space-between",
  //   padding: theme.spacing(4),
  //   [theme.breakpoints.down("md")]: {
  //     padding: theme.spacing(2),
  //   },
  // }));
  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: hideOnScroll ? 'none' : 'flex',
    alignItems: "center",
    transition: 'opacity 0.3s',
    justifyContent: "space-between",
    position: "fixed",
    //top: 20,
   // zIndex: 1000,
   minWidth: '100%',
    backgroundColor: "#F5F5F5",
   // borderRadius:"10px",
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
}));




  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logoImg} style={{width:"15rem"}} alt="logo" />
        </Box>

        <NavbarLinksBox>
        <Link to="/"> <NavLink variant="body2">Home</NavLink></Link>
        <Link to="/Hire_Employee"> <NavLink variant="body2">Hire Employee</NavLink></Link>
         <Link to="/Get_Remote_Job"> <NavLink variant="body2">Get Remote Job</NavLink></Link>
          {/* <NavLink variant="body2">Listed</NavLink>
          <NavLink variant="body2">Contact</NavLink> */}
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink variant="body2">Sign Up</NavLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
