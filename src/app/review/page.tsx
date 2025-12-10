import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import FeedbackSection from '@/components/template/FeedbackSection/FeedbackSection'
import React from 'react'

function Review() {
    return (
        <>
            <Header />
            <main>
                <PageHeading title="Review" items={[{ label: "Home", href: "/" }, { label: "Review" },]} />
                <FeedbackSection />
            </main>
            <Footer />
        </>
    )
}

export default Review
