import "./FirstSection.css";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FirstSection = () => {
  return (
    <div className="firstSection_grid_div">
      <div className="firstSection_first_cart">
        <div className="firstSection_location_div">
          <FontAwesomeIcon className="faLocation" icon={faLocation} />
          <h2>Our Location</h2>
        </div>
        {/* <small>
          Doctoral Medical center, 123 Main Street Your City, State Country.
        </small> */}
        <div className="firstSection_location_text_div">
          <p>
            Chamber 1: Islami Bank Central Hospital 30, Anwar Haider Islam Road,
            Kakrail, Dhaka-1000
          </p>

          <p>
            Chamber 2: Ibn Sina Cancer Diagnostic Center, Building-2, House
            No-46, Road No-10/A, Satmasjid Road, Dhanmondi, Dhaka.
          </p>

          <p>
            Chamber 3: MyCare Health and Research Shyamoli Cinema Hall Building
            Complex, 4th Floor, Ring Road, Shyamoli, Dhaka-1207
          </p>
        </div>
      </div>

      <div className="firstSection_second_cart">
        <div className="firstSection_location_div">
          <FontAwesomeIcon className="faPhone" icon={faPhone} />
          <h2>Phone & Email</h2>
        </div>
        <div className="firstSection_location_text_div">
          <p>Mobile: +88-01327022466 +88-0191xxx-xxxx</p>
          <hr />

          <p>Email: kazidmc@gmail.com</p>
        </div>
      </div>

      <div className="firstSection_third_cart">
        <div className="firstSection_location_div">
          <FontAwesomeIcon className="faClock" icon={faClock} />
          <h2>Opening Hours</h2>
        </div>
        <div>
          <p>Monday - Friday: 8.00 - 18.00</p>
          <hr />
          <p>Saturday: 10.00 - 18.00</p>
          <hr />
          <p>Sunday: 10.00 - 18.00</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
