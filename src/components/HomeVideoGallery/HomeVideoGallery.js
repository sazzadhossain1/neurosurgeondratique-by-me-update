import React, { useState } from "react";
import "./HomeVideoGallery.css";
// import homeVideoGalleryOne from "../../accets/homeVideoGalleryPhoto/homeVideoGalleryOne.jpg";
// import homeVideoGalleryTwo from "../../accets/homeVideoGalleryPhoto/homeVideoGalleryTwo.webp";
// import homeVideoGalleryThree from "../../accets/homeVideoGalleryPhoto/homeVideoGalleryThree.webp";
// import homeVideoGalleryFour from "../../accets/homeVideoGalleryPhoto/homeVideoGalleryFour.webp";

import { Link } from "react-router-dom";

const HomeVideoGallery = () => {
  const [setCurrentVideo] = useState(
    "https://www.youtube.com/embed/S2d-Mvwg8eE?si=8-qFS50vnxoYDlLp",
    `https://www.youtube.com/embed/{videoId}`,
  );

  // Function to change video
  const changeVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <div className="home_videoGallery_parent_div">
      {/* <h1 className="home_videoGallery_title">Video Gallery</h1> */}
      <h1 className="home_videoGallery_title">Cases</h1>

      <div className="home_video_gallery_grid_div">
        <div>
          <iframe
            className="video_iframe"
            // width="450"
            // height="315"
            src="https://www.youtube.com/embed/G5HIZfl4i5Y?si=HY322buc4752cL0x"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="video_iframe"
            // width="450"
            // height="315"
            src="https://www.youtube.com/embed/UWKZE4kCk9c?si=Twu8ycUILJZpYcdb"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="video_iframe"
            // width="450"
            // height="315"
            src="https://youtube.com/embed/6Y48B25uBHM?si=VDRsr8WW0pxwM9x9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="video_iframe"
            // width="450"
            // height="315"
            src="https://youtube.com/embed/O5Ve71ahiKc?si=PiQvBizc7KIyRHVF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="video_iframe"
            // width="450"
            // height="315"
            src="https://youtube.com/embed/Ig9kg2YJeKA?si=T_r6kJKvQSlVW9jy"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="video_iframe"
            // width="450"
            // height="315"
            src="https://www.youtube.com/embed/1vLtXFo6f4g?si=1Wcu1vaskLONTMx8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="video_iframe"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/ucN2vFhcwFU?si=Xi4nvDFZnxDvECX0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="video_iframe"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/FO2L8dKr9KM?si=plYeNjd-p3YWPFi1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Link to="https://www.youtube.com/@neurosurgeondratique" target="_blank">
        <button className="HomeVideoGallery_seeMoreBtn">See More</button>
      </Link>
    </div>
  );
};

export default HomeVideoGallery;
