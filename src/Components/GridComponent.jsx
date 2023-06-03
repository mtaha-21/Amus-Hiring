import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import * as React from 'react';
import Slider from 'react-slick';
import { Card, CardActionArea, CardContent, CardMedia, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import img1 from "../media/truck.png";
import img2 from "../media/sandTime.png";
import img3 from "../media/SaveMoney.png";
import img4 from "../media/team.png";
import img5 from "../media/team2.png";
import img6 from "../media/messagebox.png";

const cards = [
  { id: 1, img: img1, title: "Freight Forwarding, Logistics, Transport & Supply Chain specialist", alt: "Truck", description: ""},
  { id: 2, img: img2, title: "Save up to 80% of your manager's time spent in the hiring process", alt: "Sand Time", description: ""},
  { id: 3, img: img3, title: "Save up to 60% in your resource cost hiring remotely with AMUS HIRING", alt: "Save Money", description: ""},
  { id: 4, img: img4, title: "Quick Incorporation to your team", alt: "Team", },
  { id: 5, img: img5, title: "Hire remote professionals, who speak your own language", alt: "Team 2", },
  { id: 6, img: img6, title: "Certified professionals", alt: "Message box",},
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick} sx={{
      position: 'absolute', 
      top: '50%', 
      right: '-25px', 
      transform: 'translateY(-50%)', 
      // backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      color: '#000336', 
      padding: '10px', 
      borderRadius: '50%', 
      zIndex: '1',
      '@media (max-width:600px)': {
        right: '-15px',
        padding: '5px',
      }
    }}>
      <ArrowForwardIosIcon />
    </IconButton>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick} sx={{
      position: 'absolute', 
      top: '50%', 
      left: '-25px', 
      transform: 'translateY(-50%)', 
      // backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      color: '#000336', 
      padding: '10px', 
      borderRadius: '50%', 
      zIndex: '1',
      '@media (max-width:600px)': {
        left: '-15px',
        padding: '5px',
      }
    }}>
      <ArrowBackIosIcon />
    </IconButton>
  );
}
const CardItem = ({ id, img, title, alt }) => (
  <div key={id}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={alt}
          sx={{width: "80%",objectFit: "contain",marginLeft:"30px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color:"rgba(3, 38, 91, 0.55)",fontSize:"22px" }}>
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
);

export default function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container>
      <Slider {...settings}>
        {cards.map((card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </Slider>
    </Container>
  );
}
