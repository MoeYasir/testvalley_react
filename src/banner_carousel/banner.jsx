import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.scss"; // Custom CSS for carousel
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const BannerCarousel = ({ banners }) => {
  return (
    <div className="banner-carousel-container">
      <div className="swiper-button image-swiper-button-next">
        <ArrowForwardIosIcon />
      </div>
      <div className="swiper-button image-swiper-button-prev">
        <ArrowBackIosNewIcon />
      </div>
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide>
            <img src={banner.pcImageUrl} alt={banner.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
