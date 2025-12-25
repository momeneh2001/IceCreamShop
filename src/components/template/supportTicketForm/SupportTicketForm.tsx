import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

function SupportTicketForm() {
    return (
        <div className="w-full md:w-[700px]   flex flex-col gap-6">
            <div className="flex flex-col xs:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full xs:w-1/2">
                    <label className="text-sm font-medium text-gray-600">
                        First Name
                    </label>
                    <input
                        type="text"
                        placeholder="John"
                        className="w-full h-14 px-5 rounded-full border border-gray-300 bg-transparent
              focus:border-hotPink focus:ring-2 focus:ring-hotPink/20 outline-none transition"
                    />
                </div>

                <div className="flex flex-col gap-1 w-full xs:w-1/2">
                    <label className="text-sm font-medium text-gray-600">
                        Last Name
                    </label>
                    <input
                        type="text"
                        placeholder="Doe"
                        className="w-full h-14 px-5 rounded-full border border-gray-300 bg-transparent
              focus:border-hotPink focus:ring-2 focus:ring-hotPink/20 outline-none transition"
                    />
                </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-4">
                <div className="flex flex-col gap-1 w-full xs:w-1/2">
                    <label className="text-sm font-medium text-gray-600">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full h-14 px-5 rounded-full border border-gray-300 bg-transparent
              focus:border-hotPink focus:ring-2 focus:ring-hotPink/20 outline-none transition"
                    />
                </div>
                <div className="flex flex-col gap-1 w-full xs:w-1/2">
                    <label className="text-sm font-medium text-gray-600">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        className="w-full h-14 px-5 rounded-full border border-gray-300 bg-transparent
              focus:border-hotPink focus:ring-2 focus:ring-hotPink/20 outline-none transition"
                    />
                </div>
            </div>
            {/* Message */}
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-600">
                     Message
                </label>
                <textarea
                    placeholder="Write your message here..."
                    className="resize-none w-full h-[180px] rounded-2xl bg-transparent border border-gray-300 p-5
            focus:border-hotPink focus:ring-2 focus:ring-hotPink/20 outline-none transition"
                />
            </div>
            {/* Action */}
            <div className="flex justify-start pt-2">
                <button
                    className="h-14 px-10 flex items-center justify-center gap-2 rounded-full bg-hotPink text-white font-semibold hover:bg-hotPink transition-all duration-300 shadow-md hover:shadow-hotPink/40">
                    <span>Send Message</span> <IoMdArrowRoundForward/>
                </button>
            </div>
        </div>
    )
}

export default SupportTicketForm
