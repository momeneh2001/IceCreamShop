import ProductsSliderA from '@/components/modules/ProductsSlider/ProductsSliderA';
import ProductsSliderB from '@/components/modules/ProductsSlider/ProductsSliderB';
import Image from 'next/image';
import React from 'react'

function BestSellersSection() {
    let sectionContent = {
        A: {

            title: "Our Best Sellers",
            description:
                "Discover the favorites that keep our customers coming back for more.",
        },
        B: {
            title: "Best Vegan Ice Creams",
            description:
                "Our best-selling vegan ice creams and desserts.",
        },
        C: {

            title: "Most Popular Gelato Flavors",
            description:
                "Discover the gelato flavors that our customers love the most.",
        }
    };


return (
    <section className='relative bg-ice-gradient py-40'>
        {/* header */}
        <div className='flex flex-col gap-2 items-center justify-center mb-14'>
            <h2 className="text-3xl capitalize xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl m flex flex-wrap gap-2 justify-center md:justify-start">
            {sectionContent.A.title}
            </h2>
            <p className='text-gray-500'>{sectionContent.A.description}</p>
        </div>
        {/* slider */}
        {
            true ? (<ProductsSliderA />) : (<ProductsSliderB type={"B"} />)
        }
        {
            true ? (<div
                className=" absolute w-32 h-52 top-10 left-0 xs:w-40 xs:h-72 xs:top-14 sm:w-48 sm:h-80 sm:top-16 md:w-48 md:h-80 md:top-20 lg:w-52 lg:h-96 lg:top-24 xl:w-60 xl:h-96 xl:top-28 xxl:w-60 xxl:h-96 xxl:top-20">
                <Image
                    src="/images/backice.png"
                    alt="Ice Tales Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>) : (<></>)
        }
    </section>
)
}

export default BestSellersSection
