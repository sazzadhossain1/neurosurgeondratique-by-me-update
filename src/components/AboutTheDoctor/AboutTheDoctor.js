import React from "react";
import "./AboutTheDoctor.css";
import doctorPhotoOne from "../../accets/doctorPhoto/doctorPhotoOne.jpg";

const AboutTheDoctor = () => {
  return (
    <div>
      <h2 className="About_Neurosurgeon_title">About The Doctor</h2>
      <div className="DrAtiqulIslam_parent_div">
        <div className="doctor_details_div">
          <p>
            Dr. K. M. Atiqul Islam is a dynamic and reliable Neurosurgeon
            currently serving at National Institute of Neuroscience & Hospital
            (Agargaon) as well as Islami Bank Central Hospital (Kakrail). He has
            many successful operations under his belt.Our Neurosurgons provides
            a comprehensive Neurosurgical & Spinal service based at Neurosurgery
            Clinic at Australia. He also developed expertise in endoscopic
            anterior skull base surgery.
          </p>
        </div>
        <div>
          <img className="doctorPhoto" src={doctorPhotoOne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutTheDoctor;
