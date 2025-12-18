"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCardVariantB from "@/components/modules/ProductCard/ProductCardVariantB";
import ProductCardVariantC from "@/components/modules/ProductCard/ProductCardVariantC";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProductsSliderBProps{
    type:'B' | 'C',
}

function ProductsSliderB({type}:ProductsSliderBProps) {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (

        <div className="w-full flex items-center justify-center gap-9">
            <button ref={prevRef} className="mb-48 hover:bg-red-300 w-8 h-8 flex items-center justify-center rounded-full transition-all hover:text-red-600">
                <FaArrowLeft />
            </button>
            <div className="w-full max-w-[1100px] flex items-center justify-center">
                <Swiper
                    modules={[FreeMode, Navigation]}
                    spaceBetween={10}
                    slidesPerView={type === "B" ? 3 : 4} // B 3 : C 4
                    loop={true}
                    freeMode={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    className="w-full pb-16"
                >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <SwiperSlide key={i}>
                            {type === 'B' ? <ProductCardVariantB width="large" /> : <ProductCardVariantC />}
                        </SwiperSlide>
                    ))}
                </Swiper>
                

            </div>
            <button ref={nextRef} className="mb-48 hover:bg-red-300 w-8 h-8 flex items-center justify-center rounded-full transition-all hover:text-red-600">
                <FaArrowRight />
            </button>
        </div>
    );
}

export default ProductsSliderB;