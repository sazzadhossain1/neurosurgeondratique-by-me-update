import React from "react";
import "./FifthSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";

const FifthSection = () => {
  return (
    <div className="fifthSection_parent_div">
      <div className="fifthSection_grid_div">
        <div>
          <FontAwesomeIcon className="fifthSection_icon" icon={faUserDoctor} />
          <p>Medical Experts</p>
        </div>
        <div>
          <FontAwesomeIcon className="fifthSection_icon" icon={faUserDoctor} />
          <p>Hospital Rooms</p>
        </div>
        <div>
          <FontAwesomeIcon className="fifthSection_icon" icon={faUserDoctor} />
          <p>Awards Won</p>
        </div>
        <div>
          <FontAwesomeIcon className="fifthSection_icon" icon={faUserDoctor} />
          <p>Happy Patients</p>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
