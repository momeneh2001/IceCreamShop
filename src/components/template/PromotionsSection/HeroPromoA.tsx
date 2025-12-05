import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

function HeroPromoA() {
    return (
        <section className="relative bg-darkPurple h-[716px] flex items-center justify-center px-4">
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center z-10 w-full max-w-[1000px] gap-8">

                {/* Text */}
                <div className="text-center md:text-center lg:text-left w-full lg:w-1/2">
                    <h2 className="text-white text-5xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[500px] mx-auto lg:mx-0 flex flex-wrap gap-2 justify-center lg:justify-start">
                        Summer Special!
                    </h2>

                    <p className="text-white text-base xs:text-lg w-full sm:w-[450px] my-8 mx-auto lg:mx-0">
                        Buy One Sundae, Get One 50% Off!
                    </p>

                    <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 justify-center lg:justify-start">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 py-2.5 px-5 bg-hotPink rounded-full text-white text-sm xs:text-base shadow-md"
                        >
                            <button>Get This Deal</button>
                            <IoMdArrowRoundForward />
                        </Link>

                        <p className="text-white text-center lg:text-left">Use code: SUMMER50 at checkout.</p>
                    </div>
                </div>

                {/* Image */}
                <div className="relative w-[220px] h-[240px] xs:w-[270px] xs:h-[300px] sm:w-[330px] sm:h-[360px] md:w-[380px] md:h-[420px] lg:w-[430px] lg:h-[480px] xl:w-[500px] xl:h-[560px] xxl:w-[500px] xxl:h-[550px]">
                    <Image
                        src="/images/promoA.png"
                        alt="hero image"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

            </div>

            {/* Background shape */}
            <div
                className="bg-hotPink w-1/2 h-full absolute right-0 top-0 bottom-0"
                style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
            ></div>
            <div
                className=" absolute bottom-1 left-8 w-12 h-10 xs:bottom-2.5 xs:left-2 xs:w-10 xs:h-9 sm:bottom-28 sm:left-12 sm:w-12 sm:h-8 md:bottom-10 md:left-8 md:w-12 md:h-8 lg:bottom-4 lg:left-8 lg:w-16 lg:h-12 xl:bottom-4.5 xl:left-16 xl:w-16 xl:h-12 xxl:bottom-32 xxl:left-[70px] xxl:w-16 xxl:h-12 z-[5]">
                <Image
                    src="/images/35.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div
                className=" absolute top-1 left-8 w-12 h-10 xs:top-2.5 xs:left-2 xs:w-10 xs:h-9 sm:top-28 sm:left-12 sm:w-12 sm:h-8 md:top-10 md:left-8 md:w-12 md:h-8 lg:top-4 lg:left-8 lg:w-16 lg:h-12 xl:top-4.5 xl:left-16 xl:w-16 xl:h-12 xxl:top-32 xxl:left-[70px] xxl:w-16 xxl:h-12 z-[5]">
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

export default HeroPromoA
