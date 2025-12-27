import React from 'react'
import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import FaqItem from '@/components/template/faqItem/FaqItem'
import NewsletterSection from '@/components/template/newsletterSection/NewsletterSection'
import PromotionsSection from '@/components/template/PromotionsSection/PromotionsSection'

function Faq() {
    return (
        <>
            <Header variant='default' />
            <main>
                <PageHeading title="Faq's" items={[{ label: "Home", href: "/" }, { label: "Faq's" },]} />
                <section className='py-40 bg-[#F5F5F5]'>
                    <div className='flex flex-col gap-2 items-center justify-center mb-20'>
                        <h2 className=" w-full max-w-[600px] mx-auto text-center text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl capitalize leading-tight">
                            Frequently Asked <span className='text-hotPink'>Questions</span>
                        </h2>
                        <p className='text-gray-500'>Some of the queries you want to know about us.</p>
                    </div>
                    <FaqItem/>
                </section>
                <PromotionsSection />
                <NewsletterSection />
            </main>
            <Footer />
        </>
    )
}

export default Faq
