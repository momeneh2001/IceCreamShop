"use client";
import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import CartItem from '@/components/template/cartItem/CartItem'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaShieldAlt } from 'react-icons/fa'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'

function Cart() {
    const [showInput, setShowInput] = useState(false);
    return (
        <>
            <Header variant='default' />
            <main>
                <PageHeading title="Shopping Cart" items={[{ label: "Home", href: "/" }, { label: "Cart" },]} />
                <section className="py-28 bg-[#F5F5F5]">
                    <div className='container'>
                        <div className="grid grid-cols-12 gap-8">
                            {/* Cart Items */}
                            <div className="col-span-12 lg:col-span-9">
                                <div className="flex items-center justify-between pb-3">
                                    <h2 className="text-lg font-semibold">Shopping Cart</h2>
                                    <span>(04 Items)</span>
                                </div>
                                <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between border-t border-b border-gray-400 py-2">
                                    <h2 className="text-sm xs:text-base font-medium">Product Details</h2>
                                    <div className="w-full xs:w-[65%] flex items-center justify-between mt-2 xs:mt-0 text-xs sm:text-sm">
                                        <span>Price</span>
                                        <span>Quantity</span>
                                        <span>Total</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                                {/* Cart Items List */}
                                <div className="space-y-4 mt-4">
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />
                                </div>
                                <div className="w-full self-start mt-5">
                                    <Link
                                        href="/shop/Classic"
                                        className="w-full flex items-center justify-start gap-2 text-darkPurple font-semibold  text-sm"
                                    >
                                        <IoMdArrowRoundBack />
                                        <span>Continue Shopping</span>
                                    </Link>
                                </div>
                            </div>
                            {/* Order Summary */}
                            <div className="col-span-12 lg:col-span-3 mt-8 lg:mt-0">
                                <div className="border-t-2 border-darkPurple bg-white rounded-2xl">
                                    {/* Head */}
                                    <div className="flex items-center justify-center h-16">
                                        <h2 className="text-lg font-semibold">Order Summary</h2>
                                    </div>
                                    {/* Coupons */}
                                    <div className="border-t border-b border-gray-300 py-5 px-4 xs:px-5">
                                        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
                                            <h3 className="text-sm xs:text-base mb-2 xs:mb-0">Apply Coupons</h3>
                                            <button
                                                onClick={() => setShowInput(true)}
                                                className="h-8 px-4 bg-darkPurple rounded-full text-white flex items-center justify-center text-sm"
                                            >
                                                ENTER
                                            </button>
                                        </div>

                                        {showInput && (
                                            <div className="mt-3">
                                                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter coupon code"
                                                        className="flex-1 h-10 px-3 border border-gray-300 rounded-full outline-none focus:border-darkPurple text-sm"
                                                    />
                                                    <button className="h-10 px-4 bg-hotPink rounded-full text-white flex items-center justify-center text-sm">
                                                        APPLY
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* Product Details */}
                                    <div className="p-5">
                                        <div className="pb-5">
                                            <h3 className="text-lg font-semibold mb-4">Product Details</h3>

                                            <div className="flex items-center justify-between text-sm mb-2">
                                                <h4 className="text-gray-500 font-semibold">Sub Total</h4>
                                                <span className="font-medium">$63.99</span>
                                            </div>

                                            <div className="flex items-center justify-between text-sm">
                                                <h4 className="text-gray-500 font-semibold">Shipping</h4>
                                                <span className="text-green-600 font-medium">FREE</span>
                                            </div>
                                        </div>

                                        {/* Grand Total */}
                                        <div className="py-5 border-y border-gray-400">
                                            <div className="flex items-center justify-between text-sm mb-4">
                                                <h3 className="font-bold text-lg">Grand Total</h3>
                                                <span className="font-medium">$63.99</span>
                                            </div>
                                            <Link
                                                href="/checkout"
                                                className="w-full flex items-center justify-center gap-2 h-14 bg-hotPink rounded-full text-white shadow-hotPink text-sm"
                                            >
                                                <span>Proceed to checkout</span>
                                                <IoMdArrowRoundForward />
                                            </Link>
                                        </div>

                                        {/* Security */}
                                        <div className="flex items-start gap-2 text-gray-400 pt-5 text-xs xs:text-sm">
                                            <FaShieldAlt className="w-4 h-4 mt-1 flex-shrink-0" />
                                            <p className="leading-5">
                                                Safe and Secure Payments, Easy Returns. <br />
                                                100% Authentic Products
                                            </p>
                                        </div>
                                    </div>
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

export default Cart
