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
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1100px] ">
        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange} 
          modules={[FreeMode]}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1440: { slidesPerView: 4 },
          }}
          loop={true}
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
    </div>
  );
}
