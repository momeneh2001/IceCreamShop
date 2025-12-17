"use client"
import React from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdArrowDropdown, IoIosArrowForward } from "react-icons/io";
import ProductCardVariantA from '@/components/modules/ProductCard/ProductCardVariantA';
import ProductCardVariantB from '@/components/modules/ProductCard/ProductCardVariantB';
import ProductCardVariantC from '@/components/modules/ProductCard/ProductCardVariantC';

function ProductsPagination() {


    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[900px] px-4">
                {/* head */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-10 md:mb-16">
                    {/* left */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-hotPink w-11 h-11 flex items-center justify-center rounded-lg">
                                <CgMenuGridR className="w-6 h-6 text-white" />
                            </div>

                            <div className="bg-gray-200 w-11 h-11 flex items-center justify-center rounded-lg">
                                <TfiMenuAlt className="w-6 h-6 text-gray-400" />
                            </div>
                        </div>

                        <span className="text-gray-400 text-xs whitespace-nowrap">
                            Showing 1–18 of 24 results
                        </span>
                    </div>
                    {/* select */}
                    <div className="relative w-full sm:w-48 bg-gray-50 rounded-full">
                        <select className="block w-full bg-inherit appearance-none border rounded-full px-4 py-3 pr-10 text-sm">
                            <option value={6}>Default Sorting</option>
                            <option value={12}>Low to High</option>
                            <option value={24}>24 per page</option>
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <IoMdArrowDropdown className="text-gray-500 h-5 w-5" />
                        </div>
                    </div>
                </div>
                {/* products */}
                <div className="flex flex-wrap justify-center md:justify-between gap-3.5">
                    <ProductCardVariantA />
                    <ProductCardVariantA />
                    <ProductCardVariantA />
                    <ProductCardVariantA />
                    <ProductCardVariantA />
                    <ProductCardVariantA />
                </div>
                {/* pagination */}
                <div className="flex flex-wrap justify-center mt-9 gap-2">
                    <button className="px-4 py-2 rounded-full bg-pink-500 text-white">
                        1
                    </button>
                    <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700">
                        2
                    </button>
                    <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700">
                        3
                    </button>
                    <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700">
                        4
                    </button>
                    <button className="px-3 py-2 rounded-full bg-gray-200 text-gray-700">
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ProductsPagination
