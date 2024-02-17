import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './banner.scss'; // Custom CSS for carousel

const BannerCarousel = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
