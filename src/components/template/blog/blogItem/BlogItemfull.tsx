import Image from 'next/image'
import React from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
import Link from 'next/link';

function BlogItemfull() {
    return (
        <div className="w-full bg-white flex flex-col rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="relative w-full h-[462px]">
                <Image
                    src="/images/105.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-center"
                    priority
                />
            </div>

            {/* Content */}
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

                {/* Title */}
                <div className="my-6">
                    <p className=" text-xl text-gray-500 leading-snug">
                    Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula ac
                    sagittis ante posuere ac pharetra laoreet commodo dolor porta.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="w-full flex justify-between items-center p-5 border-t border-gray-200">
                <div className="flex items-center gap-1">
                    <MdOutlineCalendarMonth className="w-4 h-4 text-hotPink" />
                    <span className="text-gray-400 text-sm">October 30, 2022</span>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-1 py-2 px-4 bg-hotPink rounded-full text-white font-medium transition hover:bg-pink-600"
                >
                    Read More
                </Link>
            </div>
        </div>

    )
}

export default BlogItemfull
