import React from 'react'
// TODO: Implement product card for Variant C
function IntroVariantB() {
    let title = "Relive the Sweet Memories of Classic Ice Creams";
    const words = title.split(" ");
    const lastTwoWordsIndex = words.length - 2
    return (
        <section className='my-16'>
            <div className='container'>
                <div className='flex flex-col'>
                    {/* text */}
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-6xl inline-block mb-6'>Our Popular <span className='text-hotPink'>Vegan</span> Treats</h2>
                        <p>Check out our favorite vegan ice cream flavors.</p>
                    </div>
                    {/* swiper */}
                    <div>
                        {/* // TODO: Product card for Variant C is not implemented yet; will develop later*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroVariantB
