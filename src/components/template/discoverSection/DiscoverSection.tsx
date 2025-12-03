import CategoriesCard from '@/components/modules/categoriesCard/CategoriesCard';
import React from 'react'
import DiscoverSlider from './DiscoverSlider';

function DiscoverSection() {
    let title = "Explore Our Categories";
    const words = title.split(" ");
    const lastIndex = words.length - 1;
    return (
        <section className='relative bg-ice-gradient py-40'>
            {/* header */}
            <div className='flex flex-col gap-2 items-center justify-center mb-14'>
                <h2 className="text-3xl capitalize xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl m flex flex-wrap gap-2 justify-center md:justify-start">
                    {words.map((word, i) => (
                        <span
                            key={i}
                            className={i === lastIndex ? "text-hotPink" : ""}
                        >
                            {word}
                        </span>
                    ))}

                </h2>

                <p className='text-gray-500'>Browse through our different categories to find your favorite ice cream treats.</p>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto justify-items-center items-center">
                {/* <DiscoverSlider /> */}
                <CategoriesCard img='/images/categories-image1.png' />
                <CategoriesCard img='/images/categories-image2.png' />
                <CategoriesCard img='/images/categories-image3.png' />
                <CategoriesCard img='/images/categories-image4.png' />
            </div>


        </section>
    )
}

export default DiscoverSection
