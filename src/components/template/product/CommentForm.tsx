import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'

function CommentForm() {

    return (
        <div className="w-full">
            <p className="text-sm font-shabnamBold h-[30px]">Write a Review</p>

            <p className="text-sm">
                Your email address will not be published. Required fields are marked{" "}
                <span className="text-red-500">*</span>
            </p>

            {/* Rate */}
            <div className="flex gap-[14px] items-baseline mt-4">
                <p className="relative -top-[3px]">Your Rating:</p>
                <div className="flex gap-[2px] pt-[0.2rem] text-[1.1rem] text-gray-400 ltr">
                    <IoMdStar
                        className="cursor-pointer hover:text-orange-500"
                    />
                    <IoMdStar
                        className="cursor-pointer hover:text-orange-500"
                    />
                    <IoMdStar
                        className="cursor-pointer hover:text-orange-500"
                    />
                    <IoMdStar
                        className="cursor-pointer hover:text-orange-500"
                    />
                    <IoMdStar
                        className="cursor-pointer hover:text-orange-500"
                    />
                </div>
            </div>

            {/* Comment */}
            <div className="mt-8 grid gap-[10px] w-full">
                <label>
                    Your Review <span className="text-red-500">*</span>
                </label>
                <textarea

                    rows={8}
                    className="w-full resize-none rounded-md border border-[rgba(103,103,103,0.34)]
                 bg-white text-black p-4 font-shabnam"
                />
            </div>

            {/* Name & Email */}
            <div className="flex gap-[30px] mt-8">
                <div className="grid gap-[10px] w-full">
                    <label>
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input

                        type="text"
                        className="w-full rounded-md border border-[rgba(103,103,103,0.34)]
                   bg-white text-black p-3 font-shabnam"
                    />
                </div>

                <div className="grid gap-[10px] w-full">
                    <label>
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input

                        type="email"
                        className="w-full rounded-md border border-[rgba(103,103,103,0.34)]
                   bg-white text-black p-3 font-shabnam"
                    />
                </div>
            </div>

            {/* Button */}
            <button
                className="relative mt-8 px-6 py-3 font-shabnam text-white
             bg-hotPink hover:bg-darkPurple
             rounded-full transition overflow-hidden"
            >
                <span className="relative z-10">Submit</span>
            </button>

        </div>

    )
}

export default CommentForm
