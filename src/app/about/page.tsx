import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import OurTeam from '@/components/modules/ourTeam/OurTeam'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import NewsletterSection from '@/components/template/newsletterSection/NewsletterSection'
import OurJourney from '@/components/template/ourJourney/OurJourney'
import HeroPromoC from '@/components/template/PromotionsSection/HeroPromoC'
import React from 'react'


function about() {
  return (
    <>
      <Header variant='default' />
      <main>
        <PageHeading title="About Us" items={[{ label: "Home", href: "/" }, { label: "About Us" },]} />
        <OurJourney />
        <HeroPromoC />
        {/* Our Statistics start */}
        <section className='py-36 bg-[#F5F5F5]'>
          <div className='flex flex-col gap-2 items-center justify-center mb-14'>
            <h2 className="text-3xl capitalize xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl m flex flex-wrap gap-2 justify-center md:justify-start">
              Our <span className="text-hotPink">Statistics</span>
            </h2>
            <p className='text-gray-500'>What makes us special through our impressive statistics.</p>
          </div>
          <div
            className=" flex flex-wrap justify-center gap-6 ">
            {Array(4).fill(0).map((_, i) => (
              <div
                key={i}
                className="bg-white w-[255px] h-[182px] flex flex-col items-center justify-center border-b-2 border-hotPink rounded-xl">
                <h4 className="text-5xl">
                  91 <span className="text-hotPink text-4xl">+</span>
                </h4>
                <p>Awards Win</p>
              </div>
            ))}
          </div>


        </section>
        {/* Our Statistics end */}
        <OurTeam/>
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

export default about
