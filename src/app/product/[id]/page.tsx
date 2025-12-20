import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import Details from '@/components/template/product/Details'
import GalleryA from '@/components/template/product/productGallery/GalleryA'
import RelatedProducts from '@/components/template/product/RelatedProducts'
import Tab from '@/components/template/product/Tab'
import React from 'react'

interface ProductProps {
    params: {
        id: string
    }
}

function Product({ params }: ProductProps) {
    return (
        <>
            <Header variant='default' />
            <main>
                <PageHeading title={params.id} items={[{ label: "Home", href: "/" }, { label: params.id },]} />
                <section className='container mb-48'>
                    <div className=' mt-24 flex gap-16'>
                        <GalleryA/>
                        <Details/>
                    </div>
                    
                    <Tab/>
                </section>
                <RelatedProducts type='B' bgImage={false} />
            </main>
            <Footer />
        </>
    )
}

export default Product
