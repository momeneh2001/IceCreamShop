import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import CartItem from '@/components/template/cartItem/CartItem'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShieldAlt } from 'react-icons/fa'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { IoCashOutline } from 'react-icons/io5'

function page() {
  return (
    <>
      <Header variant='default' />
      <main>
        <PageHeading title="Checkout" items={[{ label: "Home", href: "/" }, { label: "cart" }, { label: "Checkout" }]} />
        <section className="py-28 bg-[#F5F5F5]">
          <div className='container'>
            <div className="grid grid-cols-12 gap-8">
              
              {/* Order Summary */}
              <div className="col-span-12 lg:col-span-3 mt-8 lg:mt-0">
                <div className="border-t-2 border-darkPurple bg-white rounded-2xl">
                  {/* Head */}
                  <div className="flex items-center justify-between h-16 px-4">
                    <h2 className="text-lg font-semibold">Items</h2>
                    <h2 className="text-lg font-semibold">Price</h2>
                  </div>
                  {/* items */}
                  <div className='px-5'>
                    <div className='border-b py-5'>
                      <div className='flex items-center justify-between '>
                        <h3 className='font-bold text-lg'>3 x Classic Vanilla</h3>
                        <span className='font-bold text-lg'>$13.00</span>
                      </div>
                      <p className='w-3/5 text-sm text-gray-400 font-semibold'>Creamy vanilla ice cream
                        topped with cherry.</p>
                    </div>
                    <div className='border-b py-5'>
                      <div className='flex items-center justify-between '>
                        <h3 className='font-bold text-lg'>6 x Chocolate Brownie</h3>
                        <span className='font-bold text-lg'>$23.00</span>
                      </div>
                      <p className='w-3/5 text-sm text-gray-400 font-semibold'>Rich chocolate ice cream
                        with chunks of brownie.</p>
                    </div>
                    <div className='border-b py-5'>
                      <div className='flex items-center justify-between '>
                        <h3 className='font-bold text-lg'>4 x Stawberry Cake</h3>
                        <span className='font-bold text-lg'>$22.00</span>
                      </div>
                      <p className='w-3/5 text-sm text-gray-400 font-semibold'>Strawberry ice cream layered
                        with shortcake</p>
                    </div>
                    <div className='border-b py-5'>
                      <div className='flex items-center justify-between '>
                        <h3 className='font-bold text-lg'>2 x Mint Chocolate</h3>
                        <span className='font-bold text-lg'>$07.00</span>
                      </div>
                      <p className='w-3/5 text-sm text-gray-400 font-semibold'>Refreshing mint ice cream
                        with chocolate chips.</p>
                    </div>
                  </div>
                  {/* Product Details */}
                  <div className="p-5 flex items-center justify-between">
                    <h2 className='font-bold text-xl'>Grand Total</h2>
                    <span className='font-bold text-hotPink'>$83.99</span>
                  </div>
                </div>
              </div>
              {/* Billing Address: */}
              <div className="col-span-12 lg:col-span-9">
                <div className="flex items-center justify-start pb-3">
                  <h2 className="text-lg font-bold">Billing Address:</h2>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-xl">
                    {/* col1 */}
                    <div className="flex flex-col w-full mb-5">
                      <label className="text-gray-600 mb-3">
                        First name
                      </label>
                      <input type="text" className=" w-full h-12 rounded-full px-4 outline-none border border-gray-300 bg-inherit text-sm xs:text-sm sm:text-bas focus:border-hotPin   " />
                    </div>

                    <div className="flex flex-col w-full mb-5">
                      <label className="text-gray-600 mb-3">
                        Last name
                      </label>
                      <input type="text" className=" w-full h-12 rounded-full px-4 outline-none border border-gray-300 bg-inherit text-sm xs:text-sm sm:text-bas focus:border-hotPin   " />
                    </div>

                    <div className="flex flex-col w-full mb-5">
                      <label className="text-gray-600 mb-3">
                        Email address
                      </label>
                      <input type="email" className=" w-full h-12 rounded-full px-4 outline-none border border-gray-300 bg-inherit text-sm xs:text-sm sm:text-bas focus:border-hotPin   " />
                    </div>
                  </div>
                  {/* col2 */}
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <div className="flex flex-col w-full mb-5">
                      <label className="text-gray-600 mb-3">
                        State
                      </label>
                      <input type="text" className=" w-full h-12 rounded-full px-4 outline-none border border-gray-300 bg-inherit text-sm xs:text-sm sm:text-bas focus:border-hotPin   " />
                    </div>

                    <div className="flex flex-col w-full mb-5">
                      <label className="text-gray-600 mb-3">
                        City
                      </label>
                      <input type="text" className=" w-full h-12 rounded-full px-4 outline-none border border-gray-300 bg-inherit text-sm xs:text-sm sm:text-bas focus:border-hotPin   " />
                    </div>

                    <div className="flex flex-col w-full mb-5">
                      <label className="text-gray-600 mb-3">
                        Zip/ postal code
                      </label>
                      <input type="number" className=" w-full h-12 rounded-full px-4 outline-none border border-gray-300 bg-inherit text-sm xs:text-sm sm:text-bas focus:border-hotPin   " />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-start pb-3">
                    <h2 className="text-lg font-bold">Payment Method:</h2>
                  </div>
                  <div className="flex items-center justify-between gap-3 border border-gray-300 h-12 px-4 rounded-full mb-8">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="credit-card" className="peer hidden" />

                      <label
                        htmlFor="credit-card"
                        className=" w-7 h-7 rounded-full border-2 border-gray-300 cursor-pointer flex items-center justify-center transition-all duration-200 peer-checked:bg-hotPink peer-checked:border-hotPink">
                        <span className="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform" />
                      </label>

                      <label
                        htmlFor="credit-card"
                        className="text-gray-700 cursor-pointer select-none"
                      >
                        Credit Card
                      </label>
                    </div>
                    <div className="w-[122px] h-[22px] relative">
                      <Image
                        src="/images/checkout.png"
                        alt="Checkout card image"
                        fill
                        className="object-contain "
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 border border-gray-300 h-12 px-4 rounded-full mb-8">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="Cash-on-Delivery" className="peer hidden" />

                      <label
                        htmlFor="Cash-on-Delivery"
                        className=" w-7 h-7 rounded-full border-2 border-gray-300 cursor-pointer flex items-center justify-center transition-all duration-200 peer-checked:bg-hotPink peer-checked:border-hotPink">
                        <span className="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform" />
                      </label>

                      <label
                        htmlFor="Cash-on-Delivery"
                        className="text-gray-700 cursor-pointer select-none"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                    <IoCashOutline className='w-5 h-5' />
                  </div>
                  <button
                   
                    className="w-full outline-none items-center flex justify-center gap-2 py-4 px-5 bg-hotPink rounded-full text-white shadow-hotPink"
                  >
                    Palce Order Now <IoMdArrowRoundForward />
                  </button>
                </div>


              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default page
