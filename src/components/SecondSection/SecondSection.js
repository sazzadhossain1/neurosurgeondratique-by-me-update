import React from "react";
import "./SecondSection.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import cartOne from "../../accets/secondSection/cartOne.jpg";

const SecondSection = () => {
  return (
    <div className="second_section_parent_div">
      <h2>Our Services</h2>
      <p className="secondSection_p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>

      {/* ----- */}

      <div className="second_section_grid_div">
        <div className="second_section_cart">
          <img src={cartOne} alt="" />
          <div className="second_section_cart_div">
            <h4>Neurology</h4>
            <small>
              At Doctoral, early detection is at the heart of better outcomes.
              Our Cancer Screening services are designed to identify warning…
            </small>
            <br />
            <Link>
              <button className="second_section_btn">
                Learn more &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
        <div className="second_section_cart">
          <img src={cartOne} alt="" />
          <div className="second_section_cart_div">
            <h4>Neurology</h4>
            <small>
              At Doctoral, early detection is at the heart of better outcomes.
              Our Cancer Screening services are designed to identify warning…
            </small>
            <br />
            <Link>
              <button className="second_section_btn">
                Learn more &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
        <div className="second_section_cart">
          <img src={cartOne} alt="" />
          <div className="second_section_cart_div">
            <h4>Neurology</h4>
            <small>
              At Doctoral, early detection is at the heart of better outcomes.
              Our Cancer Screening services are designed to identify warning…
            </small>
            <br />
            <Link>
              <button className="second_section_btn">
                Learn more &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
        <div className="second_section_cart">
          <img src={cartOne} alt="" />
          <div className="second_section_cart_div">
            <h4>Neurology</h4>
            <small>
              At Doctoral, early detection is at the heart of better outcomes.
              Our Cancer Screening services are designed to identify warning…
            </small>
            <br />
            <Link>
              <button className="second_section_btn">
                Learn more &nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
