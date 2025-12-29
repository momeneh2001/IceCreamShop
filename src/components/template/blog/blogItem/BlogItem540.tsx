import Image from 'next/image'
import React from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Link from 'next/link';

function BlogItem540() {
    return (
        <div className=" max-w-[540px] bg-white flex flex-col items-center justify-center rounded-2xl overflow-hidden">
            <div className="relative w-full h-[300px] ">
                <Image
                    src="/images/277.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="w-full p-8">

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-5 text-sm">
                    <div className="flex items-center gap-1">
                        <FaUser className="w-4 h-4 text-hotPink" />
                        <span className="text-gray-400">Posted by Admin</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <MdOutlineCalendarMonth className="w-4 h-4 text-hotPink" />
                        <span className="text-gray-400">October 30, 2022</span>
                    </div>
                </div>

                {/* Content */}
                <div className="my-6">
                    <h3 className="font-semibold text-2xl leading-snug">
                        How’s the Economy?
                    </h3>

                    <p className="mt-3 text-gray-500 line-clamp-2 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet.
                    </p>
                </div>

                {/* Read more */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-1 underline font-medium hover:underline"
                >
                    Read More 
                </Link>

            </div>
        </div>
    )
}

export default BlogItem540
