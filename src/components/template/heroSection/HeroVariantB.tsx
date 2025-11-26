import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

function HeroVariantB() {
    return (
        <section className='relative bg-bgpattern2 bg-center bg-cover bg-no-repeat pt-8 md:pt-11 lg:pt-0 h-[600px] lg:h-[600px] xxl:h-[700px] overflow-hidden'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center md:justify-between lg:justify-center xxl:justify-center '>
                    <div className='text-center md:text-left max-w-[700px] '>
                        <h2 className='text-white text-5xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl max-w-[700px] h-auto flex flex-wrap gap-2 justify-center md:justify-start'>
                            Vegan Ice Cream Delights
                        </h2>
                        {/* Description */}
                        <p className='text-white text-base xs:text-lg w-full sm:w-[450px] my-4 mx-auto md:mx-0'>Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.</p>
                        {/* Button */}
                        <Link href="/"
                            className="inline-flex items-center gap-2 py-2.5 px-5 bg-hotPink 
                   rounded-full text-white text-sm xs:text-base shadow-md mt-2"
                        >
                            <span>Browse Our Classic Flavors</span><IoMdArrowRoundForward />
                        </Link>
                    </div>
                    {/* hero images */}
                    <div className="z-10 relative w-[220px] h-[240px]  xs:w-[270px] xs:h-[300px] sm:w-[330px] sm:h-[360px] md:w-[380px] md:h-[420px] lg:w-[430px] lg:h-[480px] xl:w-[500px] xl:h-[560px] xxl:w-[550px] xxl:h-[600px]">
                        <Image
                            src="/images/VeganIceCream.png"
                            alt="hero image"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>
            {/* images */}
            <div
                className=" absolute w-16 h-32 top-1 xs:w-20 xs:h-36 xs:top-1.5 xs:-left-1 sm:w-24 sm:h-40 sm:top-2 sm:-left-2 md:w-28 md:h-44 md:top-2.5 md:-left-3 lg:w-36 lg:h-48 lg:-left-6 lg:top-3 xl:w-36 xl:h-52 xl:top-3.5 xxl:w-28 xxl:h-56 xxl:top-2 xxl:left-0"
            >
                <Image
                    src="/images/banner2-leftcircle.png"
                    alt="circle"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div
                className=" absolute left-16 -bottom-2 w-28 h-16 xs:left-20 xs:w-32 xs:h-20 sm:left-24 sm:w-40 sm:h-24 md:left-28 md:w-52 md:h-28 lg:left-48 lg:w-52 lg:h-28 xl:left-56 xl:w-56 xl:h-32 xxl:left-72 xxl:w-60 xxl:h-32 ">
                <Image
                    src="/images/banner2-bottomtriangle.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <div
                className=" absolute top-2 right-8 w-12 h-10 xs:top-2.5 xs:right-2 xs:w-10 xs:h-9 sm:top-28 sm:right-12 sm:w-16 sm:h-14 md:top-48 md:right-16 md:w-18 md:h-14 lg:top-4 lg:right-[350px] lg:w-20 lg:h-16 xl:top-4.5 xl:w-20 xl:right-[500px] xl:h-16 xxl:top-5 xxl:right-[700px] xxl:w-20 xxl:h-16 z-10"
            >
                <Image
                    src="/images/banner2-wave.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div
                className=" absolute right-4 bottom-12 w-24 h-10 xs:right-5 xs:bottom-16 xs:w-28 xs:h-12 sm:right-6 sm:bottom-20 sm:w-32 sm:h-14 md:right-8 md:bottom-24 md:w-36 md:h-14 lg:right-10 lg:bottom-32 lg:w-40 lg:h-14 xl:right-12 xl:bottom-20 xl:w-44 xl:h-14 xxl:right-[70px] xxl:bottom-52 xxl:w-36 xxl:h-14"
            >
                <Image
                    src="/images/banner2-doted.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

        </section>
    )
}

export default HeroVariantB
