import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

// IntroVariant types A and B are the same.
function IntroVariantA() {
    let imageA = '/images/Figure.png'
    let imageB = '/images/artImage.png'
    let title = "Relive the Sweet Memories of Classic Ice Creams";
    const words = title.split(" ");
    const lastTwoWordsIndex = words.length - 2;

    return (
        <section className='mt-28 relative overflow-hidden'>
            <div className='container '>
                <div className='flex flex-col md:flex-row items-center justify-center gap-7  md:gap-20'>
                    {/* image */}
                    <div className='border-b-8 border-hotPink md:border-none rounded-b-lg'>
                        <div className="relative w-[220px] h-[240px]  xs:w-[270px] xs:h-[300px] sm:w-[330px] sm:h-[360px] md:w-[300px] md:h-[240px] lg:w-[300px] lg:h-[350px] xl:w-[400px] xl:h-[460px] xxl:w-[450px] xxl:h-[500px]">
                            <Image
                                src={`${imageA}`}
                                alt="Ice Tales Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    {/* texts */}
                    <div className="text-center mb-10 md:text-left  lg:w-[450px] xl:w-[550px] mx-auto md:mx-0 ">
                        <h2 className="text-3xl xs:text-4xl sm:text-5xl xl:text-6xl 
                   max-w-[540px] h-auto flex flex-wrap gap-2 
                   justify-center md:justify-start leading-tight">

                            {words.map((word, i) => (
                                <span
                                    key={i}
                                    className={i >= lastTwoWordsIndex ? "text-hotPink" : ""}
                                >
                                    {word}
                                </span>
                            ))}
                        </h2>
                        <p className="text-base xs:text-lg w-full sm:w-[300px] 
                  my-4 mx-auto md:mx-0 leading-relaxed">
                            From rich chocolate fudge to creamy vanilla sundaes,
                            discover our menu of classic ice cream creations.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 py-2.5 px-6 bg-hotPink 
                   rounded-full text-white text-sm xs:text-base 
                   shadow-md mt-2 hover:opacity-90 transition-all"
                        >
                            <span>Explore Our Menu</span>
                            <IoMdArrowRoundForward />
                        </Link>
                    </div>

                </div>

            </div>
            {/* images */}
            {/* These images are taken out of the normal flow and 
            have been given a negative z-index so they stay
             underneath all the other elements. */}
            <div
                className=" absolute bottom-1 left-8 w-12 h-10 xs:bottom-2.5 xs:left-2 xs:w-10 xs:h-9 sm:bottom-28 sm:left-12 sm:w-12 sm:h-8 md:bottom-10 md:left-8 md:w-12 md:h-8 lg:bottom-4 lg:left-8 lg:w-16 lg:h-12 xl:bottom-4.5 xl:left-16 xl:w-16 xl:h-12 xxl:bottom-32 xxl:left-[70px] xxl:w-16 xxl:h-12 z-[-10]">
                <Image
                    src="/images/03.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div
                className=" absolute  top-2 left-8 w-12 h-10 xs:top-2.5 xs:left-8 xs:w-10 xs:h-9 sm:top-28 sm:left-10 sm:w-16 sm:h-14 md:top-10 md:left-[50px] md:w-12 md:h-8 lg:top-4 lg:left-[50px] lg:w-16 lg:h-12 xl:top-4.5 xl:left-[90px] xl:w-16 xl:h-12 xxl:top-5 xxl:left-[90px] xxl:w-20 xxl:h-16 z-[-10]"
            >
                <Image
                    src="/images/04.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div
                className=" absolute top-4 right-6 w-10 h-8 xs:top-5 xs:right-10 xs:w-10 xs:h-8 sm:top-20 sm:right-10 sm:w-12 sm:h-10 md:top-32 md:right-14 md:w-12 md:h-8 lg:top-4 lg:right-[50px] lg:w-12 lg:h-8 xl:top-4 xl:right-[90px] xl:w-12 xl:h-8 xxl:top-52 xxl:right-[90px] xxl:w-12 xxl:h-8 z-[-10]"
            >
                <Image
                    src="/images/05.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div
                className=" absolute -inset-0bottom-2 right-6 w-20 h-10 xs:-bottom-2 xs:right-4 xs:w-24 xs:h-12 sm:-bottom-2 sm:right-10 sm:w-28 sm:h-14 md:-bottom-2 md:right-9 md:w-32 md:h-16 lg:-bottom-2 lg:right-[60px] lg:w-36 lg:h-16 xl:-bottom-2 xl:right-[70px] xl:w-40 xl:h-16 xxl:-bottom-2 xxl:right-[70px] xxl:w-40 xxl:h-14 z-[-10]">
                <Image
                    src="/images/02.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>


        </section>
    )
}

export default IntroVariantA
