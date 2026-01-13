import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";

const Home = () => {
  return (
    <div className="home_parent_div">
      <Carousel></Carousel>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
    </div>
  );
};

export default Home;
