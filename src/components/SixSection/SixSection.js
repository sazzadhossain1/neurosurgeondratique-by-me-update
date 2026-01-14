import React from "react";
import "./SixSection.css";
import cartPhoto from "../../accets/sixSection/cartPhoto.jpg";
import { Link } from "react-router-dom";

const SixSection = () => {
  return (
    <div>
      <h1>Latest from our blog</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        augue quis augue ornare, eget faucibus felis pharetra. Proin condimentum
        et leo quis fringilla.
      </p>
      <div className="six_section_grid_div">
        <div className="six_section_cart_div">
          <img src={cartPhoto} alt="" />
          <div className="six_section_cart_text_div">
            <small>Medical care</small>
            <h3>Good Health Habits Can Help Stop Germs</h3>
          </div>
        </div>
        <div className="six_section_cart_div">
          <img src={cartPhoto} alt="" />
          <div className="six_section_cart_text_div">
            <small>Medical care</small>
            <h3>Good Health Habits Can Help Stop Germs</h3>
          </div>
        </div>
        <div className="six_section_cart_div">
          <img src={cartPhoto} alt="" />
          <div className="six_section_cart_text_div">
            <small>Medical care</small>
            <h3>Good Health Habits Can Help Stop Germs</h3>
          </div>
        </div>
      </div>
      <Link>
        <button className="six_section_btn">More News</button>
      </Link>
    </div>
  );
};

export default SixSection;
