import React from "react";
import"../Style/Carousel.css";
import image1 from '../assests/bg1.svg';
import image2 from "../assests/bg2.svg";
import image3 from "../assests/bg3.png";

import {Carousel} from 'react-bootstrap';
function Crousel() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-style"
          src={image1}
          alt="First slide"
        />
         <Carousel.Caption className="Carousel-text">
      <h3>Welcome to the biggest plantation drive ever</h3>
      <p>Join the revolution to save the mother nature</p>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-style"
          src={image2}
          alt="Second slide"
        />
         <Carousel.Caption className="Carousel-text">
      <h3>Contribute In the building of a new Pollution free-world </h3>
      <p>Join us in the making of a world full of greenry , doante your time to plant a tree or donate your money to promote plantation .</p>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img-style"
          src={image3}
          alt="Third slide"
        /> 
        <Carousel.Caption className="Carousel-text">
        <h3>Know the process how it works</h3>
        <p>Planter can plant and donar can donate. Easy for people to contribute in the well being for our nature mother</p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;
