import Image from 'next/image'
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { LiaShoppingCartSolid } from "react-icons/lia";

function ProductCardVariantA() {
    return (
        <div className='p-3 bg-white rounded-2xl h-[420px] w-[257px]'>
            {/* image */}
            <div className='relative bg-[#F7F2F7] w-[233px] h-[244px] flex items-center justify-center rounded-lg'>
                <div className="relative xxl:w-[180px] xxl:h-[167px]">
                    <Image
                        src="/images/productimgVA.png"
                        alt="Ice Tales Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                {/*   TODO: The wishlist functionality should be added here.  */}
                <div className="pt-[1px] pl-[1px] group bg-white w-10 h-10 flex items-center justify-center rounded-full absolute top-3 left-3 transition-all duration-200 hover:bg-red-100 hover:scale-110 hover:shadow-md">
                    <HiOutlineHeart className=" w-5 h-5 transition-all duration-200 group-hover:text-red-500" />
                </div>
            </div>
            {/* info */}
            <div className='flex flex-col w-[233px] p-2'>
                <div className='flex items-start justify-between '>
                    <h3 className='w-36 font-bold'>Chocolate Brownie Sundae</h3>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-amber-400' />
                        <span>4.9/5</span>
                    </div>
                </div>
                <p className="h-12 overflow-hidden line-clamp-2 text-gray-500">
                    Rich chocolate ice cream with chunks of brownie.
                </p>
                <div className='flex items-center justify-between'>
                    <span className='text-hotPink font-bold'>$5.49</span>
                    <div className=" group w-10 h-10 bg-darkPurple flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:bg-purple-700  hover:shadow-md">
                        <LiaShoppingCartSolid
                            className="w-7 h-7 text-white transition-all duration-200 group-hover:text-gray-100"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCardVariantA
