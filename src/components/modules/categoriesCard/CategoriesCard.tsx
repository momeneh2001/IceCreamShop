import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface CategoriesCardProps{
    img:string,
}

function CategoriesCard({img}:CategoriesCardProps) {
    return (
        <div
            className=" relative  w-full  h-[260px]  xs:h-[300px] sm:h-[330px] md:h-[360px] lg:h-[400px] rounded-3xl  overflow-hidden  flex items-end  p-3">
            {/* Image */}
            <Image
                src={`${img}`}
                alt="Category Image"
                fill
                className="object-cover"
                priority
            />
            {/* Text overlay */}
            <div className=" w-full  bg-white  z-10  rounded-xl  p-3  flex  items-center  justify-between">
                <h3 className="text-xl xs:text-2xl font-bold">Sundaes</h3>
                <div className=" w-10 h-10  xs:w-11 xs:h-11  bg-hotPink  text-white  cursor-pointer  rounded-full  flex items-center justify-center">
                    <FaArrowRight />
                </div>
            </div>

        </div>
    )
}

export default CategoriesCard
