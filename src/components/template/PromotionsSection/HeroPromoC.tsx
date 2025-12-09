import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
// It’s not finished yet; it will be completed later when there is more time.
function HeroPromoC() {
  return (
    <section className="bg-darkPurple flex flex-col lg:flex-row items-center justify-between h-auto relative">
      {/* Text */}
      <div className="text-center lg:text-left pt-20 lg:pt-10  w-full lg:w-1/2 lg:pl-16  mb-8 lg:mb-0 z-10">
        <h2 className="text-white text-5xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl max-w-[500px] mx-auto lg:mx-0 flex flex-wrap gap-2 justify-center lg:justify-start">
          Gelato Lovers’ Special!
        </h2>

        <p className="text-white text-base xs:text-lg w-full sm:w-[450px] my-8 mx-auto lg:mx-0">
          Buy Any Two Gelato Pints, Get One Free!
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-4 justify-center lg:justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-2.5 px-5 bg-hotPink rounded-full text-white text-sm xs:text-base shadow-md"
          >
            <button>Claim Offer</button>
            <IoMdArrowRoundForward />
          </Link>
        </div>
      </div>

      {/* img promo */}
      <div className="w-full lg:w-1/2  h-[400px] lg:h-[722px]  relative  overflow-hidden  border-t-[15px] border-hotPink rounded-t-full lg:rounded-none lg:rounded-s-full">
        <Image
          src="/images/promoC.jpg"
          alt="Category Image"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* img */}
      <div
        className=" absolute bottom-1 right-8 w-12 h-10 
        xs:bottom-[400px] xs:right-10 xs:w-10 xs:h-9 
        sm:bottom-[400px] sm:right-12 sm:w-12 sm:h-8 
        md:bottom-[400px] md:right-[100px] md:w-12 md:h-8 
        lg:bottom-24 lg:left-[400px] lg:w-16 lg:h-12 
        xl:bottom-52 xl:left-[500px] xl:w-16 xl:h-12 
        xxl:bottom-60 xxl:left-[670px] xxl:w-16 xxl:h-12 z-[5]">
        <Image
          src="/images/banner2-wave.png"
          alt="Ice Tales Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div
        className=" absolute bottom-1 left-8 w-12 h-10 
        xs:bottom-[400px] xs:left-2 xs:w-10 xs:h-9 
        sm:bottom-[550px] sm:left-12 sm:w-12 sm:h-8 
        md:bottom-[550px] md:left-8 md:w-12 md:h-8 
        lg:bottom-40 lg:left-8 lg:w-16 lg:h-12 
        xl:bottom-24 xl:left-16 xl:w-16 xl:h-12 
        xxl:bottom-32 xxl:left-[70px] xxl:w-16 xxl:h-12 z-[5]">
        <Image
          src="/images/XO.png"
          alt="Ice Tales Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div
        className=" absolute top-1 left-8 w-12 h-10 
        xs:top-5 xs:left-[200px] xs:w-10 xs:h-9 
        sm:top-10 sm:left-[350px] sm:w-12 sm:h-8 
        md:top-10 md:left-[400px] md:w-12 md:h-8 
        lg:top-40 lg:left-60 lg:w-16 lg:h-12 
        xl:top-24 xl:left-16 xl:w-16 xl:h-12 
        xxl:top-32 xxl:left-[70px] xxl:w-16 xxl:h-12 z-[5]">
        <Image
          src="/images/34.png"
          alt="Ice Tales Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

    </section>

  )
}

export default HeroPromoC