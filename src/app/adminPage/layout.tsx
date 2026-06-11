import React from "react";
import Sidebar from "@/components/modules/adminPage/Sidebar";


import { redirect } from "next/navigation";
import Topbar from "@/components/modules/adminPage/Topbar";

export const metadata = {
  title: "Allora Shop",
  description: "Allora Shop — a modern and responsive e-commerce platform built with Next.js 13 and Tailwind CSS.",
  icons: {
    icon: "/images/SparkNest.jpg",
  },
};


export default async function AdminLayout({ children, }: { children: React.ReactNode; }) {

 
  // console.log(user.name)

  return (
    <div className="bg-gray-600 w-full text-black min-h-screen">
      <section className="flex">
        <Sidebar/>
        <div className="flex-1">
          <Topbar/>
          <>{children}</>
        </div>
      </section>
    </div>
  );
}
