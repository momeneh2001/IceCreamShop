import React from 'react'

function AdminDirectory() {
    return (
        <section className="mb-10">
            <h2 className="text-lg font-semibold mb-4 text-red-400">
                Admin Management
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    {
                        name: "John Admin",
                        role: "Admin",
                        status: "Active",
                        lastLogin: "2h ago",
                    },
                    {
                        name: "Sara Content",
                        role: "Content Manager",
                        status: "Active",
                        lastLogin: "1d ago",
                    },
                    {
                        name: "Mike Sales",
                        role: "Sales Manager",
                        status: "Suspended",
                        lastLogin: "5d ago",
                    },
                    {
                        name: "Anna Support",
                        role: "Support Agent",
                        status: "Active",
                        lastLogin: "3h ago",
                    },
                ].map((admin) => (
                    <div
                        key={admin.name}
                        className="bg-slate-800 border border-slate-700 p-4 rounded-lg"
                    >
                        <div className="flex justify-between">
                            <p className="font-semibold">{admin.name}</p>
                            <span className="text-xs text-gray-400">{admin.role}</span>
                        </div>

                        <p className="text-sm text-gray-400 mt-2">
                            Status: {admin.status}
                        </p>
                        <p className="text-xs text-gray-500">
                            Last login: {admin.lastLogin}
                        </p>

                        <div className="flex gap-2 mt-3">
                            <button className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded transition">
                                View
                            </button>
                            <button className="text-xs px-3 py-1 bg-yellow-600 hover:bg-yellow-500 rounded transition">
                                Role
                            </button>
                            <button className="text-xs px-3 py-1 bg-red-600 hover:bg-red-500 rounded transition">
                                Suspend
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default AdminDirectory
