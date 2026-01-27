import React from "react";
import "./SixSection.css";
import cartPhoto from "../../accets/sixSection/cartPhoto.jpg";

import galleryPhotoOne from "../../accets/sixSection/photoGallery/galleryPhotoOne.jpg";
import galleryPhotoTwo from "../../accets/sixSection/photoGallery/galleryPhotoTwo.jpg";
import galleryPhotoThree from "../../accets/sixSection/photoGallery/galleryPhotoThree.jpg";
import { Link } from "react-router-dom";

const SixSection = () => {
  return (
    <div className="six_section_parent_div">
      <h1>Photo Gallery</h1>

      <div className="six_section_grid_div">
        <div>
          <img src={galleryPhotoOne} alt="" />
        </div>
        <div>
          <img src={galleryPhotoTwo} alt="" />
        </div>
        <div>
          <img src={galleryPhotoThree} alt="" />
        </div>
      </div>
      <Link>
        <button className="six_section_btn">More News</button>
      </Link>
    </div>
  );
};

export default SixSection;
