import Image from 'next/image'
import React from 'react'
import { FaRegCircleXmark } from 'react-icons/fa6'


function CartItem() {
    return (
        <div className='border-b border-gray-300 flex items-center justify-between'>
            {/* img */}
            <div className='flex justify-center items-center gap-4 h-[154px]'>
                <div className="w-24 h-24 xs:w-28 xs:h-28 bg-[#F7F2F7] flex items-center justify-center rounded-lg border">
                    <div className="relative w-[60px] h-[60px] xs:w-[70px] xs:h-[70px] flex-shrink-0">
                        <Image
                            src="/images/productimgVA.png"
                            alt="product"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start justify-center gap-2">
                    <h3 className="text-lg font-semibold">Classic Vanilla</h3>

                    <div className="flex items-center gap-1 text-sm">
                        <span className="text-gray-400">Color:</span>
                        <span>White</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm">
                        <span className="text-gray-400">Size:</span>
                        <span>L</span>
                    </div>
                </div>

            </div>
            {/* info */}
            <div className="flex items-center justify-between w-[65%] gap-4 ">
                <span className="text-hotPink font-semibold">$4.99</span>
                <div className="flex items-center  border border-gray-400 rounded-full overflow-hidden w-[107px] h-[36px]">      
                    <button className="w-[32px] h-full flex items-center justify-center text-lg font-medium hover:bg-hotPink hover:text-white transition cursor-pointer border-r">
                        −
                    </button>
                    <input
                        type="text"
                        readOnly
                        value={1}
                        className="w-[43px] h-full text-center outline-none text-sm bg-inherit select-none pointer-events-none flex items-center justify-center"
                    />
                    <button className="w-[32px] h-full flex items-center justify-center text-lg font-medium hover:bg-hotPink hover:text-white transition cursor-pointer border-l">
                        +
                    </button>
                </div>
                <span className="font-semibold">$13.00</span>
                <FaRegCircleXmark className="w-9 h-9 text-red-600 cursor-pointer" />
            </div>
        </div>
    )
}

export default CartItem
