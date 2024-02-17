import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BannerCarousel from './banner';
import './banner.scss';
const BannerSlider = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get('https://api.testvalley.kr/main-banner/all');
        setBanners(res.data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
  }, []);

  return <BannerCarousel banners={banners} />;
};

export default BannerSlider;
