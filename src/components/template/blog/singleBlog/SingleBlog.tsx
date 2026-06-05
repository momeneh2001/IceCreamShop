import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaSquareGithub, FaUser } from 'react-icons/fa6'
import { IoMdStar } from 'react-icons/io'
import { MdOutlineCalendarMonth } from 'react-icons/md'

function SingleBlog() {
    return (
        <section className='bg-[#F5F5F5]'>
            <div className='container py-36'>
                <div className="grid grid-cols-12 gap-4">

                    {/* blog body */}
                    <div className="col-span-12 lg:col-span-8 p-3 bg-white rounded-3xl shadow-xl">

                        <article>
                            {/* Cover Image */}
                            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] mb-6">
                                <Image
                                    src="/images/105.png"
                                    alt="Blog cover"
                                    fill
                                    className="object-cover rounded-3xl"
                                    priority
                                />
                            </div>

                            {/* Title + Meta */}
                            <div className="space-y-4">
                                <h1 className="text-2xl sm:text-3xl font-semibold leading-snug">
                                    Why You Need Virtual Assistant for Your Company
                                </h1>

                                <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <FaUser className="text-hotPink w-4 h-4" />
                                        <span>By Admin</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MdOutlineCalendarMonth className="text-hotPink w-4 h-4" />
                                        <span>October 30, 2022</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-6 space-y-6 text-base sm:text-lg text-gray-500 leading-relaxed">

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                                </p>

                                {/* Quote Box */}
                                <blockquote className="bg-hotPink text-white rounded-3xl p-6 sm:p-8 flex flex-col gap-6">

                                    <div className="w-10 h-8 relative">
                                        <Image
                                            src="/images/FigureSingleblog.png"
                                            alt="quote"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <p className="text-lg sm:text-xl font-semibold">
                                        “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...”
                                    </p>
                                </blockquote>

                                <p>
                                    Excepteur sint occaecat cupidatat non proident...
                                </p>

                                {/* Second Image */}
                                <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[314px]">
                                    <Image
                                        src="/images/singleblog-image2.png"
                                        alt="blog image"
                                        fill
                                        className="object-cover rounded-3xl"
                                    />
                                </div>

                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas...
                                </p>
                            </div>
                        </article>

                        
                        <div className="mt-10 flex flex-col lg:flex-row justify-between gap-8">

                            {/* Tags */}
                            <div className="space-y-4">
                                <h2 className="text-lg sm:text-xl font-semibold">Related Tags</h2>

                                <div className="flex flex-wrap gap-3">
                                    {["Assistant", "Advice", "Virtual"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-white font-semibold bg-hotPink py-2 px-4 rounded-full text-sm sm:text-base"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Social */}
                            <div className="space-y-4 lg:text-right">
                                <h2 className="text-lg sm:text-xl font-semibold">Social Share</h2>

                                <div className="flex gap-3 lg:justify-end">
                                    <Link href="/" className="w-10 sm:w-11 h-10 sm:h-11 bg-hotPink flex items-center justify-center rounded-full text-white">
                                        <FaFacebookF />
                                    </Link>

                                    <Link href="/" className="w-10 sm:w-11 h-10 sm:h-11 bg-hotPink flex items-center justify-center rounded-full text-white">
                                        <FaSquareGithub />
                                    </Link>

                                    <Link href="/" className="w-10 sm:w-11 h-10 sm:h-11 bg-hotPink flex items-center justify-center rounded-full text-white">
                                        <FaInstagram />
                                    </Link>

                                    <Link href="/" className="w-10 sm:w-11 h-10 sm:h-11 bg-hotPink flex items-center justify-center rounded-full text-white">
                                        <FaInstagram />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-hotPink text-white rounded-3xl p-6 sm:p-8 pt-20 flex flex-col gap-6 my-20 text-center">
                            <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-32 h-32 bg-slate-400 rounded-full">
                            </div>

                            <h3 className="text-2xl font-bold pt-14">Billy wallson</h3>
                            <p>Senior Director</p>

                            <p className="text-lg sm:text-xl font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut ali,
                            </p>
                        </div>

                        <div className='mb-10 border-b-2  '>
                            <h3 className="inline-block text-3xl font-bold mb-8 border-b-2  pb-2">
                                2 Comments
                            </h3>
                            <div className='mb-8'>
                                <div className="flex gap-6">
                                    <div className="w-32 h-32 bg-slate-400 rounded-full shrink-0"></div>

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-xl font-bold">
                                                Roseanne Williams
                                            </h4>

                                            <button className="text-white font-semibold bg-hotPink py-2 px-4 rounded-full">
                                                Reply
                                            </button>
                                        </div>

                                        <p className="text-gray-500 mb-2">
                                            Dec 29, 2022
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-8'>
                                <div className="flex gap-6">
                                    <div className="w-32 h-32 bg-slate-400 rounded-full shrink-0"></div>

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-xl font-bold">
                                                Roseanne Williams
                                            </h4>

                                            <button className="text-white font-semibold bg-hotPink py-2 px-4 rounded-full">
                                                Reply
                                            </button>
                                        </div>

                                        <p className="text-gray-500 mb-2">
                                            Dec 29, 2022
                                        </p>

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mb-10 pb-10 border-b border-gray-200">

                            <h3 className="inline-block text-3xl font-bold mb-8  pb-2">
                                Leave a Comment
                            </h3>

                            <div className="w-full text-sm xs:text-base space-y-4">

                                <textarea
                                    rows={6}
                                    placeholder="Enter your comment here..."
                                    className="w-full border border-gray-300 rounded-3xl p-3 outline-none resize-none"
                                    required
                                />

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="flex-1 border rounded-full p-3 outline-none"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Your e-mail"
                                        className="flex-1 border rounded-full p-3 outline-none"
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="Your topic"
                                    className="w-full border rounded-full p-3 outline-none"
                                />

                            </div>

                            <button className="mt-6 text-white font-semibold bg-hotPink py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out">
                                Post Comment
                            </button>
                        </div>
                    </div>

                    {/* sideBar */}
                    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-11">

                        {/* Search News */}
                        <div className="bg-white p-6 rounded-3xl shadow-xl">
                            <h2 className="font-bold text-xl sm:text-2xl w-full border-b border-gray-300 text-center pb-6 mb-7">
                                Search News
                            </h2>

                            <div className="flex items-center h-12 sm:h-14 w-full  ">

                                <div className="w-4/5 h-full flex items-center  border border-e-0 rounded-s-full px-4 border-gray-300 ">
                                    <input
                                        placeholder="Search Here..."
                                        type="text"
                                        className="w-full outline-none"
                                    />
                                </div>

                                <div className="w-14 sm:w-16 h-full bg-hotPink flex items-center justify-center rounded-e-full">
                                    <FaSearch className="text-white w-4 sm:w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Popular Category */}
                        <div className="bg-white p-6 rounded-3xl shadow-xl">
                            <h2 className="font-bold text-xl sm:text-2xl w-full border-b border-gray-300 text-center pb-6 mb-7">
                                Popular Category
                            </h2>

                            <ul className="flex flex-col items-center gap-4 font-semibold text-lg sm:text-xl">
                                <li className="cursor-pointer hover:text-hotPink">Digital business</li>
                                <li className="cursor-pointer hover:text-hotPink">Business Consulting</li>
                                <li className="cursor-pointer hover:text-hotPink">Consulting</li>
                                <li className="cursor-pointer hover:text-hotPink">Business & Finance</li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div className="bg-white p-6 rounded-3xl shadow-xl">
                            <h2 className="font-bold text-xl sm:text-2xl w-full border-b border-gray-300 text-center pb-6 mb-7">
                                Follow Us
                            </h2>

                            <div className="flex items-center gap-3 justify-center">
                                <Link href="/" className="w-10 sm:w-11 h-10 sm:h-11 bg-hotPink flex items-center justify-center rounded-full text-white">
                                    <FaFacebookF />
                                </Link>

                                <Link href="/" className="w-10 sm:w-11 h-10 sm:h-11 bg-hotPink flex items-center justify-center rounded-full text-white">
                                    <FaSquareGithub />
                                </Link>

                                <Link href="/" className="w-10 sm:w-11 h-10 sm:h-11 bg-hotPink flex items-center justify-center rounded-full text-white">
                                    <FaInstagram />
                                </Link>

                                <Link href="/" className="w-10 sm:w-11 h-10 sm:h-11 bg-hotPink flex items-center justify-center rounded-full text-white">
                                    <FaInstagram />
                                </Link>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="bg-white p-6 rounded-3xl shadow-xl">
                            <h2 className="font-bold text-xl sm:text-2xl w-full border-b border-gray-300 text-center pb-6 mb-7">
                                Tags
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {["Assistant", "Advice", "Virtual", "Designer", "Blog", "Support", "Finance", "Projects"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-white font-semibold bg-hotPink py-2 px-4 sm:px-5 rounded-full text-sm sm:text-base"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Feeds */}
                        <div className="bg-white p-6 rounded-3xl shadow-xl">
                            <h2 className="font-bold text-xl sm:text-2xl text-center mb-7">
                                Feeds
                            </h2>

                            <div className="flex flex-col">

                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between border-t border-gray-300 pt-6 mb-6 gap-4"
                                    >
                                        <div className="relative w-20 sm:w-24 lg:w-28 h-20 sm:h-24 flex-shrink-0">
                                            <Image
                                                src="/images/option-image2.png"
                                                alt="product"
                                                fill
                                                className="object-cover rounded-2xl"
                                            />
                                        </div>

                                        <p className="w-3/5 font-semibold text-sm sm:text-base lg:text-lg">
                                            Why You Need Virtual Assistant for Your Company
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </aside>

                </div>
            </div >
        </section >
    )
}

export default SingleBlog
