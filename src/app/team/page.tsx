import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import OurTeam from '@/components/modules/ourTeam/OurTeam'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaSquareGithub, FaTelegram } from 'react-icons/fa6'

function team() {
    return (
        <>
            <Header />
            <main>
                <PageHeading title="Our Team" items={[{ label: "Home", href: "/" }, { label: "Team" },]} />
                {/* This section is to be updated in the future. */}
                <section className=' py-36'>
                    <div className='flex flex-col gap-2 items-center justify-center mb-14'>
                        <h2 className="text-3xl capitalize xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl m flex flex-wrap gap-2 justify-center md:justify-start">
                            Our <span className="text-hotPink">Team</span> Members
                        </h2>
                        <p className='text-gray-500'>What makes us special through our impressive statistics.</p>
                    </div>
                    {/* update later slider */}
                    <div className='w-[1100px] mx-auto flex items-center flex-wrap  justify-center gap-10'>
                        <div className="flex flex-col items-center justify-center w-[255px] h-[470px] xs:w-[220px] xs:h-[420px] sm:w-[240px] sm:h-[450px] md:w-[255px] md:h-[470px]">
                            <div className="rounded-full w-56 h-56 xs:w-48 xs:h-48 sm:w-52 sm:h-52 flex items-end justify-center overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image src="/images/110.png" alt="Ice Tales Logo" fill className="object-contain" priority />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center mt-4">
                                <h3 className="text-xl font-semibold">Mohammad Reza Momeneh</h3>
                                <span className="text-gray-400 mt-1 mb-2">Front End</span>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaTelegram className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaSquareGithub className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaInstagram className="w-5 h-5" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[255px] h-[470px] xs:w-[220px] xs:h-[420px] sm:w-[240px] sm:h-[450px] md:w-[255px] md:h-[470px]">
                            <div className="rounded-full w-56 h-56 xs:w-48 xs:h-48 sm:w-52 sm:h-52 flex items-end justify-center overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image src="/images/110.png" alt="Ice Tales Logo" fill className="object-contain" priority />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center mt-4">
                                <h3 className="text-xl font-semibold">Mohammad Reza Momeneh</h3>
                                <span className="text-gray-400 mt-1 mb-2">Front End</span>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaTelegram className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaSquareGithub className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaInstagram className="w-5 h-5" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[255px] h-[470px] xs:w-[220px] xs:h-[420px] sm:w-[240px] sm:h-[450px] md:w-[255px] md:h-[470px]">
                            <div className="rounded-full w-56 h-56 xs:w-48 xs:h-48 sm:w-52 sm:h-52 flex items-end justify-center overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image src="/images/110.png" alt="Ice Tales Logo" fill className="object-contain" priority />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center mt-4">
                                <h3 className="text-xl font-semibold">Mohammad Reza Momeneh</h3>
                                <span className="text-gray-400 mt-1 mb-2">Front End</span>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaTelegram className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaSquareGithub className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaInstagram className="w-5 h-5" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[255px] h-[470px] xs:w-[220px] xs:h-[420px] sm:w-[240px] sm:h-[450px] md:w-[255px] md:h-[470px]">
                            <div className="rounded-full w-56 h-56 xs:w-48 xs:h-48 sm:w-52 sm:h-52 flex items-end justify-center overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image src="/images/110.png" alt="Ice Tales Logo" fill className="object-contain" priority />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center mt-4">
                                <h3 className="text-xl font-semibold">Mohammad Reza Momeneh</h3>
                                <span className="text-gray-400 mt-1 mb-2">Front End</span>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaTelegram className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaSquareGithub className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaInstagram className="w-5 h-5" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[255px] h-[470px] xs:w-[220px] xs:h-[420px] sm:w-[240px] sm:h-[450px] md:w-[255px] md:h-[470px]">
                            <div className="rounded-full w-56 h-56 xs:w-48 xs:h-48 sm:w-52 sm:h-52 flex items-end justify-center overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image src="/images/110.png" alt="Ice Tales Logo" fill className="object-contain" priority />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center mt-4">
                                <h3 className="text-xl font-semibold">Mohammad Reza Momeneh</h3>
                                <span className="text-gray-400 mt-1 mb-2">Front End</span>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaTelegram className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaSquareGithub className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaInstagram className="w-5 h-5" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[255px] h-[470px] xs:w-[220px] xs:h-[420px] sm:w-[240px] sm:h-[450px] md:w-[255px] md:h-[470px]">
                            <div className="rounded-full w-56 h-56 xs:w-48 xs:h-48 sm:w-52 sm:h-52 flex items-end justify-center overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image src="/images/110.png" alt="Ice Tales Logo" fill className="object-contain" priority />
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center mt-4">
                                <h3 className="text-xl font-semibold">Mohammad Reza Momeneh</h3>
                                <span className="text-gray-400 mt-1 mb-2">Front End</span>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaTelegram className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaSquareGithub className="w-5 h-5" /></Link>
                                    <Link href="/" className="w-11 h-11 bg-hotPink rounded-full flex items-center justify-center text-white shadow-md"><FaInstagram className="w-5 h-5" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default team
