import React from 'react'


type DashboardStat = {
    label: string;
    value: string | number;
};

type Role = | "superAdmin" | "admin" | "contentManager" | "salesManager" | "supportAgent";

const kpiCardsByRole: Record<string, DashboardStat[]> = {
    superAdmin: [
        { label: "Total Users", value: 1240 },
        { label: "Total Admins", value: 12 },
        { label: "Active Admins", value: 9 },
        { label: "Revenue", value: "$12.4K" },
        { label: "Orders", value: 210 },
        { label: "Error Rate", value: "0.4%" },
    ],
    admin: [
        { label: "Users", value: 1240 },
        { label: "New Users", value: 32 },
        { label: "Articles", value: 86 },
        { label: "Orders", value: 210 },
        { label: "Revenue", value: "$12.4K" },
        { label: "Tickets", value: 7 },
    ],
    contentManager: [
        { label: "Articles", value: 86 },
        { label: "Drafts", value: 14 },
        { label: "Published", value: 72 },
        { label: "Comments", value: 320 },
        { label: "Media Files", value: 540 },
        { label: "Categories", value: 12 },
    ],
    salesManager: [
        { label: "Orders", value: 210 },
        { label: "Revenue", value: "$12.4K" },
        { label: "New Orders", value: 18 },
        { label: "Conversion", value: "3.2%" },
        { label: "Products", value: 86 },
        { label: "Refunds", value: 4 },
    ],
    supportAgent: [
        { label: "Open Tickets", value: 3 },
        { label: "Pending", value: 2 },
        { label: "Resolved", value: 12 },
        { label: "Total Today", value: 17 },
        { label: "Avg Response", value: "2h 10m" },
        { label: "Satisfaction", value: "92%" },
    ],
};

interface SystemKIPProps {
    role: Role;
}

function SystemKIP({ role }:SystemKIPProps) {
    const actions = kpiCardsByRole[role];
    return (
        <section className="mb-10">
            <h2 className="text-lg font-semibold mb-4">System Overview</h2>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {actions.map((item) => (
                    <div
                        key={item.label}
                        className="bg-slate-800 border border-slate-700 p-4 rounded-lg"
                    >
                        <p className="text-xs text-gray-400">{item.label}</p>
                        <p className="text-xl font-bold">{item.value}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SystemKIP
