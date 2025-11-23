import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { TbIceCreamOff } from "react-icons/tb";
import { RiPagesFill } from "react-icons/ri";
import { FaBlog, FaSignInAlt, FaUser } from "react-icons/fa";
import { HiHome, HiMiniShoppingBag, HiMiniUserGroup, HiQuestionMarkCircle } from "react-icons/hi2";
interface MobileMenuProp {
  setIsSideBarOpen: (value: boolean) => void;
}

function MobileMenu({ setIsSideBarOpen }: MobileMenuProp) {
  
  return (
    <>
    {/* SideBar */}
      <div data-aos="fade-right" className="fixed p-1 top-0 bottom-0   w-72 min-h-screen bg-white  z-20 transition-all">
        {/* navbar header  */}
        <div className="flex items-center justify-between border-b-2 border-hotPink">
          <div className="flex p-2 mb-3 text-grymlo-100 items-center">
            {/* name nad logo */}
            <div className="relative w-8 h-9 sm:w-7 sm:h-9 md:w-9 md:h-11 lg:w-11 lg:h-14 xl:w-14 xl:h-14">
              <Image
                src="/images/logo.png"
                alt="Ice Tales Logo"
                fill
                sizes="(max-width: 640px) 35px, (max-width: 768px) 51px, (max-width: 1024px) 59px, 75px"
                className="object-contain"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold">
              <span className="text-hotPink">Icy</span>
              <span className="text-darkPurple">Tales</span>
            </h3>
          </div>
          {/* close btn */}
          <div onClick={() => setIsSideBarOpen(false)} className="w-8 h-8 flex items-center justify-center transition-all duration-200 group hover:scale-110 rounded-full hover:bg-red-600 cursor-pointer">
            <TbIceCreamOff className='w-6 h-6 text-red-600 group-hover:text-white' />
          </div>
        </div>
        {/* navbar menu bodey */}
        <nav className='overflow-auto py-4 pr-3 h-[500px] my-1  rounded-3xl'>
          <ul className='pl-5 flex flex-col gap-5 child:flex child:items-center child:gap-2'>
            <li className='transition-all duration-300 hover:bg-hotPink/20 hover:text-hotPink rounded-lg px-3 py-1'>
              <HiHome />
              <Link href="">Home</Link>
            </li>
            <li className=' transition-all duration-300 hover:bg-hotPink/20 hover:text-hotPink rounded-lg px-3 py-1'>
              <HiMiniUserGroup />
              <Link href="">About Us</Link>
            </li>
            <li className='transition-all duration-300 hover:bg-hotPink/20 hover:text-hotPink rounded-lg px-3 py-1'>
              <RiPagesFill />
              <Link href="">Pages</Link>
              {/* <IoIosArrowDown /> */}
            </li>
            <li className='transition-all duration-300 hover:bg-hotPink/20 hover:text-hotPink rounded-lg px-3 py-1'>
              <FaBlog />
              <Link href="">Blog</Link>
            </li>
            <li className='transition-all duration-300 hover:bg-hotPink/20 hover:text-hotPink rounded-lg px-3 py-1'>
              <HiQuestionMarkCircle />
              <Link href="">Faq&apos;s</Link>
            </li>
            <li className='transition-all duration-300 hover:bg-hotPink/20 hover:text-hotPink rounded-lg px-3 py-1'>
              <HiMiniShoppingBag />
              <Link href="">Cart</Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col border-t-2 border-hotPink  p-4">
          <Link href="/login" className="flex items-center gap-2 text-grymlo-100 rounded-lg px-3 py-1 transition-all duration-300 hover:bg-hotPink/20 hover:text-hotPink">
            <FaSignInAlt />
            Login
          </Link>
          {/* Account user ? login */}
          {/* <Link href="/account" className="flex items-center gap-2 text-grymlo-100 rounded-lg px-3 py-1 transition-all duration-300 hover:bg-hotPink/20 hover:text-hotPink">
            <FaUser />
            Account
          </Link> */}
        </div>
      </div>

      {/* Overlay */}
      <div onClick={() => setIsSideBarOpen(false)} className='overlayEdit overlayEdit--visible fixed inset-0 flex items-center justify-center'></div>
      {/* Overlay image */}
      <div className="absolute w-60 h-96 left-[288px] ">
        <Image
          src="/images/backice.png"
          alt="Ice Tales Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
     
      {/* close btn update later */}
      {/* <div className="absolute top-7 left-[264px] w-20 h-8 -rotate-90 bg-white rounded-b-full z-20 flex items-center justify-center transition-all duration-200 hover:bg-red-600 hover:scale-110">
        <div onClick={() => setIsSideBarOpen(false)} className=" left-[288px] top-7 z-20 rotate-90">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-white flex items-center justify-center  rounded-full">
              <TbIceCreamOff className='w-6 h-6 text-red-600 cursor-pointer hover:text-darkPurple' />
            </div>
          </div>
        </div>
      </div> */}
    </>


  )
}

export default MobileMenu
