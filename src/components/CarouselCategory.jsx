import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { useNavigate, createSearchParams } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

const CarouselCategory = () => {

    const navigate = useNavigate();

    const searchCategory = (category) => { 
        navigate({
            pathname: 'search',
            search: `${
                createSearchParams({
                    category: `${category}`,
                    searchTerm: ``
                })
            }`
        });
    };

  return (
    <div className='bg-white mx-3 my-6'>
        <div className='text-2xl font-semibold p-3'>Shop by Category</div>
        <Swiper 
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
        >
            <SwiperSlide className='cursor-pointer' onClick={() => searchCategory('Deals')}>
                <img className='m-auto' src="../images/category_0.jpg" alt="category" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={() => searchCategory('Amazon')}>
                <img className='m-auto' src="../images/category_1.jpg" alt="category" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={() => searchCategory('Fashion')}>
                <img className='m-auto' src="../images/category_2.jpg" alt="category" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={() => searchCategory('Computers')}>
                <img className='m-auto' src="../images/category_3.jpg" alt="category" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={() => searchCategory('Home')}>
                <img className='m-auto' src="../images/category_4.jpg" alt="category" />
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer' onClick={() => searchCategory('Mobiles')}>
                <img className='m-auto' src="../images/category_5.jpg" alt="category" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default CarouselCategory; 