import Footer from '@/components/modules/footer/Footer'
import Header from '@/components/modules/header/Header'
import PageHeading from '@/components/modules/pageHeading/PageHeading'
import Blog from '@/components/template/blog/Blog'
import Link from 'next/link'
import React from 'react'


function page() {
    return (
        <>
            <Header variant='glass' />
            <main>
                <PageHeading title="Blog" items={[{ label: "Home", href: "/" }, { label: "Blog" },]} />
                <Blog />
            </main>
            <Footer />
        </>
    )
}

export default page
