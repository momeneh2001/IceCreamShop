"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function GalleryB() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const images = [
    "/images/productimgVB.png",
    "/images/productimgVB.png",
    "/images/productimgVB.png",
    "/images/productimgVB.png",
    "/images/productimgVB.png",
    "/images/productimgVB.png",
  ];

 

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[600px] h-[600px] relative">
        <Swiper
          spaceBetween={10}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`slide-${index}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[490px] h-[100px] relative flex items-center">
        <button
          ref={prevRef}
          className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center rounded-full  hover:bg-gray-200"
        >
          <IoIosArrowBack />
        </button>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="h-full w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="thumb relative w-[117px] h-[100px] flex items-center justify-center overflow-hidden rounded-lg">
                <Image src={img} alt={`thumb-${index}`} fill className="object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={nextRef}
          className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center rounded-full  hover:bg-gray-200"
        >
         <IoIosArrowForward  />
        </button>
      </div>
    </div>
  );
}

export default GalleryB;
