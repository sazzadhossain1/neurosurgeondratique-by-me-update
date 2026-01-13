import React from "react";
import "./Carousel.css";
import sliderOne from "../../accets/carousel/sliderOne.jpg";
import sliderTwo from "../../accets/carousel/sliderTwo.jpg";
import sliderThree from "../../accets/carousel/sliderThree.jpg";

const Carousel = () => {
  return (
    <div>
      <img className="sliderOne" src={sliderOne} alt="" />
    </div>
  );
};

export default Carousel;
