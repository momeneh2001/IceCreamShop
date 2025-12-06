"use client";
import React, { useRef, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { FaStar } from "react-icons/fa";
import Image from "next/image";



const products = Array.from({ length: 18 }, (_, i) => i + 1);
const PRODUCTS_PER_PAGE = 6;

function FeedbackSliderB() {
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
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                loop={true}
                slidesPerView={2}
                freeMode={true}
                className="w-full pb-16"
            >
                {/* slider */}
                {products.map((_, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="bg-gray-50 py-12 px-8 w-[350px] rounded-2xl border-b-2 border-b-hotPink">
                            <div className="relative w-11 h-7">
                                <Image
                                    src="/images/90.png"
                                    alt="Ice Tales Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <p className="my-5 line-clamp-4">Ruisuam est rui dolorem ipsum rui do sit
                                amet, consectetur, adipise velit seu non
                                numquam eiusm temora incidunt aut
                                labore siner...
                            </p>
                            <div className="flex gap-2 ">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/images/user-g.png"
                                        alt="Ice Tales Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                <div>
                                    <div className="inline-flex items-center justify-center">
                                        <FaStar className='text-amber-400' />
                                        <FaStar className='text-amber-400' />
                                        <FaStar className='text-amber-400' />
                                        <FaStar className='text-amber-400' />
                                        <FaStar className='text-amber-400' />
                                    </div>
                                    <h5 className="text-hotPink text-xl font-semibold">Peri James</h5>
                                    <p className="text-gray-400 text-xs">Happy Client</p>
                                </div>
                            </div>

                        </div>
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
    )
}

export default FeedbackSliderB
