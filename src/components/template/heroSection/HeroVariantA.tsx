import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

function HeroVariantA() {
    let title = "Discover Sweet Delights!";
    const words = title.trim().split(" ");
    const mid = Math.floor(words.length / 2);
    return (
        <section className='bg-ice-gradient pt-20 pb-5 sm:pt-28 md:pt-32 lg:pt-36'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center md:justify-between lg:justify-center xxl:justify-end gap-10 md:gap-20'>
                    {/* texts */}
                    <div className='text-center md:text-left max-w-[640px]'>
                        <div className=' inline-flex items-center gap-4 mb-4 justify-center md:justify-start '>
                            <span className='w-10 xs:w-12 sm:w-16 border-2 border-darkPurple'></span>
                            <p className='text-xl xs:text-2xl'>Welcome to The</p>
                        </div>
                        {/* Headline */}
                        <h2 className="text-5xl capitalize xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[630px] flex flex-wrap gap-2 justify-center md:justify-start">
                            {words.map((word, i) => (
                                <span key={i} className={i === mid ? "text-hotPink" : ""}>
                                    {word}
                                </span>
                            ))}
                        </h2>
                        {/* <div className='text-5xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[630px] h-auto flex flex-wrap gap-2 justify-center md:justify-start'>
                            <h2>Discover</h2>
                            <h2 className='text-hotPink'>Sweet</h2>
                            <h2 className=''>Delights!</h2>
                        </div> */}
                        {/* Description */}
                        <p className='text-base xs:text-lg w-full sm:w-[450px] my-4 mx-auto md:mx-0'>Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.</p>
                        {/* Button */}
                        <Link href="/"
                            className="inline-flex items-center gap-2 py-2.5 px-5 bg-darkPurple 
                           rounded-full text-white text-sm xs:text-base shadow-md mt-2"
                        >
                            <span>Browse Our Classic Flavors</span><IoMdArrowRoundForward />
                        </Link>
                    </div>
                    {/* image */}
                    <div>
                        <div className="relative w-[220px] h-[240px]  xs:w-[270px] xs:h-[300px] sm:w-[330px] sm:h-[360px] md:w-[380px] md:h-[420px] lg:w-[430px] lg:h-[480px] xl:w-[500px] xl:h-[560px] xxl:w-[550px] xxl:h-[600px]">
                            <Image
                                src="/images/heroimage.png"
                                alt="Ice Tales Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* side image*/}
            <div
                className=" absolute w-32 h-52 top-10 left-0 xs:w-40 xs:h-72 xs:top-14 sm:w-48 sm:h-80 sm:top-16 md:w-48 md:h-80 md:top-20 lg:w-52 lg:h-96 lg:top-24 xl:w-60 xl:h-96 xl:top-28 xxl:w-60 xxl:h-96 xxl:top-20">
                <Image
                    src="/images/backice.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </section>
    )
}

export default HeroVariantA
