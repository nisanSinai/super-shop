// -------------------------
// 🎞️ GlobalCarousel.jsx – קרוסלה כללית לכל האתר
// -------------------------

import React from "react";
import { Carousel } from "react-bootstrap";

function GlobalCarousel() {
  return (
    <Carousel className="global-carousel mb-4">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/banner1.jpg"
          alt="מבצע 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/banner2.jpg"
          alt="מבצע 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/banner3.jpg"
          alt="מבצע 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default GlobalCarousel;
