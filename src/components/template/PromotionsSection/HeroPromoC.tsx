import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
// It’s not finished yet; it will be completed later when there is more time.
function HeroPromoC() {
  return (
    <section className="bg-darkPurple flex flex-col md:flex-col lg:flex-row items-center justify-between h-auto md:h-auto lg:h-[722px] mb-16  relative">
      {/* Text */}
      <div className="text-center md:text-center lg:text-left w-full lg:w-1/2 lg:pl-16 mb-8 lg:mb-0 z-10">
        <h2 className="text-white text-5xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl max-w-[500px] mx-auto lg:mx-0 flex flex-wrap gap-2 justify-center lg:justify-start">
          Gelato Lovers’ Special!
        </h2>

        <p className="text-white text-base xs:text-lg w-full sm:w-[450px] my-8 mx-auto lg:mx-0">
          Buy Any Two Gelato Pints, Get One Free!
        </p>

        <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 justify-center lg:justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-2.5 px-5 bg-hotPink rounded-full text-white text-sm xs:text-base shadow-md"
          >
            <button>Claim Offer</button>
            <IoMdArrowRoundForward />
          </Link>
        </div>
      </div>

      {/* Image Container MUST be relative for Image fill */}
      <div
        className="w-1/2 h-[722px] flex items-center justify-center"
        style={{ clipPath: "circle(75% at 100% 50%)" }}
      >
        <Image
          src="/images/promoC.png"
          alt="hero image"
          width={800}
          height={800}
          className="w-full h-full object-contain"
          priority
        />
      </div>

    </section>
  )
}

export default HeroPromoC
