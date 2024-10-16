import React, { useRef } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import reviews from "../Opinioes/OpinioesMocks";
import OpinioesCards from "../Opinioes/OpinioesCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review) => (
            <OpinioesCards key={review.id} {...review} />
          ))}
        </Slider>
      </div>
      <div className="custom-arrows">
        <button className="prev-arrow" onClick={previous}>
          <FaArrowLeft />
        </button>
        <button className="next-arrow" onClick={next}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
