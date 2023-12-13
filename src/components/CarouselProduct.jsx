import React from 'react';
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const CarouselProduct = () => {
  return (
    <div className='bg-white m-3 p-4'>
        <div className='text-2xl font-semibold'>Best Sellers</div>
        <Swiper 
            slidesPerView={7}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
        >   
            {
                Array.from( { length:9 }, (_, i) =>
                <SwiperSlide key={i}>
                    <Link to={`/product/${i}`}>
                        <img className='h-[200px] pt-4 m-auto' src={`../images/product_${i}_small.jpg`} alt="product" />
                    </Link>
                </SwiperSlide>
                ) 
            }
        </Swiper>
    </div>
  )
}

export default CarouselProduct;