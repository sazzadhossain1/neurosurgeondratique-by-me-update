import "./FirstSection.css";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FirstSection = () => {
  return (
    <div className="firstSection_grid_div">
      <div className="firstSection_first_cart">
        <FontAwesomeIcon className="faLocation" icon={faLocation} />
        <h4>Our Location</h4>
        <small>
          Doctoral Medical center, 123 Main Street Your City, State Country.
        </small>
      </div>

      <div className="firstSection_second_cart">
        <FontAwesomeIcon className="faPhone" icon={faPhone} />
        <h4>Phone, Fax & Email</h4>
        <small>Mobile: +88-01915-449-083 +88-0191xxx-xxxx</small>
        <hr />
        <small>Mobile: +88-01915-449-083</small>
        <hr />
        <small>Email: kazidmc@gmail.com</small>
      </div>

      <div className="firstSection_third_cart">
        <FontAwesomeIcon className="faClock" icon={faClock} />
        <h4>Opening hours</h4>
        <small>Monday - Friday: 8.00 - 18.00</small>
        <hr />
        <small>Saturday: 10.00 - 18.00</small>
        <hr />
        <small>Sunday: 10.00 - 18.00</small>
      </div>
    </div>
  );
};

export default FirstSection;
