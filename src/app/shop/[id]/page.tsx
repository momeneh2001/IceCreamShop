import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import ProductsPagination from '@/components/template/productsPagination/ProductsPagination'
import ProductsSidebar from '@/components/template/productsSidebar/ProductsSidebar'
import React from 'react'

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
            <main className="container bg-[#F5F5F5] mx-auto px-4 py-40">
                <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-4 gap-6">

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <ProductsSidebar />
                    </aside>

                    {/* Products */}
                    <section className="lg:col-span-3">
                        <ProductsPagination />
                    </section>

                </div>
            </main>


            <Footer />
        </>
    )
}

export default Shop