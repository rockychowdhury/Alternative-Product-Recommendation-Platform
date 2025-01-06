import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3.jsx';

export default function HeroSectionSlider() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slider2></Slider2>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider1></Slider1>
                </SwiperSlide>
                <SwiperSlide><Slider3></Slider3></SwiperSlide>
            </Swiper>
        </>
    );
}