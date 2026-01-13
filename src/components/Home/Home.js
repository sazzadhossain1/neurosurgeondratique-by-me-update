import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import ForthSection from "../ForthSection/ForthSection";
import FifthSection from "../FifthSection/FifthSection";

const Home = () => {
  return (
    <div className="home_parent_div">
      <Carousel></Carousel>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <ForthSection></ForthSection>
      <FifthSection></FifthSection>
    </div>
  );
};

export default Home;
