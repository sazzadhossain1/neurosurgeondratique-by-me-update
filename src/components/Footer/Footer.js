import React from "react";
import "./Footer.css";
import logo from "../../accets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faArrowUpLong,
  faPhone,
  faPhoneAlt,
  faPhoneFlip,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="footer_parent_div">
      <div className="footer_navigate_to_up_div">
        <div className="footer_faArrowUpLong_div">
          <FontAwesomeIcon
            className="footer_faArrowUpLong"
            icon={faArrowUpLong}
          />
        </div>
      </div>
      <div className="footer_grid_div">
        <div className="footer_logo_div">
          <img className="footer_logo" src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum augue quis augue ornare, eget faucibus felis pharetra.
            Proin condimentum et leo quis fringilla.
          </p>
          <div>
            <Link>
              <FontAwesomeIcon
                className="footer_faFacebook"
                icon={faFacebook}
              />
            </Link>
            <Link>
              <FontAwesomeIcon className="footer_faYoutube" icon={faYoutube} />
            </Link>
            <Link>
              <FontAwesomeIcon
                className="footer_faLinkedin"
                icon={faLinkedin}
              />
            </Link>
          </div>
        </div>
        <div>
          <h2>Our Services</h2>
          <p>
            <Link>Bills & Insurance</Link>
          </p>
          <hr />
          <p>
            <Link>Cancer Screening</Link>
          </p>
          <hr />
          <p>
            <Link>Cardiac Surgery</Link>
          </p>
          <hr />
          <p>
            <Link>Neurology</Link>
          </p>
          <hr />
        </div>
        <div>
          <h2>Specialist Doctors</h2>
          <p>
            <Link>Larry Schmidt</Link>
          </p>
          <hr />
          <p>
            <Link>Roger Schneider</Link>
          </p>
          <hr />
          <p>
            <Link>Theresa Hamiltion</Link>
          </p>
          <hr />
          <p>
            <Link>Brittany Robertson</Link>
          </p>
          <hr />
          <p>
            <Link>Raymond Payne</Link>
          </p>
        </div>
        <div className="footer_number_div">
          <h2>Get in Touch</h2>
          <p>70 W. Madison Street, Ste. 1400 Chicago, IL 60602</p>
          <div>
            <FontAwesomeIcon icon={faPhoneSquare} />{" "}
            <small> +88-01915449083</small>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhoneSquare} />{" "}
            <small> +88-01915449083</small>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <small> kazidmc@gmail.com</small>
          </div>
        </div>
      </div>
      <div className="footer_blank_div"></div>
      <div className="footer_copyright_div">
        <p>
          Copyright © || Neurosurgeon Dr. Atique. IT Partner -{" "}
          <Link target="_blank" to="https://abaacorp.com/">
            Abaacorp.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
