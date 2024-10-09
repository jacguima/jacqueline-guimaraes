import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import reviews from "../Opinioes/OpinioesMocks";
import OpinioesCards from "../Opinioes/OpinioesCards";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Carousel = () => {
  const settings = {

infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
pauseOnHover: true,   
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {reviews.map((review) => (
          <OpinioesCards key={review.id} {...review} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;