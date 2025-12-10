import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'

function ThankYou() {
    return (
        <>
            <Header variant='glass' />
            <main className="bg-ice-gradient h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-xl flex flex-col items-center">

                    <div className="relative w-[120px] h-[180px] xs:w-[130px] xs:h-[195px] sm:w-[147px] sm:h-[216px] mb-6">
                        <Image
                            src="/images/thankyou-image.png"
                            alt="Ice Tales"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <h1 className="text-5xl xs:text-6xl sm:text-7xl font-bold">Thank You!</h1>

                    <p className="text-gray-500 text-sm xs:text-base sm:text-lg leading-relaxed my-6">
                        We&apos;re delighted you&apos;ve decided to treat yourself to our delectable ice creams.
                        Your order has been received and is now being prepared with care.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 py-2 px-6 sm:px-8 bg-hotPink rounded-full text-white shadow-hotPink mt-2 text-sm xs:text-base"
                    >
                        <IoMdArrowRoundBack className="text-lg sm:text-xl" />
                        <span>Back to Home</span>
                    </Link>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default ThankYou
