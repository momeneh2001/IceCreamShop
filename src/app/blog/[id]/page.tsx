import React from "react";
import { notFound } from "next/navigation";

import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import PageHeading from "@/components/modules/pageHeading/PageHeading";

import SingleBlog from "@/components/template/blog/singleBlog/SingleBlog";
import BlogTwoCol from "@/components/template/blog/blogTwoCol/BlogTwoCol";
import BlogOneCol from "@/components/template/blog/blogOneCol/BlogOneCol";
import BlogThreeCol from "@/components/template/blog/blogThreeCol/BlogThreeCol";
import BlogFourCol from "@/components/template/blog/blogFourCol/BlogFourCol";
import LodeMore from "@/components/template/blog/lodeMore/LodeMore";

interface BlogPageProps {
    params: {
        id: string;
    };
}


const blogComponents: Record<string, React.ComponentType> = {
    "single-blog": SingleBlog,
    "blog-one-col": BlogOneCol,
    "blog-two-col": BlogTwoCol,
    "blog-three-col": BlogThreeCol,
    "blog-four-col": BlogFourCol,
    "load-more": LodeMore,
};
const blogLabels: Record<string, string> = {
    "single-blog": "Single Blog",
    "blog-one-col": "Blog One Column",
    "blog-two-col": "Blog Two Column",
    "blog-three-col": "Blog Three Column",
    "blog-four-col": "Blog Four Column",
    "load-more": "Load More",
};

function Blogpage({ params }: BlogPageProps) {
    const Component = blogComponents[params.id];
    const label = blogLabels[params.id] ?? params.id;

    if (!Component) {
        notFound();
    }

    return (
        <>
            <Header />

            <main>
                <PageHeading title={label} items={[{ label: "Home", href: "/" },{ label: label }]}/>
                <Component />
            </main>
            <Footer />
        </>
    );
}

export default Blogpage;