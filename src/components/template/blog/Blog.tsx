"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import BlogItem540 from "./blogItem/BlogItem540";

const categories = [
  "All",
  "Advices",
  "Announcements",
  "News",
  "Consultation",
  "Development",
];
const blogs = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
}));

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // total pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // slice items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <section className="bg-[#F5F5F5] py-24">

      <div className="container mx-auto px-4">

        {/* categories */}
        <ul className="flex flex-wrap items-center justify-center gap-4 mb-14">

          {categories.map((item) => (
            <li
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`
                px-6 py-2 rounded-full text-sm md:text-base transition cursor-pointer
                ${activeCategory === item
                  ? "bg-hotPink text-white"
                  : "bg-white hover:bg-hotPink hover:text-white"
                }
              `}
            >
              {item}
            </li>
          ))}

        </ul>

        {/* blog items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1150px] mx-auto">

          {currentBlogs.map((blog) => (
            <BlogItem540 key={blog.id} />
          ))}

        </div>

        {/* pagination */}
        <div className="flex items-center justify-center gap-2 mt-16 flex-wrap">

          {/* prev */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaChevronLeft size={18} />
          </button>

          {/* pages */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`
              w-10 h-10 rounded-xl
              ${currentPage === page
                  ? "bg-hotPink text-white"
                  : "bg-gray-100"
                }
            `}
            >
              {page}
            </button>
          ))}

          {/* next */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FaChevronRight size={18} />

          </button>

        </div>

      </div>

    </section>
  );
}

export default Blog;