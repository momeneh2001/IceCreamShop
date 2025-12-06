"use client";
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';




function FeedbackSliderA() {
  return (
    <div className="
  w-full mx-auto
  max-w-[400px]
  xs:max-w-[400px]
  sm:max-w-[580px]
  md:max-w-[700px]
  lg:max-w-[800px]
  xl:max-w-[800px]
  xxl:max-w-[840px]
  py-5
  relative
">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper pb-10 overflow-hidden"
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-5 items-center justify-center h-60 px-4">
              <p className="text-center w-3/4">
                Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed beatae vitae dicta ripiscing elit, sed do euismod tempor incidunt. Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt aut labore.
              </p>
              <div className="flex flex-col items-center gap-2">
                <h5 className="text-hotPink font-extrabold">Kevin Andrew</h5>
                <p className="text-gray-500 font-light text-xs">Happy Customer</p>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`:global(.mySwiper .swiper-pagination) { bottom: 0 !important;  text-align: center;}`}</style>


      <div
        className="absolute inset-0 ">
        <Image
          src="/images/46.png"
          alt="Ice Tales Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>

  )
}

export default FeedbackSliderA
