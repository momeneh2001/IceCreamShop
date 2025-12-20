import Image from 'next/image'
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6'

function CommentItem() {
    return (
        <section className="flex items-center gap-[25px] mt-4 pb-[25px] border-b border-black/20 font-shabnam">
            <Image
                src="/images/user-g.png"
                alt="User avatar"
                width={60}
                height={60}
                className="rounded-full"
            />
            <div className="w-full">
                <div className="flex items-baseline justify-between">
                    {/* User Info */}
                    <div className="flex items-baseline gap-[5px]">
                        <strong>John Doe</strong>
                        <p className="text-sm text-gray-500">
                            August 12, 2024
                        </p>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-1 text-orange-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                    </div>
                </div>

                {/* Comment body */}
                <p className="mt-[10px] mb-[2px]">
                    This coffee tastes amazing! The aroma is rich and the flavor is perfectly balanced.
                    I would definitely buy it again.
                </p>
            </div>
        </section>

    )
}

export default CommentItem
