import React from "react";
import "./ThirdSection.css";
import cartOne from "../../accets/thirdSection/cartPhoto.jpg";

const ThirdSection = () => {
  return (
    <div className="thirdSection_parent_div">
      <h2>Our Medical Experts</h2>
      <p className="secondSection_p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>

      <div className="thirdSection_grid_div">
        <div className="thirdSection_common_cart">
          <img src={cartOne} alt="" />
          <div>
            <h3>Larry Schmidt</h3>
            <small>neurology Specialists</small>
          </div>
        </div>
        <div className="thirdSection_common_cart">
          <img src={cartOne} alt="" />
          <div>
            <h3>Larry Schmidt</h3>
            <small>neurology Specialists</small>
          </div>
        </div>
        <div className="thirdSection_common_cart">
          <img src={cartOne} alt="" />
          <div>
            <h3>Larry Schmidt</h3>
            <small>neurology Specialists</small>
          </div>
        </div>
        <div className="thirdSection_common_cart">
          <img src={cartOne} alt="" />
          <div>
            <h3>Larry Schmidt</h3>
            <small>neurology Specialists</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
