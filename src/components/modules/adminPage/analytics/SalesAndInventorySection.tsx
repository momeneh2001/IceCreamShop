import React from 'react'

function SalesAndInventorySection() {
    return (
        <section className="relative py-10 space-y-6 border-y border-slate-700/40">

            <div>
                <h2 className="text-2xl font-bold text-white">
                    Sales & Inventory
                </h2>

                <p className="text-slate-400 mt-1">
                    Daily sales performance and current ice cream stock levels.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                {/* Sales Table */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">

                    <div className="px-6 py-5 border-b border-slate-700">
                        <h3 className="text-lg font-semibold text-white">
                            Daily Sales Report
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">

                            <thead>
                                <tr className="bg-slate-900/50 border-b border-slate-700">
                                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-400">
                                        Date
                                    </th>

                                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase text-slate-400">
                                        New Users
                                    </th>

                                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase text-slate-400">
                                        Orders
                                    </th>

                                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase text-slate-400">
                                        Revenue
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-slate-700/50 hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        2026/06/01
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        25
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        12
                                    </td>

                                    <td className="px-6 py-4 text-right font-semibold text-emerald-400">
                                        $500
                                    </td>
                                </tr>

                                <tr className="hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        2026/06/02
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        30
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        15
                                    </td>

                                    <td className="px-6 py-4 text-right font-semibold text-emerald-400">
                                        $720
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                </div>

                {/* Inventory Table */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">

                    <div className="px-6 py-5 border-b border-slate-700">
                        <h3 className="text-lg font-semibold text-white">
                            Ice Cream Inventory
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">

                            <thead>
                                <tr className="bg-slate-900/50 border-b border-slate-700">
                                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-400">
                                        Product
                                    </th>

                                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase text-slate-400">
                                        Stock
                                    </th>

                                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase text-slate-400">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-slate-700/50 hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        Vanilla Ice Cream
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        120
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <span className="text-emerald-400 font-medium">
                                            In Stock
                                        </span>
                                    </td>
                                </tr>

                                <tr className="border-b border-slate-700/50 hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        Chocolate Ice Cream
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        80
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <span className="text-emerald-400 font-medium">
                                            In Stock
                                        </span>
                                    </td>
                                </tr>

                                <tr className="hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        Strawberry Ice Cream
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        12
                                    </td>

                                    <td className="px-6 py-4 text-right">
                                        <span className="text-red-400 font-medium">
                                            Low Stock
                                        </span>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default SalesAndInventorySection
