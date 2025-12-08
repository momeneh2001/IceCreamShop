import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationDot, FaPhoneFlip, FaFacebookF, FaSquareGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className='relative overflow-hidden bg-darkPurple min-h-[380px] flex items-center justify-center text-white py-10'>
            <div className='container'>
                <div className=" grid  grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2  w-full max-w-[1100px] mx-auto">
                    {/* logo */}
                    <div>
                        <div className="flex items-center mt-4">
                            <div className="relative w-8 h-9 sm:w-7 sm:h-9 md:w-9 md:h-11 lg:w-11 lg:h-14 xl:w-12 xl:h-14">
                                <Image
                                    src="/images/logo2.png"
                                    alt="Ice Tales Logo"
                                    fill
                                    sizes="(max-width: 640px) 35px, (max-width: 768px) 51px, (max-width: 1024px) 59px, 75px"
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <h3 className="text-3xl font-bold">
                                <span className="text-hotPink">Icy</span>
                                <span className="text-white">Tales</span>
                            </h3>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h5 className='mb-3 font-semibold'>Navigation</h5>
                        <ul className="text-mloPurple grid grid-cols-2 gap-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hotPink"></span>
                                <Link href="/">Home</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hotPink"></span>
                                <Link href="/">Products</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hotPink"></span>
                                <Link href="/">About</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hotPink"></span>
                                <Link href="/">Blog</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hotPink"></span>
                                <Link href="/">Shop</Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hotPink"></span>
                                <Link href="/">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* contact */}
                    <div>
                        <div className='space-y-4'>
                            <div className='flex items-start gap-2'>
                                <div className='w-11 h-11 bg-purple-500/100 flex items-center justify-center rounded-full child:text-white'>
                                    <FaLocationDot />
                                </div>
                                <div>
                                    <h6>Address:</h6>
                                    <p className='w-52 text-mloPurple'>
                                        121 King Street Melbourne, 3000, Australia
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start gap-2'>
                                <div className='w-11 h-11 bg-purple-500/100 flex items-center justify-center rounded-full child:text-white'>
                                    <MdEmail />
                                </div>
                                <div>
                                    <h6>Email:</h6>
                                    <p className='w-52 text-[12px] text-mloPurple'>mohammadr.momeneh@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phone + social */}
                    <div className='space-y-4'>
                        <div className='flex items-start gap-2'>
                            <FaPhoneFlip className='w-8 h-8' />
                            <div>
                                <h6>+123456780123</h6>
                                <p className='w-52 text-mloPurple'>Got Questions? Call us 24/7</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Link href="/" className='w-11 h-11 bg-purple-500/100 flex items-center justify-center rounded-full child:text-white'>
                                <FaFacebookF />
                            </Link>
                            <Link href="/" className='w-11 h-11 bg-purple-500/100 flex items-center justify-center rounded-full child:text-white'>
                                <FaSquareGithub />
                            </Link>
                            <Link href="" className='w-11 h-11 bg-purple-500/100 flex items-center justify-center rounded-full child:text-white'>
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* image back */}
            <div
                className=" absolute w-32 h-52 top-10 left-0 xs:w-36 xs:h-72 xs:top-14 sm:w-44 sm:h-80 sm:top-16 md:w-44 md:h-80 md:top-20 lg:w-48 lg:h-96 lg:top-24 xl:w-56 xl:h-96 xl:top-28 xxl:w-56 xxl:h-96 xxl:top-20">
                <Image
                    src="/images/backice.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </footer>
    )
}

export default Footer
