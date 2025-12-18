import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";
import { IoMdArrowRoundForward } from 'react-icons/io';
import { LiaBoxSolid } from 'react-icons/lia';


function Details() {
    const score = 4.5;
    const commentsCount = 32;
    const price = 129;
    const description = "This is a sample description of the product. It explains the features and qualities in a concise manner.";
    const colours = ["blue", "pink"];
    const sizes = ["L", "M", "S"];

    return (
        <div className='w-[450px]'>
            <div className=' flex-col flex gap-3 '>
                <div className='flex items-center gap-2'>
                    <div className='flex child:text-yellow-500'>
                        {new Array(Math.floor(score)).fill(0).map((_, index) => (
                            <FaStar key={`full-${index}`} />
                        ))}
                        {score % 1 !== 0 && <FaStarHalfAlt key="half" />}
                        {new Array(5 - Math.ceil(score)).fill(0).map((_, index) => (
                            <FaRegStar key={`empty-${index}`} />
                        ))}
                    </div>

                    <span className='text-xs font-bold'>(4.5/5)</span>

                </div>
                <h2 className='text-3xl font-semibold'>Classic Vanilla Ice Cream</h2>
                <span className='text-darkPurple font-semibold text-2xl'>$5.99</span>
                <p className='mb-6 text-gray-500 line-clamp-3'>Neque porro ruisquam est aui dolorem iesum ruia do sit amet
                    consectetur, adipisci velit, sed quia non num eius modi tempoa
                    incidunt ut labore et dolore magna.</p>
            </div>

            {/* Variants */}
            <div className='flex flex-col gap-3 items-start'>
                <span className='font-semibold'>Colours:</span>
                <div className='flex gap-2 child-hover:border-hotPink'>
                    <div className='w-7 h-7 border flex items-center justify-center rounded-full'>
                        <span className='bg-[#BE2A36] w-5 h-5 rounded-full inline-block'></span>
                    </div>
                    <div className='w-7 h-7 border flex items-center justify-center rounded-full'>
                        <span className='bg-[#E4CCAF] w-5 h-5 rounded-full inline-block'></span>
                    </div>
                    <div className='w-7 h-7 border flex items-center justify-center rounded-full'>
                        <span className='bg-[#BCEC9F] w-5 h-5 rounded-full inline-block'></span>
                    </div>
                    <div className='w-7 h-7 border flex items-center justify-center rounded-full'>
                        <span className='bg-[#9A5F2E] w-5 h-5 rounded-full inline-block'></span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start gap-4 mt-3'>
                <span className='font-semibold'>Size:</span>
                <div className=' flex gap-4 child-hover:border-hotPink child:transition-all'>
                    <div className='w-9 h-9 border inline-flex p-1 rounded-full items-center justify-center'>
                        <span>L</span>
                    </div>
                    <div className='w-9 h-9 border  inline-flex p-1 rounded-full items-center justify-center'>
                        <span>M</span>
                    </div>
                    <div className='w-9 h-9 border  inline-flex p-1 rounded-full items-center justify-center'>
                        <span>S</span>
                    </div>
                </div>
            </div>
            {/* Quantity & Wishlist */}
            <div className='flex gap-4 mt-8 border-t pt-5'>

                <div className="flex items-center border border-black rounded-full overflow-hidden h-11 w-32">
                    <button className="w-10 h-full flex items-center justify-center text-lg font-medium hover:bg-hotPink hover:text-white transition cursor-pointer border-r">
                        −
                    </button>
                    <input
                        type="text"
                        readOnly
                        value={1}
                        className="w-12 h-full text-center outline-none  text-sm bg-white select-none pointer-events-none flex items-center justify-center"
                    />
                    <button className="w-10 h-full flex items-center justify-center  text-lg font-medium hover:bg-hotPink hover:text-white transition cursor-pointer border-l">
                        +
                    </button>
                </div>
                {/* Add to Cart */}
                <button

                    className="hidden lg:inline-flex items-center  gap-2 py-2 px-5 bg-hotPink rounded-full text-white "
                >
                    <span>Add to Cart</span> <IoMdArrowRoundForward />
                </button>
            </div>
            <div className='text-gray-500 flex items-start gap-14 mt-9 border-b pb-5'>
                <button className='flex items-center justify-center gap-1'>
                    <HiOutlineHeart />
                    <span>Add to wishlist</span>
                </button>
                <button>Compare</button>
            </div>
            <div className='mt-2 flex flex-col gap-1'>
                <div className='flex items-center  child:text-gray-400 gap-1'>
                    <LiaBoxSolid className='w-4 h-4' />
                    <span className='text-sm'>Free Worldwide Shipping on All Orders Over $250</span>
                </div>
                <div className='flex items-center  child:text-gray-400 gap-1'>
                    <CiClock2 className='w-4 h-4' />
                    <span className='text-sm'>Delivers In: 4-7 Working Days Terms & Conditions</span>
                </div>
            </div>
        </div>
    )
}

export default Details
