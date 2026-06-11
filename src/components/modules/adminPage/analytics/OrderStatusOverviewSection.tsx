import React from 'react'

function OrderStatusOverviewSection() {
    return (
        <section className="relative py-10 space-y-6 border-y border-slate-700/40">

            <div>
                <h2 className="text-2xl font-bold text-white">
                    Order Status Overview
                </h2>

                <p className="text-slate-400 mt-1">
                    Distribution of orders across different fulfillment stages.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                {/* Pie Chart */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-6">
                        Orders Distribution
                    </h3>

                    {/* Pie Chart Here */}
                    <div className="h-[320px] flex items-center justify-center">
                        {/* Recharts PieChart */}
                    </div>
                </div>

                {/* Status Details */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">

                    <div className="px-6 py-5 border-b border-slate-700">
                        <h3 className="text-lg font-semibold text-white">
                            Order Status Details
                        </h3>
                    </div>

                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-900/50 border-b border-slate-700">
                                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-400">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-right text-xs font-semibold uppercase text-slate-400">
                                    Orders
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="border-b border-slate-700/50">
                                <td className="px-6 py-4 text-slate-200">
                                    Pending
                                </td>
                                <td className="px-6 py-4 text-right text-yellow-400 font-semibold">
                                    42
                                </td>
                            </tr>

                            <tr className="border-b border-slate-700/50">
                                <td className="px-6 py-4 text-slate-200">
                                    Preparing
                                </td>
                                <td className="px-6 py-4 text-right text-blue-400 font-semibold">
                                    38
                                </td>
                            </tr>

                            <tr className="border-b border-slate-700/50">
                                <td className="px-6 py-4 text-slate-200">
                                    Shipped
                                </td>
                                <td className="px-6 py-4 text-right text-cyan-400 font-semibold">
                                    27
                                </td>
                            </tr>

                            <tr className="border-b border-slate-700/50">
                                <td className="px-6 py-4 text-slate-200">
                                    Delivered
                                </td>
                                <td className="px-6 py-4 text-right text-emerald-400 font-semibold">
                                    156
                                </td>
                            </tr>

                            <tr>
                                <td className="px-6 py-4 text-slate-200">
                                    Cancelled
                                </td>
                                <td className="px-6 py-4 text-right text-red-400 font-semibold">
                                    11
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

            </div>

        </section>
    )
}

export default OrderStatusOverviewSection
