import React from "react";
//css
import "./Portfolio.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//images
import Sidebar from "../../assets/img/sidebar.png";
import Ecommerce from "../../assets/img/ecommerce.png";
import HOCImg from "../../assets/img/hoc.png";
import MusicApp from "../../assets/img/musicapp.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOCImg} alt="HOCImg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="MusicApp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
