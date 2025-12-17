import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'

function ProductCardVariantC() {
    return (
        <div className='flex flex-col items-center justify-center w-[255px] h-[470px]'>
            {/* img */}
            <div
                className=" bg-white rounded-full flex items-end justify-center w-[180px] h-[180px] xs:w-[200px] xs:h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-64 lg:h-64 max-w-64 max-h-64 ">
                <div
                    className=" relative w-[90px] h-[130px] xs:w-[100px] xs:h-[145px] sm:w-[110px] sm:h-[160px] md:w-[120px] md:h-[180px] lg:w-[130px] lg:h-[195px] xl:w-[140px] xl:h-[205px] xxl:w-[147px] xxl:h-[216px] ">
                    <Image
                        src="/images/productimgVC.png"
                        alt="Ice Tales Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
            {/* text */}
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-1 mt-7 mb-2'>
                    <FaStar className='text-amber-400' />
                    <span>4.9/5</span>
                </div>
                <h3 className='w-[163px] text-center text-xl font-semibold'>Strawberry Balsamic Gelato</h3>
                <span className='text-hotPink font-bold text-xl my-4'>$6.49</span>
                <button
                    className="inline-flex items-center gap-2 py-2.5 px-5 bg-hotPink 
                           rounded-full text-white text-sm xs:text-base shadow-md mt-2"
                >
                    <span>Add to Cart</span><IoMdArrowRoundForward />
                </button>
            </div>
        </div>
    )
}

export default ProductCardVariantC
