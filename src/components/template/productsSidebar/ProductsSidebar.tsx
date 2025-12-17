import Image from 'next/image'
import React from 'react'
import { FaSearch } from "react-icons/fa";

function ProductsSidebar() {
    return (
        <div className="w-full">
            {/* Search */}
            <div
                className=" border flex items-center justify-center rounded-full w-full max-w-[280px] h-10 xs:h-11 mb-8 xs:mb-12 md:mb-4 px-3 xs:px-4 ">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-inherit outline-none flex-1 text-sm xs:text-base w-2/3"
                />
                <FaSearch className="text-gray-500 cursor-pointer text-sm xs:text-base" />
            </div>
            {/* category */}
            <div className="py-3 xs:py-4">
                <h3 className="font-semibold text-lg xs:text-xl mb-2">
                    Category
                </h3>

                <ul className="space-y-1 xs:space-y-1.5">
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className=" w-4 h-4 xs:w-5 xs:h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative z-10 transition-colors duration-300"/>
                            <span className="text-gray-500 text-sm xs:text-base">
                                Canned Ice Cream(3)
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className=" w-4 h-4 xs:w-5 xs:h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"/>
                            <span className="text-gray-500 text-sm xs:text-base">
                                Frozen Yogurt(5)
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className=" w-4 h-4 xs:w-5 xs:h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"/>
                            <span className="text-gray-500 text-sm xs:text-base">
                                Ice Cream Cakes(3)
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className=" w-4 h-4 xs:w-5 xs:h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"/>
                            <span className="text-gray-500 text-sm xs:text-base">
                                Milkshakes(6)
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className=" w-4 h-4 xs:w-5 xs:h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"/>
                            <span className="text-gray-500 text-sm xs:text-base">
                                Popsicles(4)
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className=" w-4 h-4 xs:w-5 xs:h-5 rounded-full border border-gray-300 appearance-none checked:bg-pink-500 checked:border-pink-500 relative before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-50 before:opacity-0 checked:before:opacity-100 checked:before:scale-100 before:transition-all"/>
                            <span className="text-gray-500 text-sm xs:text-base">
                                Sundaes(5)
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
            {/* fiter */}
            <div
                className="border-b border-t border-gray-300 py-5 xs:py-6 md:py-7">
                <h3 className="font-semibold mb-2 text-base xs:text-lg">
                    Filter by Price
                </h3>

                <div className="flex items-center gap-2 xs:gap-3 text-sm xs:text-base">
                    <h6 className="text-gray-400">Range:</h6>

                    <div className="flex items-center child:text-hotPink">
                        <span>5$</span>
                        <span>-</span>
                        <span>50$</span>
                    </div>
                </div>
            </div>
            {/* Featured  */}
            <div className="py-6 xs:py-7 md:py-8">
                <h3 className="font-semibold mb-2 text-base xs:text-lg">
                    Featured Products
                </h3>

                {/* space-y-2 for type A  space-y-3 for type B */}
                <ul className="space-y-2 xs:space-y-3">
                    {/* type A */}
                    <li className="flex items-center space-x-3 h-14 xs:h-16">
                        <div className="w-14 h-14 xs:w-16 xs:h-16 bg-[#F7F2F7] flex items-center justify-center rounded-lg border">
                            <div className="relative w-[34px] h-[34px] xs:w-[38px] xs:h-[38px] flex-shrink-0">
                                <Image
                                    src="/images/productimgVA.png"
                                    alt="product"
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-1 xs:gap-2">
                            <h5 className="text-xs xs:text-sm font-medium leading-tight w-3/4">
                                Chocolate Brownie Sundae
                            </h5>
                            <div className="flex items-center gap-2 text-[11px] xs:text-xs text-gray-500">
                                <span className="line-through">$9.80</span>
                                <span className="text-hotPink font-semibold">$4.99</span>
                            </div>
                        </div>
                    </li>

                    {/* type B */}
                    <li className="flex items-center space-x-3 h-14 xs:h-16">
                        <div className="w-14 h-14 xs:w-16 xs:h-16 flex items-center justify-center">
                            <div className="relative w-14 h-14 xs:w-16 xs:h-16 flex-shrink-0">
                                <Image
                                    src="/images/productimgVB.png"
                                    alt="product"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-1 xs:gap-2">
                            <h5 className="text-xs xs:text-sm font-medium leading-tight max-w-3/4">
                                Almond Joe
                            </h5>
                            <div className="flex items-center gap-2 text-[11px] xs:text-xs text-gray-500">
                                <span className="line-through">$9.80</span>
                                <span className="text-hotPink font-semibold">$4.99</span>
                            </div>
                        </div>
                    </li>

                    {/* type C */}
                    <li className="flex items-center space-x-3 h-14 xs:h-16">
                        <div className="w-14 h-14 xs:w-16 xs:h-16 bg-[#F1FEFE] flex items-end justify-center rounded-full">
                            <div className="relative w-[32px] h-[46px] xs:w-[35px] xs:h-[51px] flex-shrink-0">
                                <Image
                                    src="/images/productimgVC.png"
                                    alt="product"
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-1 xs:gap-2">
                            <h5 className="text-xs xs:text-sm font-medium leading-tight w-3/4">
                                Strawberry Balsamic Gelato
                            </h5>
                            <div className="flex items-center gap-2 text-[11px] xs:text-xs text-gray-500">
                                <span className="line-through">$9.80</span>
                                <span className="text-hotPink font-semibold">$4.99</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductsSidebar