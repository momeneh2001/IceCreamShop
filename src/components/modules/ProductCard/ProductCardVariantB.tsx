import Image from 'next/image'
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoMdArrowRoundForward } from 'react-icons/io';

function ProductCardVariantB() {
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* img */}
            <div>
                <div className="relative xxl:w-[350px] xxl:h-[289px]">
                    <Image
                        src="/images/productimgVB.png"
                        alt="Ice Tales Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
            {/* text */}
            <div className='flex flex-col items-center justify-center '>
                <h3 className='font-bold text-xl my-4'>Almond Joy Sundae</h3>
                <div className='flex items-center justify-center gap-1'>
                    <div className='flex child:text-amber-400'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                        <FaRegStar />
                    </div>
                    <span className='font-semibold '>(3.5/5)</span>
                </div>
                <span className='text-darkPurple font-bold text-xl my-4'>$6.49</span>
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

export default ProductCardVariantB
