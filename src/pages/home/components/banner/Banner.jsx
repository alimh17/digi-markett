import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Scrollbar,
  EffectFade,
} from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./banner.css";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, Scrollbar, EffectFade]}
      slidesPerView={1}
      autoHeight={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation
      effect="fade"
      loop={true}
      autoplay={true}
      className="swiper"
    >
      <SwiperSlide>
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c6ee09abb779d4f2c29a8b899b1fa42ffacb2cbd_1643707692.jpg?x-oss-process=image/quality,q_95"
          alt=""
          className="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/297329eb3da32e82ac6a147dd1ac8d4dbf13f195_1643554562.jpg?x-oss-process=image/quality,q_95"
          alt=""
          className="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/a98a0aa9e9b6fd129b7a3299c30cb8aa24b5ee0e_1643781796.jpg?x-oss-process=image/quality,q_95"
          alt=""
          className="swiper-slide"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/12e134ba7addadb6452e8445c51691d6f75b0255_1643790481.jpg?x-oss-process=image/quality,q_95"
          alt=""
          className="swiper-slide"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
