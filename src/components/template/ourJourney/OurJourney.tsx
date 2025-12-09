import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

function OurJourney() {
    return (
        <section className="relative py-20 lg:py-36">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-24">
                {/* IMAGE */}
                <div className=" relative overflow-hidden w-[260px] h-[260px] xs:w-[300px] xs:h-[300px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] xxl:w-[500px] xxl:h-[500px] rounded-full">
                    <Image
                        src="/images/105.png"
                        alt="Ice Tales Logo"
                        fill
                        className="object-contain object-center"
                        priority
                    />
                </div>
                {/* TEXT */}
                <div className="w-full lg:w-[500px] text-center lg:text-left px-4 lg:px-0">
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl mb-8 leading-tight">
                        Our <span className="text-hotPink">Journey</span> Began <br />
                        With a Simple Dream
                    </h2>
                    <p className="text-base sm:text-lg">
                        Our goal is to make the best ice cream using only the finest,
                        natural ingredients. From rich, creamy classics to adventurous
                        new creations, every flavor is meticulously crafted in-house to
                        ensure the highest quality and freshness.
                    </p>
                    <p className="text-base sm:text-lg my-8">
                        We take pride in offering a diverse range of options, including
                        dairy-free, vegan, and gluten-free choices, so everyone can find
                        their perfect scoop.
                    </p>
                    <Link
                        href="/contactUs"
                        className="hidden lg:inline-flex items-center gap-2 py-2 px-4 bg-hotPink rounded-full text-white shadow-hotPink"
                    >
                        <span>Read More</span> <IoMdArrowRoundForward />
                    </Link>
                </div>
            </div>
            {/* img */}
            <div
                className=" absolute w-32 h-52 top-10 right-0 
                xs:w-40 xs:h-72 xs:top-14 sm:w-48 sm:h-80 sm:top-16 
                md:w-48 md:h-80 md:top-20 lg:w-52 lg:h-96 lg:top-24 
                xl:w-60 xl:h-96 xl:top-28 xxl:w-60 xxl:h-96 xxl:top-60">
                <Image
                    src="/images/backiceRight.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </section>
    )
}

export default OurJourney
