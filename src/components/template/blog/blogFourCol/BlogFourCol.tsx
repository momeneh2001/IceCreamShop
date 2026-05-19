import React from 'react'
import BlogItem255 from '../blogItem/BlogItem255'

function BlogFourCol() {
    return (
        <section className="bg-[#F5F5F5] w-full">
            <div className="max-w-[1110px] mx-auto flex flex-wrap gap-7 justify-center py-20 lg:py-36">

                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] flex justify-center"
                    >
                        <BlogItem255 />
                    </div>
                ))}

            </div>
        </section>
    )
}

export default BlogFourCol
