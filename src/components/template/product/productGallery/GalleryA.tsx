"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function ProductGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

   
    const images = [
        "/images/productimgVA.png",
        "/images/productimgVA.png",
        "/images/productimgVA.png",
        "/images/productimgVA.png",
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
            <div className="hidden md:block w-[90px] h-[450px]">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    direction="vertical"
                    spaceBetween={8}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className="h-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="thumb w-[90px] h-[90px] bg-[#FDE2E4] rounded-lg flex items-center justify-center overflow-hidden border-2 border-transparent transition-all duration-300">
                                <Image
                                    src={img}
                                    alt={`thumb-${index}`}
                                    width={72}
                                    height={72}
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
           
            <div className="w-[480px] h-[600px] flex items-center justify-center bg-[#FDE2E4] rounded-lg">
                <Swiper
                    spaceBetween={10}
                    loop={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="w-full h-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="flex items-center justify-center w-full h-full">
                                <Image
                                    src={img}
                                    alt={`slide-${index}`}
                                    width={460}
                                    height={580}
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
