import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

function HeroVariantC() {
    let title = "Artisan Gelato Shop";
    const words = title.trim().split(" ");
    const mid = Math.floor(words.length / 2);
    return (
        <section className='bg-bgpattern3 bg-center bg-cover bg-no-repeat pt-8 md:pt-11 lg:pt-0 h-[600px] lg:h-[600px] xxl:h-[700px] '>
            <div className='container'>

                <div className='flex flex-col lg:flex-row items-center pt-16'>

                    <div className=" relative flex items-center justify-center bg-white rounded-full  w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[550px] lg:h-[550px] overflow-hidden">

                        <div className="text-center px-6 sm:px-10 z-10">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl mb-4 w-full flex flex-wrap justify-center leading-tight">
                                {words.map((word, i) => (
                                    <span
                                        key={i}
                                        className={`${i === mid ? "text-hotPink" : ""} mr-2`}
                                    >
                                        {word}
                                    </span>
                                ))}
                            </h2>

                            <p className="text-sm xs:text-base sm:text-lg mb-4 hidden md:block">
                                Experience the rich, creamy flavors of our artisan gelato creations.
                            </p>

                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 py-2 px-3 md:py2.5 md:px-5 bg-darkPurple rounded-full text-white text-xs xs:text-sm sm:text-base shadow-md"
                            >
                                <span>Browse Our Classic Flavors</span>
                                <IoMdArrowRoundForward className='hidden sm:block' />
                            </Link>
                        </div>
                        <div className=" absolute z-0  -bottom-12 right-10 sm:-bottom-20 sm:right-20 md:-bottom-24 md:right-28 lg:-bottom-28 lg:right-32 w-32 h-52 sm:w-40 sm:h-64 md:w-44 md:h-72 lg:w-52 lg:h-80">
                            <Image
                                src="/images/backice.png"
                                alt="Ice Tales Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                    </div>

                </div>



            </div>
        </section>
    )
}

export default HeroVariantC
