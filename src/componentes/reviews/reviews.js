import React from "react";
import "./reviews.css";
import Carousel from "./carousel/carousel";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="container-narrow">
        <div className="circle-bg-reviews"></div>
        <Carousel />
      </div>
    </div>
  );
};

export default Reviews;
