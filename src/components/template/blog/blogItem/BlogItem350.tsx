import Image from 'next/image'
import React from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
import Link from 'next/link';


function BlogItem350() {
    return (
        <div className="w-full max-w-[350px] bg-white flex flex-col items-center justify-center rounded-2xl overflow-hidden">
            <div className="relative w-full h-[300px] ">
                <Image
                    src="/images/standard_post_img01.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="w-full p-5">
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-5 text-sm">
                    <div className="flex items-center gap-1">
                        <FaUser className="w-4 h-4 text-hotPink" />
                        <span className="text-gray-400">By : Admin</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <BsFillTagFill className="w-4 h-4 text-hotPink" />
                        <span className="text-gray-400">Virtual Assistant</span>
                    </div>
                </div>
                {/* Content */}
                <div className="my-6">
                    <h3 className="font-semibold text-xl leading-snug">
                        Why You Need Virtual Assistant for
                        Your Company
                    </h3>
                </div>
            </div>
            <div className='w-full flex justify-between p-5 border-t border-gray-500'>
                <div className="flex items-center gap-1">
                    <MdOutlineCalendarMonth className="w-4 h-4 text-hotPink" />
                    <span className="text-gray-400 text-sm">October 30, 2022</span>
                </div>
                <Link
                    href="/"
                    className="inline-flex items-center gap-1 py-2 px-4 bg-hotPink rounded-full text-white font-medium hover:underline"
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogItem350
