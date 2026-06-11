"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { MdBarChart, MdDashboard, MdImage, MdMenu, MdPages, MdSecurity, MdSettings, MdShoppingCart, MdSupport, MdViewModule } from "react-icons/md";
import { FaFileAlt, FaUsers } from "react-icons/fa";
import { IoMdMail, IoMdMailOpen} from "react-icons/io";
import { FiChevronDown, FiMoon, FiSun } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaUserTie } from "react-icons/fa6";


const menu = [
  {
    title: "Dashboard",
    icon: MdDashboard,
    children: [
      { title: "Overview", href: "/adminPage" },
      { title: "Analytics", href: "/adminPage/dashboard/analytics" },
      { title: "Activity", href: "/adminPage/dashboard/activity" },
    ],
  },
  {
    title: "CMS Pages",
    icon: MdPages,
    children: [
      { title: "Home", href: "/adminPage/pages/home" },
      { title: "About", href: "/adminPage/pages/about" },
      { title: "Team", href: "/adminPage/pages/team" },
      { title: "Offers", href: "/adminPage/pages/offers" },
      { title: "FAQ", href: "/adminPage/pages/faq" },
      { title: "Contact", href: "/adminPage/pages/contact" },
      { title: "Privacy Policy", href: "/adminPage/pages/privacy" },
      { title: "Terms & Conditions", href: "/adminPage/pages/terms" },
      { title: "Thank You Page", href: "/adminPage/pages/thank-you" },
    ],
  },
  {
    title: "System Sections",
    icon: MdViewModule,
    children: [
      { title: "Header", href: "/adminPage/sections/header" },
      { title: "Footer", href: "/adminPage/sections/footer" },
      { title: "Navigation", href: "/adminPage/sections/navigation" },
      { title: "Newsletter Section", href: "/adminPage/sections/newsletter" },
      { title: "Promo Section", href: "/adminPage/sections/promo" },
      { title: "Commitments Section", href: "/adminPage/sections/commitments" },
    ],
  },
  {
    title: "Media",
    icon: MdImage,
    children: [
      { title: "Upload", href: "/adminPage/media/upload" },
      { title: "Gallery", href: "/adminPage/media/gallery" },
      { title: "Videos", href: "/adminPage/media/videos" },
      { title: "Assets", href: "/adminPage/media/assets" },
    ],
  },
  {
    title: "Navigation Builder",
    icon: MdMenu,
    children: [
      { title: "Main Menu", href: "/adminPage/navigation/main" },
      { title: "Mobile Menu", href: "/adminPage/navigation/mobile" },
      { title: "Footer Menu", href: "/adminPage/navigation/footer" },
      { title: "Ordering", href: "/adminPage/navigation/ordering" },
    ],
  },
  {
    title: "Newsletter & Email",
    icon: IoMdMail,
    children: [
      { title: "Subscribers", href: "/adminPage/newsletter/subscribers" },
      { title: "Campaigns", href: "/adminPage/newsletter/campaigns" },
      { title: "Send Email", href: "/adminPage/newsletter/send" },
    ],
  },
  {
    title: "Users",
    icon: FaUsers,
    children: [
      { title: "User List", href: "/adminPage/users" },
      { title: "Create User", href: "/adminPage/users/create" },
      { title: "Roles", href: "/adminPage/users/roles" },
      { title: "Permissions", href: "/adminPage/users/permissions" },
      { title: "Access Control", href: "/adminPage/users/access-control" },
    ],
  },
  {
    title: "Security & Logs",
    icon: MdSecurity,
    children: [
      { title: "Login Logs", href: "/adminPage/security/login-logs" },
      { title: "Audit Logs", href: "/adminPage/security/audit-logs" },
      { title: "Active Sessions", href: "/adminPage/security/sessions" },
      { title: "Security Events", href: "/adminPage/security/events" },
    ],
  },
  {
    title: "Content",
    icon: FaFileAlt,
    children: [
      { title: "Articles", href: "/adminPage/content/articles" },
      { title: "Create Article", href: "/adminPage/content/create" },
      { title: "Categories", href: "/adminPage/content/categories" },
      { title: "Comments", href: "/adminPage/content/comments" },
      { title: "Reviews", href: "/adminPage/content/reviews" },
      { title: "FAQ", href: "/adminPage/content/faq" },
      { title: "Featured Content", href: "/adminPage/content/featured" },
    ],
  },
  {
    title: "Team",
    icon: FaUserTie,
    children: [
      { title: "Members", href: "/adminPage/team/members" },
      { title: "Profiles", href: "/adminPage/team/profiles" },
    ],
  },
  {
    title: "Support",
    icon: MdSupport,
    children: [
      { title: "Tickets", href: "/adminPage/support/tickets" },
      { title: "Contact Messages", href: "/adminPage/support/messages" },
      { title: "Status", href: "/adminPage/support/status" },
    ],
  },
  {
    title: "Messaging",
    icon: IoMdMailOpen,
    href: "/adminPage/messaging",
  },
  {
    title: "Sales",
    icon: MdShoppingCart,
    children: [
      { title: "Products", href: "/adminPage/sales/products" },
      { title: "Orders", href: "/adminPage/sales/orders" },
      { title: "Discounts", href: "/adminPage/sales/discounts" },
      { title: "Inventory", href: "/adminPage/sales/inventory" },
    ],
  },
  {
    title: "Reports",
    icon: MdBarChart,
    children: [
      { title: "Users", href: "/adminPage/reports/users" },
      { title: "Content", href: "/adminPage/reports/content" },
      { title: "Sales", href: "/adminPage/reports/sales" },
      { title: "Traffic", href: "/adminPage/reports/traffic" },
    ],
  },
  {
    title: "Settings",
    icon: MdSettings,
    children: [
      { title: "General", href: "/adminPage/settings/general" },
      { title: "SEO", href: "/adminPage/settings/seo" },
      { title: "Branding", href: "/adminPage/settings/branding" },
      { title: "Social Media", href: "/adminPage/settings/social" },
      { title: "Security", href: "/adminPage/settings/security" },
      { title: "Access Control", href: "/adminPage/settings/access-control" },
    ],
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <aside
      className={`h-screen flex flex-col justify-between bg-slate-800 text-white
  sticky top-0 overflow-y-auto
  transition-all duration-300
  ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* HEADER */}
      <div className="relative h-16 max-w-64 flex items-center justify-between px-3 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Ice Tales Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />

          {isOpen && (
            <span className="text-white font-semibold">IcyTales</span>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" absolute right-0 flex items-center justify-center w-8 h-8 text-gray-300 hover:text-white transition-all duration-200 active:scale-90 rounded-l-full">
          {isOpen ? (
            <IoIosArrowBack className="text-xl" />
          ) : (
            <IoIosArrowForward className="text-xl" />
          )}
        </button>
      </div>
      {/* MENU */}
      <div className="flex-1 overflow-y-auto py-4 pr-1 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-500">
        {menu.map((item, index) => {
          const Icon = item.icon;
          const hasChildren = !!item.children;

          return (
            <div key={index}>
              {/* MAIN ITEM */}
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-4 py-2 text-white hover:bg-slate-700"
                >
                  <div className={`flex items-center ${isOpen ? "gap-3" : "justify-center"}`}>
                    <Icon
                      className={`transition-all duration-200 ${isOpen ? "text-xl" : "text-3xl"
                        }`}
                    />

                    {isOpen && <span>{item.title}</span>}
                  </div>
                </Link>
              ) : (
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-slate-700"
                >
                  <div className={`flex items-center ${isOpen ? "gap-3" : "justify-center"}`}>
                    <Icon
                      className={`transition-all duration-200 ${isOpen ? "text-xl" : "text-3xl"
                        }`}
                    />

                    {isOpen && <span>{item.title}</span>}
                  </div>

                  {/* ARROW INDICATOR */}
                  {isOpen && hasChildren && (
                    <FiChevronDown
                      className={`transition-transform duration-200 ${openMenu === index ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </button>

              )}

              {/* SUB MENU */}
              {hasChildren && openMenu === index && isOpen && (
                <div className="ml-10 mt-1 flex flex-col gap-1">
                  {item.children.map((child, i) => (
                    <Link
                      key={i}
                      href={child.href}
                      className="text-sm text-gray-300 hover:text-white hover:bg-slate-700/60 px-2 py-1 rounded transition"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* FOOTER */}
      <div className="border-t border-gray-700 p-3 space-y-3">
        {/* THEME */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`flex items-center text-white transition-all duration-200 w-full px-4 py-2 rounded hover:bg-slate-700 ${isOpen ? "gap-3" : "justify-center"
            }`}
        >
          {theme === "light" ? (
            <FiSun
              className={`transition-all duration-200 ${isOpen ? "text-xl" : "text-2xl"
                }`}
            />
          ) : (
            <FiMoon
              className={`transition-all duration-200 ${isOpen ? "text-xl" : "text-2xl"
                }`}
            />
          )}

          {isOpen && <span>Theme</span>}
        </button>
        {/* PROFILE */}
        <div
          className={`flex items-center text-white ${isOpen ? "justify-between" : "justify-center"
            }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/userimg.jpg"
                alt="user"
                width={40}
                height={40}
              />
            </div>

            {isOpen && (
              <div>
                <p className="text-sm">Mohammad</p>
                <p className="text-xs text-gray-400">adminPage</p>
              </div>
            )}
          </div>

          {isOpen && (
            <button className="p-2 rounded-full hover:bg-slate-700 transition">
              <IoExitOutline className="text-xl text-red-400" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;