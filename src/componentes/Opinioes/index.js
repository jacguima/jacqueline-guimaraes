import React from "react";
import "./Opinioes.css";
import Carousel from "../Carousel";

const Opinioes = () => {
  return (
    <div className="reviews-container">
      <div className="container-narrow">
        <div className="circle-bg-reviews"></div>
        <Carousel />
      </div>
    </div>
  );
};

export default Opinioes;
