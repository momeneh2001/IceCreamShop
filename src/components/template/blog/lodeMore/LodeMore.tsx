"use client"
import React, { useState } from 'react'
import BlogItem255 from '../blogItem/BlogItem255'
import BlogItem350 from '../blogItem/BlogItem350'

function LoadMore() {
    const [visibleCount, setVisibleCount] = useState(3)

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3)
    }

    return (
        <section className="bg-[#F5F5F5] w-full">
           <div className="max-w-[1110px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7 py-20 lg:py-36">

                {[...Array(visibleCount)].map((_, i) => (
                     <div key={i} className="flex justify-center">
                     <BlogItem350 />
                 </div>
                ))}

            </div>

            <div className="flex justify-center pb-10">
                <button
                    onClick={handleLoadMore}
                    className="px-6 py-3 bg-hotPink text-white rounded-full hover:bg-darkPurple transition"
                >
                    Load More
                </button>
            </div>
        </section>
    )
}

export default LoadMore