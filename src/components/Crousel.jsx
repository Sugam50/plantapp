import React from "react";
import image1 from '../assests/bg1.svg';
import image2 from "../assests/bg2.svg";
import image3 from "../assests/bg3.png";

import {Carousel} from 'react-bootstrap';
function Crousel() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;
