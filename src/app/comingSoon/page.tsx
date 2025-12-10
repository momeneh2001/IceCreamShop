import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaSquareGithub,FaLinkedinIn ,FaUpwork  } from 'react-icons/fa6'


function ComingSoon() {
    return (
        <main className="bg-ice-gradient h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-xl">
                <div className="flex items-center justify-center mb-10">
                    <div className="relative w-8 h-9 sm:w-7 sm:h-9 md:w-9 md:h-11 lg:w-11 lg:h-14 xl:w-12 xl:h-14">
                        <Image
                            src="/images/logo.png"
                            alt="Ice Tales Logo"
                            fill
                            sizes="(max-width: 640px) 35px, (max-width: 768px) 51px, (max-width: 1024px) 59px, 75px"
                            className="object-contain"
                            priority
                        />
                    </div>

                    <h3 className="text-3xl font-bold">
                        <span className="text-hotPink">Icy</span>
                        <span className="text-darkPurple">Tales</span>
                    </h3>
                </div>
                <h1 className="text-5xl xs:text-6xl sm:text-7xl font-bold my-6">Coming Soon</h1>

                <p className="text-gray-500 text-sm xs:text-base mb-3 sm:text-lg leading-relaxed">
                    Be the first to know when our new site is live
                </p>
                <div className="w-full ">
                    <div className="bg-white w-full flex  items-center justify-between gap-3 sm:w-[380px] md:w-[420px] lg:w-[520px] h-12 sm:h-14 rounded-full pl-5 sm:pl-7 ">
                        <input
                            className="w-full h-full outline-none text-sm sm:text-base"
                            placeholder="Enter Your Email Address"
                            type="text"
                        />
                        <button
                            className=" w-1/2  sm:w-[120px] h-12 sm:h-14  bg-hotPink rounded-r-full text-white inline-flex items-center justify-center gap-2  text-sm sm:text-base">
                            <span>Submit</span>
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-9 gap-3'>
                    <Link href="/" className='w-11 h-11  flex items-center justify-center rounded-full child:text-hotPink border border-hotPink'>
                        <FaFacebookF />
                    </Link>
                    <Link href="/" className='w-11 h-11  flex items-center justify-center rounded-full child:text-hotPink border border-hotPink'>
                        <FaSquareGithub />
                    </Link>
                    <Link href="" className='w-11 h-11  flex items-center justify-center rounded-full child:text-hotPink border border-hotPink'>
                        <FaInstagram />
                    </Link>
                    <Link href="" className='w-11 h-11  flex items-center justify-center rounded-full child:text-hotPink border border-hotPink'>
                        <FaLinkedinIn  />
                    </Link>
                    <Link href="" className='w-11 h-11  flex items-center justify-center rounded-full child:text-hotPink border border-hotPink'>
                        <FaUpwork />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default ComingSoon
