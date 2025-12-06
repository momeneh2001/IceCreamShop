"use client";
import React, { useRef, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import ProductCardVariantA from "../ProductCard/ProductCardVariantA";


const products = Array.from({ length: 18 }, (_, i) => i + 1);
const PRODUCTS_PER_PAGE = 6;

export default function ProductsSliderA() {
  const swiperRef = useRef<any>(null);
  const [activePage, setActivePage] = useState(0);

  const totalPages = useMemo(
    () => Math.ceil(products.length / PRODUCTS_PER_PAGE),
    []
  );


  const handleSlideChange = (swiper: any) => {
    const page = Math.floor(swiper.realIndex / PRODUCTS_PER_PAGE);
    setActivePage(page);
  };

  return (
    <div className="
    w-full mx-auto
    max-w-[360px]
    xs:max-w-[400px]
    sm:max-w-[538px]
    md:max-w-[535px]
    lg:max-w-[805px]
    xl:max-w-[1080px]
    xxl:max-w-[1090px]">
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        modules={[FreeMode]}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        // loop={true}
        slidesPerView={4}
        freeMode={true}
        className="w-full pb-16"
      >
        {/* slider */}
        {products.map((_, idx) => (
          <SwiperSlide key={idx}>
            {/* slider item */}
            <ProductCardVariantA />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination btn */}
      <div className="flex gap-3 mt-8 justify-center">
        {Array.from({ length: totalPages }).map((_, pageIdx) => (
          <button
            key={pageIdx}
            className={`w-3 h-3 rounded-full transition-all duration-300
                ${activePage === pageIdx ? "bg-hotPink scale-125" : "bg-gray-300 opacity-50"}`}
            onClick={() => {
              setActivePage(pageIdx);
              swiperRef.current?.slideTo(pageIdx * PRODUCTS_PER_PAGE);
            }}
          />
        ))}
      </div>
    </div>
  );
}
