import React from "react";
import "./reviews.css";
import Carousel from "./carousel/carousel";

// TODO: 'schedule' button missing
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
