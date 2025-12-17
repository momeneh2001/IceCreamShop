import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import ProductCardVariantC from '@/components/modules/ProductCard/ProductCardVariantC'
import ProductsPagination from '@/components/template/productsPagination/ProductsPagination'
import ProductsSidebar from '@/components/template/productsSidebar/ProductsSidebar'
import React from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { IoIosArrowForward, IoMdArrowDropdown } from 'react-icons/io'
import { TfiMenuAlt } from 'react-icons/tfi'

interface ShopPageProps {
    params: {
        id: string
    }
}

function Shop({ params }: ShopPageProps) {
    return (
        <>
            <Header />
            <PageHeading title={`${params.id} shop`} items={[{ label: "Home", href: "/" }, { label: `${params.id} shop` },]} />
            <main className="bg-gray-50 px-4 xs:px-6 md:px-8 py-24 md:py-32 lg:py-40">
                <div className="container mx-auto max-w-[1300px] flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Sidebar update later */}
                    <aside className="hidden xl:block w-full lg:w-[280px] shrink-0">
                        <ProductsSidebar />
                    </aside>

                    {/* Products */}
                    <section className="flex-1 w-full">
                        <ProductsPagination />
                    </section>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Shop