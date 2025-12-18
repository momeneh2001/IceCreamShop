import ProductsSliderA from '@/components/modules/ProductsSlider/ProductsSliderA'
import ProductsSliderB from '@/components/modules/ProductsSlider/ProductsSliderB'
import Image from 'next/image'
import React from 'react'

interface RelatedProductsProps {
    type?: "A" | "B" | "C";
    bgImage?: boolean;
}

function RelatedProducts({ type = "A",bgImage= false }: RelatedProductsProps)  {
    let title = "Related Products";
    const words = title.split(" ");
    const lastIndex = words.length - 1;

    const renderSlider = () => {
        switch (type) {
          case "A":
            return <ProductsSliderA />;
          case "B":
            return <ProductsSliderB  type="B" />;
          case "C":
            return <ProductsSliderB type="C" />;
          default:
            return <ProductsSliderA />;
        }
      };


    return (
        // bg-ice-gradient
        <section className={`relative ${type === "C" ?"bg-ice-gradient" :"bg-[#F5F5F5]"}  bg-[#F5F5F5] py-40`}>
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
                <p className='text-gray-500'>Choose from some of related products</p>
            </div>
            {/* slider */}
            {renderSlider()}
            {
                bgImage ? (
                    <>
                        <div
                            className=" absolute w-32 h-52 top-0 left-0 xs:w-40 xs:h-72 xs:top-14 sm:w-48 sm:h-80 sm:top-16 md:w-48 md:h-80 md:top-20 lg:w-52 lg:h-96 lg:top-20 xl:w-60 xl:h-96 xl:top-20 xxl:w-60 xxl:h-96 xxl:top-20">
                            <Image
                                src="/images/classic-leftimage.png"
                                alt="Ice Tales Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="absolute bottom-0 right-0  w-10 h-32 xs:w-12 xs:h-56 sm:w-16 sm:h-64 md:w-20 md:h-64 lg:w-28 lg:h-72 xl:w-28 xl:h-80 xxl:w-52 xxl:h-[500px] xxl:bottom-20">
                            <Image
                                src="/images/classic-rightimage.png"
                                alt="Ice Tales Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </>
                ) : (<></>)
            }
        </section>
    )
}

export default RelatedProducts
