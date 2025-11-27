import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    "assets/images/01.jpeg",
    "assets/images/02.jpeg",
    "assets/images/03.jpeg",
    "assets/images/19.jpeg",
    "assets/images/17.jpeg",
    "assets/images/16.jpeg",
    "assets/images/14.jpeg",
    "assets/images/12.jpeg",
    "assets/images/11.jpeg",
    "assets/images/10.jpeg",
    "assets/images/09.jpeg",
    "assets/images/08.jpeg",
    "assets/images/07.jpeg",
    "assets/images/06.jpeg",
    "assets/images/05.jpeg",
    "assets/images/20.jpeg",
    "assets/images/21.jpeg",
    "assets/images/22.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    arrows: false,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`ChessFive screenshot ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
