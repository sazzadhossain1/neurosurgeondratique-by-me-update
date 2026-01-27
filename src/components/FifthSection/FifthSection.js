import React from "react";
import "./FifthSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";

const FifthSection = () => {
  return (
    <div className="fifthSection_parent_div">
      <h1 className="FifthSection_heading">Suggestions for Patients</h1>
      <div className="fifthSection_grid_div">
        <div>
          <FontAwesomeIcon className="fifthSection_icon" icon={faUserDoctor} />
          <p>
            When Should You See <br /> a Neurosurgeon?
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="fifthSection_icon" icon={faUserDoctor} />
          <p>
            Before Your <br /> Hospital Visit
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="fifthSection_icon" icon={faUserDoctor} />
          <p>
            After Treatment <br /> or Surgery Care
          </p>
        </div>
        <div>
          <FontAwesomeIcon className="fifthSection_icon" icon={faUserDoctor} />
          <p>
            Common Myths and <br /> Patient Questions
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
