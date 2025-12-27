'use client'

import React from 'react'
import Swal from 'sweetalert2'

function FaqItem() {

    const handleClick = (question: string, answer: string) => {
        Swal.fire({
            title: question,
            text: answer,
            icon: undefined,
            confirmButtonText: 'Close',
            customClass: {
                popup: 'rounded-xl p-6',
                confirmButton: 'bg-purple-900 text-white hover:bg-purple-800',
                icon: 'swal-icon-purple'
            }
        })
    }

    return (
        <div className="flex justify-center flex-wrap gap-8">
            {/* Question 1 */}
            <div
                onClick={() => handleClick(
                    'Do you offer dairy-free or vegan options?',
                    'Yes, we have a variety of dairy-free and vegan options available for our customers.'
                )}
                className="w-full xs:w-[90%] md:w-[538px] bg-white px-7 py-5 rounded-xl cursor-pointer"
            >
                <p className="font-medium">Do you offer dairy-free or vegan options?</p>
            </div>
            {/* Question 2 */}
            <div
                onClick={() => handleClick(
                    'What are your opening hours?',
                    'We are open from 9:00 AM to 9:00 PM from Monday to Saturday, and 10:00 AM to 8:00 PM on Sundays.'
                )}
                className="w-full xs:w-[90%] md:w-[538px] bg-white px-7 py-5 rounded-xl cursor-pointer"
            >
                <p className="font-medium">What are your opening hours?</p>
            </div>
            {/* Question 3 */}
            <div
                onClick={() => handleClick(
                    'Do you offer delivery services?',
                    'Yes, we offer delivery through our website and popular delivery apps.'
                )}
                className="w-full xs:w-[90%] md:w-[538px] bg-white px-7 py-5 rounded-xl cursor-pointer"
            >
                <p className="font-medium">Do you offer delivery services?</p>
            </div>
            {/* Question 4 */}
            <div
                onClick={() => handleClick(
                    'Can I customize my order?',
                    'Absolutely! You can customize your order when placing it online or in-store.'
                )}
                className="w-full xs:w-[90%] md:w-[538px] bg-white px-7 py-5 rounded-xl cursor-pointer"
            >
                <p className="font-medium">Can I customize my order?</p>
            </div>
            {/* Question 5 */}
            <div
                onClick={() => handleClick(
                    'Do you have gluten-free options?',
                    'Yes, we provide several gluten-free menu items for our customers.'
                )}
                className="w-full xs:w-[90%] md:w-[538px] bg-white px-7 py-5 rounded-xl cursor-pointer"
            >
                <p className="font-medium">Do you have gluten-free options?</p>
            </div>
            {/* Question 6 */}
            <div
                onClick={() => handleClick(
                    'How can I contact customer support?',
                    'You can contact our support team via email, phone, or live chat on our website.'
                )}
                className="w-full xs:w-[90%] md:w-[538px] bg-white px-7 py-5 rounded-xl cursor-pointer"
            >
                <p className="font-medium">How can I contact customer support?</p>
            </div>
        </div>
    )
}

export default FaqItem
