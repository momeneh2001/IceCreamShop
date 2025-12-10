import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

function NotFound() {
    return (
        <main className="bg-ice-gradient h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-xl">
                <h1 className="text-7xl xs:text-8xl sm:text-9xl font-bold">404</h1>
                <h3 className="text-xl xs:text-2xl sm:text-3xl my-3">
                    Sorry! The Page Not Found ;(
                </h3>
                <p className="text-gray-500 text-sm xs:text-base sm:text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consec tse tur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 py-2 px-6 sm:px-8 bg-hotPink rounded-full text-white shadow-hotPink mt-6 text-sm xs:text-base"
                >
                    <IoMdArrowRoundBack className="text-lg sm:text-xl" />
                    <span>Back to Home</span>
                </Link>
            </div>
        </main>
    )
}

export default NotFound
