import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import CommitmentsSection from '@/components/template/commitmentsSection/CommitmentsSection'
import FeaturedProducts from '@/components/template/featuredProducts/FeaturedProducts'
import NewsletterSection from '@/components/template/newsletterSection/NewsletterSection'
import PromotionsSection from '@/components/template/PromotionsSection/PromotionsSection'
import React from 'react'

function Offers() {
    return (
        <>
            <Header variant='default' />
            <main>
                <PageHeading title="Special Offers" items={[{ label: "Home", href: "/" }, { label: "Special Offers" },]} />
                {/* The background should be white, and the cards should display the discount percentage. */}
                <FeaturedProducts/>
                <PromotionsSection />
                <CommitmentsSection/>
                <NewsletterSection />
            </main>
            <Footer />
        </>
    )
}

export default Offers
