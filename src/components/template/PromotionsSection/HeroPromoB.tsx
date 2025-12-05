import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

function HeroPromoB() {
    return (
        <section className="relative bg-hotPink flex items-center justify-center py-28">
            <div className="flex flex-col lg:flex-row items-center justify-center z-10 w-full max-w-full gap-8">

                {/* Left Image */}
                <div className="relative w-[220px] h-[240px] xs:w-[270px] xs:h-[300px] sm:w-[330px] sm:h-[360px] md:w-[380px] md:h-[420px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[450px] xxl:w-[400px] xxl:h-[450px]">
                    <Image
                        src="/images/promoB1.png"
                        alt="hero image"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Text */}
                <div className="text-center w-full md:w-[300px] lg:w-[300px] flex flex-col items-center">
                    <h2 className="text-white text-5xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-7xl flex flex-wrap gap-2 justify-center">
                        Limited Time Offer!
                    </h2>

                    <p className="text-white text-base xs:text-lg sm:w-[450px] my-8">
                        Get <span className="text-yellow-400">20% Off</span> All Vegan Ice Creams!
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 py-2.5 px-5 bg-darkPurple rounded-full text-white text-sm xs:text-base shadow-md"
                        >
                            <button>Get This Deal</button>
                            <IoMdArrowRoundForward />
                        </Link>

                        <p className="text-white text-center">Use code: VEGAN20 at checkout.</p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-[220px] h-[240px] xs:w-[270px] xs:h-[300px] sm:w-[330px] sm:h-[360px] md:w-[380px] md:h-[420px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[450px] xxl:w-[400px] xxl:h-[450px]">
                    <Image
                        src="/images/promoB2.png"
                        alt="hero image"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

            </div>

            <div
                className=" absolute 
                top-6 left-20 w-16 h-12 
                xs:top-5 xs:left-40 xs:w-20 xs:h-16
                sm:top-28 sm:left-12 sm:w-16 sm:h-12 
                md:top-10 md:left-60 md:w-20 md:h-16 
                lg:top-6 lg:left-[300px] lg:w-20 lg:h-16 
                xl:top-6 xl:left-[400px] xl:w-24 xl:h-20
                xxl:top-10 xxl:left-[470px] xxl:w-24 xxl:h-20 z-[5]">
                <Image
                    src="/images/60.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div
                className=" absolute bottom-10 right-20 w-16 h-12 
                xs:bottom-5 xs:right-20 xs:w-20 xs:h-16 
                sm:bottom-28 sm:right-20 sm:w-20 sm:h-16
                md:bottom-10 md:right-40 md:w-20 md:h-16 
                lg:bottom-4 lg:right-8 lg:w-20 lg:h-16 
                xl:bottom-4.5 xl:right-16 xl:w-24 xl:h-20 
                xxl:bottom-32 xxl:right-16 xxl:w-24 xxl:h-20 z-[5]">
                <Image
                    src="/images/61.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </section>


    )
}

export default HeroPromoB