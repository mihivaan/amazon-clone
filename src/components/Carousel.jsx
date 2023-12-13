import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <div className='h-[600px] bg-amazonclone-background'>
        <Swiper
            loop={true} 
            spaceBetween={0}
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
                delay:5000
            }}
            className='h-[50%]'
        >
            <SwiperSlide>
                <img src="../images/carousel_1.jpg" alt="carousel-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/carousel_2.jpg" alt="carousel-img" />
            </SwiperSlide>
            <SwiperSlide className='bg-black'>
                <video controls muted>
                    <source src='../images/carousel_vid.mp4' type='video/mp4' />
                </video>
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/carousel_4.jpg" alt="carousel-img" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/carousel_5.jpg" alt="carousel-img" />
            </SwiperSlide>
        </Swiper>
        <div className='h-[50%] bg-gradient-to-b from-stone-900' />
    </div>
  )
}

export default Carousel;