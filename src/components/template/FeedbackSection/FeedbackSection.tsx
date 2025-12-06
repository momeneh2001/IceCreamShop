import React from 'react'
import FeedbackSliderA from './FeedbackSliderA'
import FeedbackSliderB from './FeedbackSliderB'

function FeedbackSection() {
    return (
        // bg-white
        <section className='  bg-[#D7EAEF]  py-32'>
            <div className='flex flex-col gap-2 items-center justify-center mb-14'>
                {/*          Hear from Our Happy Ice Cream Lovers */}
                <h2 className=" w-full max-w-[600px] mx-auto text-center text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl capitalize leading-tight">
                    Hear From Our Gelato Enthusiasts
                </h2>
                {
                    true ? (<p className='text-gray-500'>Read testimonials from those who have enjoyed our artisan gelato.</p>) : (<></>)
                }
            </div>

            <FeedbackSliderA />
            {/* <FeedbackSliderB /> */}

        </section>
    )
}

export default FeedbackSection
