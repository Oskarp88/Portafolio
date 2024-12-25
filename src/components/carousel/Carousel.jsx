import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    "assets/images/chess1.png",
    "assets/images/chess2.png",
    "assets/images/chess3.png",
    "assets/images/chess4.png",
    "assets/images/chess5.png",
    "assets/images/chess6.png",
  ];

  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Reproducción infinita
    speed: 500, // Velocidad de la transición
    slidesToShow: 1, // Número de diapositivas visibles
    slidesToScroll: 1, // Número de diapositivas para desplazar
    autoplay: true, // Activar reproducción automática
    autoplaySpeed: 3000, // Tiempo entre cada transición (ms)
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
