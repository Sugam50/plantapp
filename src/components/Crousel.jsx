import React from "react";
import image1 from "./bg1.svg";
import image2 from "./bg2.svg";
import image3 from "./bg3.svg";

import {Carousel} from 'react-bootstrap';
function Crousel() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
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
