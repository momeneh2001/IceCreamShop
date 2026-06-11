import React from 'react'

type Role =
    | "superAdmin"
    | "admin"
    | "contentManager"
    | "salesManager"
    | "supportAgent";

type SectionItem = {
    label: string;
    value?: string;
};

type DashboardConten = {
    title: string;
    items: SectionItem[];
};

const dashboardContenByRole: Record<Role, DashboardConten[]> = {
    superAdmin: [
        {
            title: "Audit Logs",
            items: [
                { label: "Role changed", value: "John Admin" },
                { label: "Total Admins", value: "12" },
                { label: "Active Admins", value: "9" },
                { label: "Revenue", value: "$12.4K" },
            ],
        },
        {
            title: "System Health",
            items: [
                { label: "Error Rate", value: "0.4%" },
                { label: "Uptime", value: "99.9%" },
                { label: "API Latency", value: "120ms" },
                { label: "Logs", value: "OK" },
            ],
        },
    ],
    admin: [
        {
            title: "Activity Feed",
            items: [
                { label: "📝 Article published" },
                { label: "👤 New user registered" },
                { label: "💬 Comment added" },
                { label: "📦 Order placed" },
            ],
        },
        {
            title: "Support Tickets",
            items: [
                { label: "🔴 3 Open tickets" },
                { label: "🟡 2 Pending response" },
                { label: "🟢 12 Resolved" },
            ],
        },
        {
            title: "Sales Summary",
            items: [
                { label: "💰 Revenue", value: "$12.4K" },
                { label: "📈 Growth", value: "+18%" },
                { label: "🛒 Orders", value: "210" },
            ],
        },
    ],

    contentManager: [
        {
            title: "Content Activity",
            items: [
                { label: "📝 New article published" },
                { label: "✏️ Article updated" },
                { label: "💬 Comment approved" },
                { label: "🗂 Category created" },
            ],
        },
        {
            title: "CMS Status",
            items: [
                { label: "🏠 Home Page ✔" },
                { label: "ℹ️ About Page ✔" },
                { label: "❓ FAQ ⚠ Needs update" },
                { label: "📄 Terms ✔" },
            ],
        },
        {
            title: "Media Library",
            items: [
                { label: "🖼 Images", value: "320" },
                { label: "🎥 Videos", value: "45" },
                { label: "📁 Assets", value: "175" },
                { label: "⬆️ Uploads today", value: "12" },
            ],
        },
    ],

    salesManager: [
        {
            title: "Recent Orders",
            items: [
                { label: "🛒 Order #1024 - Paid" },
                { label: "🛒 Order #1023 - Pending" },
                { label: "🛒 Order #1022 - Shipped" },
                { label: "🛒 Order #1021 - Delivered" },
            ],
        },
        {
            title: "Top Products",
            items: [
                { label: "🔥 Product A - 120 sales" },
                { label: "🔥 Product B - 98 sales" },
                { label: "🔥 Product C - 75 sales" },
                { label: "🔥 Product D - 60 sales" },
            ],
        },
        {
            title: "Discount Campaigns",
            items: [
                { label: "🏷️ Summer Sale - 20%" },
                { label: "🏷️ Black Friday - 50%" },
                { label: "🏷️ New User - 10%" },
                { label: "🏷️ Clearance - 70%" },
            ],
        },
    ],

    supportAgent: [
        {
            title: "Ticket Queue",
            items: [
                { label: "🔴 #1024 - Payment issue" },
                { label: "🟡 #1023 - Login problem" },
                { label: "🟢 #1022 - Account question" },
                { label: "🔴 #1021 - Bug report" },
            ],
        },
        {
            title: "User Messages",
            items: [
                { label: "💬 I can't login" },
                { label: "💬 Payment failed" },
                { label: "💬 Reset password?" },
                { label: "💬 Bug in checkout page" },
            ],
        },
        {
            title: "System Status",
            items: [
                { label: "🟢 System: Stable" },
                { label: "🟡 Load: Medium" },
                { label: "🔴 Critical Issues: 1" },
                { label: "⚡ API: Healthy" },
            ],
        },
    ],
};

interface DashboardContentSectionsProps {
    role: Role;
}


function DashboardContentSections({ role }: DashboardContentSectionsProps) {
    const sections = dashboardContenByRole[role] ?? [];

    return (
        <>
            <section className="flex flex-wrap gap-6 mb-10">
                {sections.map((section) => (
                    <div
                        key={section.title}
                        className={`bg-slate-800 border border-slate-700 p-5 rounded-lg w-full ${role === "superAdmin" ? "md:w-[calc(50%-12px)]" : "md:w-[calc(33.333%-16px)]"}`}>
                        <h3 className="font-semibold mb-4">
                            {section.title}
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-300">
                            {section.items.map((item) => (
                                <li key={item.label}>
                                    {item.label} {item.value ? `: ${item.value}`:``}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </>
    );
}
export default DashboardContentSections