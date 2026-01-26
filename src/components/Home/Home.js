import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import ForthSection from "../ForthSection/ForthSection";
import FifthSection from "../FifthSection/FifthSection";
import SixSection from "../SixSection/SixSection";
import HomeVideoGallery from "../HomeVideoGallery/HomeVideoGallery";

const Home = () => {
  return (
    <div className="home_parent_div">
      <Carousel></Carousel>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      {/* <ThirdSection></ThirdSection> */}

      {/* This is THIRD section start */}
      <HomeVideoGallery></HomeVideoGallery>
      {/* This is THIRD section end */}

      <ForthSection></ForthSection>
      <FifthSection></FifthSection>
      <SixSection></SixSection>
    </div>
  );
};

export default Home;
