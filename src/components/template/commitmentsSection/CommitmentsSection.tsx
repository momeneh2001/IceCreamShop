import Image from 'next/image'
import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { FaBolt } from 'react-icons/fa6'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TfiPackage } from 'react-icons/tfi'

function CommitmentsSection() {
    return (
        <section className='bg-ice-gradient py-28'>
            <div className='flex flex-col gap-2 items-center justify-center mb-14'>
                <h2 className="text-3xl capitalize xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl m flex flex-wrap gap-2 justify-center md:justify-start">
                    <span>Our</span>
                    <span className='text-hotPink'>Commitments</span>
                    <span>to You</span>
                </h2>
                <p className='text-gray-500 '>Exceeding expectations with every promise we make.</p>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-center py-10 gap-10 lg:gap-16 px-4 xs:px-5 sm:px-6 lg:px-8">
               
                <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-7">
                   
                    <div className="bg-white w-64 h-72 flex flex-col items-center justify-center gap-5 rounded-2xl border border-gray-200">
                        <div className="bg-hotPink w-20 h-20 flex items-center justify-center rounded-full">
                            <FaShippingFast className="text-white w-9 h-9" />
                        </div>
                        <div className="text-center flex flex-col items-center gap-2">
                            <h4 className="text-lg font-semibold">Free Shipping</h4>
                            <p className="w-3/5 text-sm text-gray-600 leading-relaxed">
                                Enjoy the convenience of free shipping on all orders!
                            </p>
                        </div>
                    </div>

                    <div className="bg-white w-64 h-72 flex flex-col items-center justify-center gap-5 rounded-2xl border border-gray-200">
                        <div className="bg-darkPurple w-20 h-20 flex items-center justify-center rounded-full">
                            <TfiPackage className="text-white w-9 h-9" />
                        </div>
                        <div className="text-center flex flex-col items-center gap-2">
                            <h4 className="text-lg font-semibold">Unique Packaging</h4>
                            <p className="w-3/5 text-sm text-gray-600 leading-relaxed">
                                Experience our commitment to uniqueness with every order.
                            </p>
                        </div>
                    </div>
                </div>

              
                <div className="relative w-[220px] h-[240px] xs:w-[270px] xs:h-[300px] sm:w-[330px] sm:h-[360px] md:w-[380px] md:h-[420px] lg:w-[430px] lg:h-[480px] xl:w-[500px] xl:h-[560px] xxl:w-[550px] xxl:h-[600px]">
                    <Image
                        src="/images/Figure(2).png"
                        alt="Ice Tales Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-7">
                    
                    <div className="bg-white w-64 h-72 flex flex-col items-center justify-center gap-5 rounded-2xl border border-gray-200">
                        <div className="bg-darkPurple w-20 h-20 flex items-center justify-center rounded-full">
                            <RiMoneyDollarCircleLine className="text-white w-9 h-9" />
                        </div>
                        <div className="text-center flex flex-col items-center gap-2">
                            <h4 className="text-lg font-semibold">Money-Back Guarantee</h4>
                            <p className="w-3/5 text-sm text-gray-600 leading-relaxed">
                                Rest assured with our money-back guarantee at any time.
                            </p>
                        </div>
                    </div>

                
                    <div className="bg-white w-64 h-72 flex flex-col items-center justify-center gap-5 rounded-2xl border border-gray-200">
                        <div className="bg-hotPink w-20 h-20 flex items-center justify-center rounded-full">
                            <FaBolt className="text-white w-9 h-9" />
                        </div>
                        <div className="text-center flex flex-col items-center gap-2">
                            <h4 className="text-lg font-semibold">Fast Delivery</h4>
                            <p className="w-3/5 text-sm text-gray-600 leading-relaxed">
                                Experience swift and efficiently reliable delivery with us
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CommitmentsSection
