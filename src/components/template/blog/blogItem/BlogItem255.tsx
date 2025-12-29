import Image from 'next/image'
import React from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
import Link from 'next/link';


function BlogItem255() {
    return (
        <div className="w-full max-w-[255px] bg-white flex flex-col items-center justify-center rounded-2xl overflow-hidden">
            <div className="relative w-full h-[175px] ">
                <Image
                    src="/images/standard_post_img01.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="w-full p-2">
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-5 text-sm">
                    <div className="flex items-center gap-1">
                        <FaUser className="w-4 h-4 text-hotPink" />
                        <span className="text-gray-400 text-xs">By : Admin</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <BsFillTagFill className="w-4 h-4 text-hotPink" />
                        <span className="text-gray-400 text-xs">Virtual Assistant</span>
                    </div>
                </div>
                {/* Content */}
                <div className="my-4">
                    <p className=" leading-snug">
                        Curabitur pulvinar euismod ante, ac
                        sagittis ante posuere ac. Vivamus
                        luctus commodo dolor porta feugiat.
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-between p-2 border-t border-gray-500'>
                <div className="flex items-center gap-1">
                    <MdOutlineCalendarMonth className="w-4 h-4 text-hotPink" />
                    <span className="text-gray-400 text-xs">October 30, 2022</span>
                </div>
                <Link
                    href="/"
                    className="inline-flex items-center gap-1 py-2 px-3 bg-hotPink rounded-full text-white font-medium hover:underline"
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogItem255
