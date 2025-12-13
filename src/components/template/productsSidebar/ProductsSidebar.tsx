import Image from 'next/image'
import React from 'react'
import { FaSearch } from "react-icons/fa";

function ProductsSidebar() {
    return (
        <div className="">
            {/* Search */}
            <div className=' border flex items-center justify-center rounded-full w-full h-11 mb-16'>
                <input type="text" placeholder='Search' className='bg-inherit outline-none' />
                <FaSearch  className='text-gray-500 cursor-pointer' />
            </div>
            {/* category */}
            <div className=' py-4'>
                <h3 className="font-semibold text-xl mb-2">Category</h3>
                <ul className="space-y-1">
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className=" w-5 h-5 rounded-full border border-gray-300 appearance-none  checked:bg-pink-500 checked:border-pink-500 relative z-10 transition-colors duration-300"
                            />
                            <span className="text-gray-500">Canned Ice Cream(3)</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"
                            />
                            <span className="text-gray-500">Frozen Yogurt(5)</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"
                            />
                            <span className="text-gray-500">Ice Cream Cakes(3)</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"
                            />
                            <span className="text-gray-500">Milkshakes(6)</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"
                            />
                            <span className="text-gray-500">Popsicles(4)</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-5 h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"
                            />
                            <span className="text-gray-500">Sundaes(5)</span>
                        </label>
                    </li>
                </ul>
            </div>
            {/* fiter */}
            <div className='border-b border-t border-gray-300 py-7'>
                <h3 className="font-semibold mb-2">Filter by Price</h3>
                <div className='flex items-center gap-3'>
                    <h6 className='text-gray-400'>Range:</h6>
                    <div className='flex items-center child:text-hotPink'>
                        <span>5$</span>
                        <span>-</span>
                        <span>50$</span>
                    </div>
                </div>
            </div>
            {/* Featured  */}
            <div className='py-8'>
                <h3 className="font-semibold mb-2">Featured Products</h3>
                <ul className="space-y-1">
                    <li className="flex items-center space-x-3  h-16">
                        <div className="w-16 h-16 bg-[#F7F2F7] flex items-center justify-center rounded-lg border">
                            <div className="relative w-[38px] h-[38px] flex-shrink-0">
                                <Image
                                    src="/images/productimgVA.png"
                                    alt="product"
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-2">
                            <h5 className="text-sm font-medium leading-tight w-3/4">Chocolate Brownie Sundae</h5>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="line-through">$9.80</span>
                                <span className='text-hotPink font-semibold'>$4.99</span>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-center space-x-3 h-16">
                        <div className="w-16 h-16 bg-[#FFEFD8] flex items-center justify-center rounded-lg border">
                            <div className="relative w-[38px] h-[38px] flex-shrink-0">
                                <Image
                                    src="/images/productimgVA.png"
                                    alt="product"
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-2">
                            <h5 className="text-sm font-medium leading-tight w-3/4">Chocolate Brownie Sundae</h5>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="line-through">$9.80</span>
                                <span className='text-hotPink font-semibold'>$4.99</span>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-center space-x-3 h-16">
                        <div className="w-16 h-16 bg-[#FFFAF4] flex items-center justify-center rounded-lg border">
                            <div className="relative w-[38px] h-[38px] flex-shrink-0">
                                <Image
                                    src="/images/productimgVA.png"
                                    alt="product"
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-2">
                            <h5 className="text-sm font-medium leading-tight w-3/4">Chocolate Brownie Sundae</h5>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="line-through">$9.80</span>
                                <span className='text-hotPink font-semibold'>$4.99</span>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-center space-x-3 h-16">
                        <div className="w-16 h-16 bg-[#FFEEEE] flex items-center justify-center rounded-lg border">
                            <div className="relative w-[38px] h-[38px] flex-shrink-0">
                                <Image
                                    src="/images/productimgVA.png"
                                    alt="product"
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-2 ">
                            <h5 className="text-sm font-medium leading-tight w-3/4">Chocolate Brownie Sundae</h5>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="line-through">$9.80</span>
                                <span className='text-hotPink font-semibold'>$4.99</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductsSidebar