import React from "react";
import "./reviews.css";
import Carousel from "./carousel/carousel";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="container-narrow" style={{ padding: 0 }}>
        <Carousel />
      </div>
    </div>
  );
};

export default Reviews;
