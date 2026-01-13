import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import FirstSection from "../FirstSection/FirstSection";

const Home = () => {
  return (
    <div className="home_parent_div">
      <Carousel></Carousel>
      <FirstSection></FirstSection>
    </div>
  );
};

export default Home;
