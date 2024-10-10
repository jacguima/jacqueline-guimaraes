import React from "react";
import "./Opinioes.css";
import Carousel from "../Carousel";

const Opinioes = () => {
  return (
    <div className="principal-opinioes">
      <div className="bg-opinioes1">
        <div className="card-carousel">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Opinioes;
