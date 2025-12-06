import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

function NewsletterSection() {
    return (
        <section className='relative bg-[#F5F5F5] py-36 '>
            <div className="mx-auto w-full max-w-[900px] px-4 flex flex-col items-center justify-center">
                {/* title */}
                <div className="flex flex-col gap-4 items-center justify-center mb-14">
                    <h2 className="w-full max-w-[750px] mx-auto text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl capitalize leading-tight">
                        Sign up For Exclusive Deals
                        and Updates
                    </h2>

                    <p className="text-gray-500 text-center px-2">
                        Get 10% off your next order and stay updated with our latest offers.
                    </p>
                </div>
                {/* input */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
                    <div className="bg-white w-full sm:w-[380px] md:w-[420px] lg:w-[520px] h-14 sm:h-16 rounded-full px-5 sm:px-7 py-2">
                        <input
                            className="w-full h-full outline-none text-sm sm:text-base"
                            placeholder="Enter Your Email Address"
                            type="text"
                        />
                    </div>

                    <button
                        className=" w-full sm:w-auto  px-10 sm:px-12  h-14 sm:h-16  bg-hotPink rounded-full text-white inline-flex items-center justify-center gap-2  text-sm sm:text-base">
                        <span>Subscribe</span> <IoMdArrowRoundForward />
                    </button>
                </div>
                {/* Checkbox  */}
                <label className="flex items-center gap-2 text-sm cursor-pointer select-none mt-9">
                    <input
                        type="checkbox"
                        className=" appearance-none w-4 h-4 bg-gray-200  rounded-full cursor-pointer  checked:bg-pink-500 checked:border-pink-500  transition"/>
                    <span className="flex items-center gap-1">
                        I agree to the
                        <Link href="#" className="text-pink-500 underline hover:text-pink-600">
                            Privacy Policy
                        </Link>
                    </span>
                </label>
            </div>
            {/* image */}
            <div
                className=" absolute bottom-1 left-8 w-12 h-10 xs:bottom-2.5 xs:left-2 xs:w-10 xs:h-9 sm:bottom-28 sm:left-12 sm:w-12 sm:h-8 md:bottom-10 md:left-8 md:w-12 md:h-8 lg:bottom-4 lg:left-8 lg:w-16 lg:h-12 xl:bottom-4.5 xl:left-16 xl:w-16 xl:h-12 xxl:bottom-32 xxl:left-[70px] xxl:w-16 xxl:h-12 ">
                <Image
                    src="/images/03.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <div
                className=" absolute top-4 right-6 w-10 h-8 xs:top-5 xs:right-10 xs:w-10 xs:h-8 sm:top-20 sm:right-10 sm:w-12 sm:h-10 md:top-32 md:right-14 md:w-12 md:h-8 lg:top-4 lg:right-[50px] lg:w-12 lg:h-8 xl:top-4 xl:right-[90px] xl:w-12 xl:h-8 xxl:top-52 xxl:right-[90px] xxl:w-12 xxl:h-8 "
            >
                <Image
                    src="/images/05.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </section>

    )
}

export default NewsletterSection
