import React from 'react'
import BlogItemfull from '../blogItem/BlogItemfull'

function BlogOneCol() {
    return (

        <section className="bg-[#F5F5F5] w-full ">
            <div className="max-w-[1110px] mx-auto flex flex-col gap-7 py-36">
                <BlogItemfull />
                <BlogItemfull />
            </div>
        </section>
    )
}

export default BlogOneCol
