import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import SupportTicketForm from '@/components/template/supportTicketForm/SupportTicketForm'
import React from 'react'
import { FaShippingFast } from 'react-icons/fa'

function ContactUs() {
    return (
        <>
            <Header variant='default' />
            <main className='bg-[#F5F5F5]'>
                <PageHeading title="Contact Us" items={[{ label: "Home", href: "/" }, { label: "contactUs" },]} />
                <section className='py-28'>
                    <div className='flex flex-col gap-2 items-center justify-center my-20'>
                        <h2 className=" w-full max-w-[600px] mx-auto text-center text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl capitalize leading-tight">
                            Get in <span className='text-hotPink'>Touch</span> With Us
                        </h2>
                        <p className='text-gray-500'>Reach out and connect with us today for any inquiries or assistance!</p>
                    </div>
                    <div className=" flex flex-col md:flex-row items-center md:items-start justify-center gap-10 lg:gap-16">
                        <div className=" flex flex-col items-center md:items-start gap-6 md:gap-9"> 
                            <div className="bg-white w-full xs:w-80 min-h-40 flex items-center gap-5 p-6 rounded-2xl border border-gray-200">
                                <div className="bg-darkPurple w-16 h-16 flex items-center justify-center rounded-full flex-shrink-0">
                                    <FaShippingFast className="text-white w-7 h-7" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-semibold">Our Location</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        121 King Street, Melbourne
                                        Victoria 3000 Australia
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white w-full xs:w-80 min-h-40 flex items-center gap-5 p-6 rounded-2xl border border-gray-200">
                                <div className="bg-darkPurple w-16 h-16 flex items-center justify-center rounded-full flex-shrink-0">
                                    <FaShippingFast className="text-white w-7 h-7" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-semibold">Phone Number</h4>
                                    <div className="flex flex-col text-sm text-gray-600 leading-relaxed">
                                        <span>(+61 3 8376 6284)</span>
                                        <span>(+61 3 8376 6284)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white w-full xs:w-80 min-h-40 flex items-center gap-5 p-6 rounded-2xl border border-gray-200">
                                <div className="bg-darkPurple w-16 h-16 flex items-center justify-center rounded-full flex-shrink-0">
                                    <FaShippingFast className="text-white w-7 h-7" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-semibold">Email us at</h4>
                                    <div className="flex flex-col text-sm text-gray-600 leading-relaxed">
                                        <span>info@icedelights.com</span>
                                        <span>icedelights@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SupportTicketForm />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default ContactUs
