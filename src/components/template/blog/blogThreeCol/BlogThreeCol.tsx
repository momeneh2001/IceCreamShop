import React from 'react'
import BlogItem350 from '../blogItem/BlogItem350'

function BlogThreeCol() {
    return (
        <section className="bg-[#F5F5F5] w-full">
            <div className="max-w-[1110px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7 py-20 lg:py-36">

                {[...Array(9)].map((_, i) => (
                    <div key={i} className="flex justify-center">
                        <BlogItem350 />
                    </div>
                ))}

            </div>
        </section>
    )
}

export default BlogThreeCol
