import React from "react";
import {Carousel} from 'react-bootstrap';
function Crousel() {
  return (
    <Carousel indicators    ={false}>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-1000"
          src="https://images.unsplash.com/photo-1417024225833-10a6ab08aa51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1818&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1451481086097-f6a15d5f8d18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1529156490981-46d72bba66d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;
