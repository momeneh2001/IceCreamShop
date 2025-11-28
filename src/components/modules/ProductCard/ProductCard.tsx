import React from 'react'
import ProductCardVariantA from './ProductCardVariantA'
import ProductCardVariantB from './ProductCardVariantB'
import ProductCardVariantC from './ProductCardVariantC'

function ProductCard() {
    return (
        <section className='flex gap-6 items-center justify-evenly bg-ice-gradient py-36'>
            <ProductCardVariantA />
            <ProductCardVariantB />
            <ProductCardVariantC />
        </section>
    )
}

export default ProductCard
