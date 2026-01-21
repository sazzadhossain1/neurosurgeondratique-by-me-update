import React from "react";
import "./SecondSection.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import cartOne from "../../accets/secondSection/cartOne.jpg";

import SpinalSurgery from "../../accets/secondSection/Spinal Surgery.png";
import LogoTwo from "../../accets/secondSection/logoTwo.png";
import EndoscopicBrainSurgery from "../../accets/secondSection/Endoscopic Brain Surgery.png";
import SkullBaseSurgery from "../../accets/secondSection/Skull Base Surgery.png";
import VascularNeuroSurgery from "../../accets/secondSection/Vascular Neuro Surgery.png";
import PediatricNeuroSurgery from "../../accets/secondSection/Pediatric Neuro Surgery.png";
import TraumaticBrain from "../../accets/secondSection/Traumatic Brain.png";
import EpilepsySurgery from "../../accets/secondSection/Epilepsy Surgery.png";
import SpinalTumour from "../../accets/secondSection/Spinal Tumour.png";
import Microdiscectomy from "../../accets/secondSection/Microdiscectomy.png";
import StrokeSurgery from "../../accets/secondSection/Stroke Surgery.png";

const SecondSection = () => {
  return (
    <div className="second_section_parent_div">
      <h2>Treatment & Surgery</h2>
      <p className="secondSection_p">
        Treatment and surgery are vital medical approaches that help diagnose,
        manage, and cure diseases, improving patient health through medications,
        therapies, and safe surgical procedures when necessary.
      </p>

      {/* ----- */}

      <div className="second_section_grid_div">
        <div className="second_section_cart">
          <img src={SpinalSurgery} alt="" />
          <div className="second_section_cart_div">
            <h4>Spinal Surgery</h4>
            <small>
              The spine is a critical structure in the human body, serving as a
              support system for the upper body, protecting the spinal cord, and
              facilitating movement...
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
          <img src={LogoTwo} alt="" />
          <div className="second_section_cart_div">
            <h4>Brain Tumour Operation</h4>
            <small>
              A brain tumor diagnosis can be overwhelming, but with advancements
              in neurosurgery, effective treatment options are available to
              provide relief and improve...
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
          <img src={EndoscopicBrainSurgery} alt="" />
          <div className="second_section_cart_div">
            <h4>Endoscopic Brain Surgery</h4>
            <small>
              Advancements in medical technology have transformed the field of
              neurosurgery, making procedures less invasive and recovery faster.
              Endoscopic brain...
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
          <img src={SkullBaseSurgery} alt="" />
          <div className="second_section_cart_div">
            <h4>Skull Base Surgery</h4>
            <small>
              The base of the skull is a critical area that houses vital nerves,
              blood vessels, and structures connecting the brain to the rest of
              the body. Conditions...
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
          <img src={VascularNeuroSurgery} alt="" />
          <div className="second_section_cart_div">
            <h4>Vascular Neuro Surgery</h4>
            <small>
              Vascular neurosurgery is a highly specialized branch of
              neurosurgery focused on diagnosing and treating conditions
              involving the blood vessels...
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
          <img src={PediatricNeuroSurgery} alt="" />
          <div className="second_section_cart_div">
            <h4>Pediatric Neuro Surgery</h4>
            <small>
              Children with neurological conditions require specialized care
              that addresses their unique needs with compassion and precision.
              Pediatric neurosurgery...
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
          <img src={TraumaticBrain} alt="" />
          <div className="second_section_cart_div">
            <h4>Traumatic Braiin & Spine Surgery</h4>
            <small>
              Traumatic brain and spine injuries are life-altering conditions
              that demand immediate and expert medical intervention. Whether
              caused by accidents...
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
          <img src={EpilepsySurgery} alt="" />
          <div className="second_section_cart_div">
            <h4>Epilepsy Surgery</h4>
            <small>
              Epilepsy surgery is a transformative treatment option for
              individuals whose seizures cannot be controlled with medication
              alone. It offers the possibility...
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
          <img src={SpinalTumour} alt="" />
          <div className="second_section_cart_div">
            <h4>Spinal Tumour</h4>
            <small>
              Spinal tumors are abnormal growths that develop in or around the
              spinal cord or vertebrae. They can be either benign
              (non-cancerous)...
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
          <img src={Microdiscectomy} alt="" />
          <div className="second_section_cart_div">
            <h4>Microdiscectomy</h4>
            <small>
              Microdiscectomy is a minimally invasive surgical procedure
              designed to relieve nerve compression caused by herniated discs in
              the spine. This advanced...
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
          <img src={StrokeSurgery} alt="" />
          <div className="second_section_cart_div">
            <h4>Stroke Surgery</h4>
            <small>
              Stroke is a serious medical condition that occurs when the blood
              supply to part of the brain is interrupted, either due to a
              blockage (ischemic stroke)...
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
