import React from 'react'
import Breadcrumb, { Crumb } from "../breadcrumb/Breadcrumb";

interface PageHeadingProps {
    title: string;
    items: Crumb[];
} 

function PageHeading({ title, items }: PageHeadingProps) {
    return (
        <section className="bg-ice-gradient h-[467px]">
            <div className="h-full flex flex-col items-center justify-center">
                <h2 className="text-7xl text-center mb-9">{title}</h2>
                <Breadcrumb items={items} />
            </div>
        </section>
    )
}

export default PageHeading
