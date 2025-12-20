"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function GalleryC() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [navigationReady, setNavigationReady] = useState(false);

  const images = [
    "/images/productimgVC.png",
    "/images/productimgVC.png",
    "/images/productimgVC.png",
    "/images/productimgVC.png",
  ];

  useEffect(() => {
    // اجازه بده refs mount شوند
    setNavigationReady(true);
  }, []);

  return (
    <div className="w-[600px] h-[600px] relative flex items-center justify-center bg-[#F1FEFE] rounded-lg">
      {/* Previous arrow */}
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white  hover:bg-gray-200"
      >
        <IoIosArrowBack/>
      </button>

      {navigationReady && (
        <Swiper
          spaceBetween={10}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full h-full"
          modules={[Navigation, FreeMode]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="flex items-end justify-center w-full h-full">
                <Image
                  src={img}
                  alt={`slide-${index}`}
                  width={324  }
                  height={511}
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Next arrow */}
      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-200"
      >
        <IoIosArrowForward/>
      </button>
    </div>
  );
}

export default GalleryC;
