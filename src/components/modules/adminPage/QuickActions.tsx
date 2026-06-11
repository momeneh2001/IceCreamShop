import React from 'react'

type Role = | "superAdmin" | "admin" | "contentManager" | "salesManager" | "supportAgent";


// back
const quickActionsByRole: Record<Role, string[]> = {
    superAdmin: [
        "Create Admin",
        "Create Role",
        "Manage Permissions",
        "View Audit Logs",
        "System Settings",
    ],
    admin: [
        "Create Article",
        "Create Product",
        "Upload Media",
        "Create User",
        "View Tickets",
    ],
    contentManager: [
        "Create Article",
        "Edit Pages",
        "Upload Media",
        "Manage Categories",
        "Moderate Comments",
    ],
    salesManager: [
        "Create Product",
        "Update Price",
        "Manage Discounts",
        "View Orders",
        "Check Inventory",
    ],
    supportAgent: [
        "View Tickets",
        "Reply to User",
        "Change Ticket Status",
        "Assign Ticket",
        "Close Ticket",
    ],
};
interface QuickActionsProps {
    role: Role;
}


function QuickActions({ role }: QuickActionsProps) {
    const actions = quickActionsByRole[role];
  
    return (
        <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">System Controls</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {actions.map((item) => (
                    <button
                        key={item}
                        className=" bg-slate-800 hover:bg-slate-700 border border-slate-700 transition  p-4 rounded-lg  text-sm font-medium">
                        {item}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default QuickActions
