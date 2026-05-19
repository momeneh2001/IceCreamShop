import React from 'react'
import BlogItem540 from '../blogItem/BlogItem540'

function BlogTwoCol() {
    return (

        <section className="bg-[#F5F5F5] w-full">
            <div className="max-w-[1110px] mx-auto flex flex-wrap gap-7 justify-center py-20 lg:py-36">

                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="w-full lg:w-[48%] flex justify-center"
                    >
                        <BlogItem540 />
                    </div>
                ))}

            </div>
        </section>
    )
}

export default BlogTwoCol
