import React from "react";
import {Carousel} from 'react-bootstrap';
function Crousel() {
  return (
    <Carousel indicators    ={false}>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/44/66/86/4466867576e64e1feb336104a5d90d11.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/44/66/86/4466867576e64e1feb336104a5d90d11.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/44/66/86/4466867576e64e1feb336104a5d90d11.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;
