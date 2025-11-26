"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown, IoMdArrowRoundForward} from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import MobileMenu from "../mobileMenu/MobileMenu";
import {CgMenuRight } from "react-icons/cg";
import { useState } from "react";

// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface HeaderProps {
    variant?: "default" | "glass";
}

export default function Header({ variant = "default" }: HeaderProps) {
    const isGlass = variant === "glass";
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 600 });
      }, []);

    return (
        <header
            className={
                isGlass
                    ? "fixed w-full top-0 left-0 z-50"
                    : "sticky w-full top-0 left-0 z-50 bg-white"
            }
        >
            <div className="container py-5">
                <div
                    className={
                        isGlass
                            ? " backdrop-blur-md bg-white/30 rounded-full px-9 py-3 flex items-center justify-between"
                            : "flex items-center justify-between"
                    }
                >
                    {/* website logo */}
                    <div className="flex items-center ">
                        <div className="relative w-8 h-9 sm:w-7 sm:h-9 md:w-9 md:h-11 lg:w-11 lg:h-14 xl:w-12 xl:h-14">
                            <Image
                                src="/images/logo.png"
                                alt="Ice Tales Logo"
                                fill
                                sizes="(max-width: 640px) 35px, (max-width: 768px) 51px, (max-width: 1024px) 59px, 75px"
                                className="object-contain"
                                priority
                            />
                        </div>

                        <h3 className="text-3xl font-bold">
                            <span className="text-hotPink">Icy</span>
                            <span className="text-darkPurple">Tales</span>
                        </h3>
                    </div>

                    {/* nav + icons */}
                    <div className="flex lg:gap-7 xl:gap-14 items-center">
                        {/* --- NAV --- */}
                        <nav className="hidden lg:block">
                            <ul className="flex lg:gap-5 xl:gap-10">

                                <li>
                                    <Link href="/about" className="text-hotPink">
                                        Home
                                    </Link>
                                </li>
                                {/* home link droup */}
                                {/* <li className="relative group">
                                    <Link
                                        href="/"
                                        className="inline-flex items-center gap-1 hover:text-hotPink"
                                    >
                                        Home <IoMdArrowDropdown />
                                    </Link>
                                    <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <li>
                                            <Link
                                                href="/blog/option1"
                                                className="block px-4 py-2 hover:bg-hotPink hover:text-white"
                                            >
                                                Option 1
                                            </Link>
                                        </li>
                                    </ul>
                                </li> */}

                                <li>
                                    <Link href="/about" className="hover:text-hotPink">
                                        About Us
                                    </Link>
                                </li>

                                <li className="relative group">
                                    <Link
                                        href="/pages"
                                        className="inline-flex items-center gap-1 hover:text-hotPink"
                                    >
                                        Pages <IoMdArrowDropdown />
                                    </Link>
                                    <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <li>
                                            <Link
                                                href="/blog/option1"
                                                className="block px-4 py-2 hover:bg-hotPink hover:text-white"
                                            >
                                                Option 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog/option2"
                                                className="block px-4 py-2 hover:bg-hotPink hover:text-white"
                                            >
                                                Option 2
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="relative group">
                                    <Link
                                        href="/blog"
                                        className="inline-flex items-center gap-1 hover:text-hotPink"
                                    >
                                        Blog <IoMdArrowDropdown />
                                    </Link>
                                    <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <li>
                                            <Link
                                                href="/blog/option1"
                                                className="block px-4 py-2 hover:bg-hotPink hover:text-white"
                                            >
                                                Option 1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog/option2"
                                                className="block px-4 py-2 hover:bg-hotPink hover:text-white"
                                            >
                                                Option 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog/option2"
                                                className="block px-4 py-2 hover:bg-hotPink hover:text-white"
                                            >
                                                Option 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog/option2"
                                                className="block px-4 py-2 hover:bg-hotPink hover:text-white"
                                            >
                                                Option 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog/option2"
                                                className="block px-4 py-2 hover:bg-hotPink hover:text-white"
                                            >
                                                Option 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/blog/option2"
                                                className="block px-4 py-2 hover:bg-hotPink hover:text-white"
                                            >
                                                Option 2
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <Link href="/contact" className="hover:text-hotPink">Faq&apos;s</Link>
                                </li>
                            </ul>
                        </nav>

                        {/* --- ICONS --- */}
                        <div className="flex items-center gap-5 md:gap-5 lg:gap-5 xl:gap-8">
                            <Link href="/" className="hover:text-hotPink">
                                <AiOutlineUser className="w-5 h-6" />
                            </Link>
                            <Link href="/cart" className="hover:text-hotPink">
                                <IoBagHandleOutline className="w-5 h-6" />
                            </Link>

                            <Link
                                href="/contactUs"
                                className="hidden lg:inline-flex items-center  gap-2 py-2 px-5 bg-hotPink rounded-full text-white shadow-hotPink"
                            >
                                <span>Contact Us</span> <IoMdArrowRoundForward />
                            </Link>

                            <button className="lg:hidden text-2xl hover:text-hotPink">
                                <CgMenuRight onClick={() => { setIsSideBarOpen((prev) => (!prev)) }} className="w-5 h-6" />
                               
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {
                isSideBarOpen && (
                    <MobileMenu setIsSideBarOpen={setIsSideBarOpen} />
                )
            }

        </header>
    );
}
