import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './banner.scss'; // Custom CSS for carousel

const BannerCarousel = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className="banner-carousel-container">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img src={banner.pcImageUrl} alt={banner.title} />
          </div>
        ))}
      </Slider>
    
      
    </div>
  );
};

export default BannerCarousel;
