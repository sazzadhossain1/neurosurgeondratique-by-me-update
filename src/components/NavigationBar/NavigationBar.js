import React from "react";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../accets/logo/logo.png";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div>
      <div className="navigation_parent_div">
        <div className="navigation_first_section_div">
          <div className="navigation_first_section_flex_div">
            <div>
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> kazidmc@gmail.com
              </span>{" "}
              <span>
                <FontAwesomeIcon icon={faPhone} /> +88-01915449083
              </span>
            </div>
            <div>
              <FontAwesomeIcon className="faFacebook" icon={faFacebook} />
              <FontAwesomeIcon className="faYoutube" icon={faYoutube} />
              <FontAwesomeIcon className="faTwitter" icon={faTwitter} />
            </div>
          </div>
        </div>
        {/* ------------NAV SECTION START------------*/}
        <div className="nav_second_parent_div">
          <div className="nav_second_flex_div">
            <img className="navigation_loto" src={logo} alt="" />
            <div className="nav_ul_div">
              <ul>
                <li>Home</li>
                <li>Pages</li>
                <li>About Us</li>
                <li>Our Experts</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <Link>
                <button className="nav_make_btn">MAKE AN APPOINMENT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
