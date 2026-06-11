import React from 'react'

type Role = | "superAdmin" | "admin" | "contentManager" | "salesManager" | "supportAgent";
type OverviewItem = {
    label: string;
    value?: string;
};
type OverviewSection = {
    title: string;
    items: OverviewItem[];
};
export const dashboardSectionsByRole: Record<Role, OverviewSection[]> = {
    superAdmin: [
        {
            title: "CMS Status",
            items: [
                { label: "🏠 Pages", value: "9 active" },
                { label: "❓ FAQ", value: "needs update" },
                { label: "📄 Terms", value: "updated" },
                { label: "🧾 Content health", value: "Good" },
            ],
        },
        {
            title: "Users Overview",
            items: [
                { label: "👤 Total Users", value: "1240" },
                { label: "🧠 Admins", value: "12" },
                { label: "🟢 Active", value: "980" },
                { label: "🔒 Suspended", value: "8" },
            ],
        },
    ],
    admin: [
        {
            title: "CMS Status",
            items: [
                { label: "🏠 Home Page", value: "✔" },
                { label: "ℹ️ About Page", value: "✔" },
                { label: "❓ FAQ", value: "⚠ Needs update" },
                { label: "📄 Terms", value: "✔" },
            ],
        },
        {
            title: "Users Overview",
            items: [
                { label: "👤 Total Users", value: "1240" },
                { label: "🆕 New This Week", value: "32" },
                { label: "🟢 Active", value: "980" },
                { label: "🔒 Admins", value: "12 (read-only)" },
            ],
        },
    ],
    contentManager: [
        {
            title: "Content Performance",
            items: [
                { label: "👁 Total Views", value: "48K" },
                { label: "🔥 Top Article", value: "Getting Started" },
                { label: "📈 Engagement", value: "+22%" },
                { label: "⏱ Avg Read Time", value: "3m 40s" },
            ],
        },
        {
            title: "User Interaction",
            items: [
                { label: "💬 Comments", value: "320" },
                { label: "👍 Likes", value: "1.2K" },
                { label: "🔄 Shares", value: "180" },
                { label: "👤 New Users", value: "32" },
            ],
        },
    ],
    salesManager: [
        {
            title: "Inventory Status",
            items: [
                { label: "📦 In Stock", value: "540 items" },
                { label: "⚠️ Low Stock", value: "12 products" },
                { label: "❌ Out of Stock", value: "5 products" },
                { label: "🔄 Restock Needed", value: "8 items" },
            ],
        },
        {
            title: "Performance",
            items: [
                { label: "📈 Growth", value: "+18%" },
                { label: "💰 Revenue", value: "$12.4K" },
                { label: "🎯 Conversion Rate", value: "3.2%" },
                { label: "🔁 Return Rate", value: "2.1%" },
            ],
        },
    ],
    supportAgent: [
        {
            title: "CMS (Read Only)",
            items: [
                { label: "🏠 Home Page", value: "✔" },
                { label: "ℹ️ About Page", value: "✔" },
                { label: "❓ FAQ", value: "✔" },
                { label: "📄 Terms", value: "✔" },
            ],
        },
        {
            title: "User Info (Limited)",
            items: [
                { label: "👤 Total Users", value: "1240" },
                { label: "🆕 New Today", value: "8" },
                { label: "⚠️ Reported Users", value: "5" },
                { label: "🔒 Access", value: "No admin access" },
            ],
        },
    ],
};

interface OverviewPanelProps {
    role: Role;
}


function OverviewPanel({ role }: OverviewPanelProps) {
    const sections = dashboardSectionsByRole[role];
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
                <div
                    key={section.title}
                    className="bg-slate-800 border border-slate-700 p-5 rounded-lg"
                >
                    <h3 className="font-semibold mb-4">{section.title}</h3>

                    <ul className="text-sm space-y-2 text-gray-300">
                        {section.items.map((item, index) => (
                            <li key={`${item.label}-${index}`}>
                                {item.label}
                                {item.value ? (
                                    <span className="text-gray-400"> : {item.value}</span>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {/* </section> */}


            {/* <div className="bg-slate-800 border border-slate-700 p-5 rounded-lg">
                <h3 className="font-semibold mb-4">Users Overview</h3>
                <ul className="text-sm space-y-2 text-gray-300">
                    <li>👤 Total Users: 1240</li>
                    <li>🧠 Admins: 12</li>
                    <li>🟢 Active: 980</li>
                    <li>🔒 Suspended: 8</li>
                </ul>
            </div> */}

        </section>
    )
}

export default OverviewPanel
