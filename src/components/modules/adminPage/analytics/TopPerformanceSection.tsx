import React from 'react'

function TopPerformanceSection() {
    return (
        <section className="relative py-10 space-y-6 border-y border-slate-700/40">

            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-white">
                    Top Lists
                </h2>

                <p className="text-slate-400 mt-1">
                    Most active users, most viewed articles and best-selling products.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

                {/* Top Users */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                    <div className="p-5 border-b border-slate-700">
                        <h3 className="text-lg font-semibold text-white">
                            Top Users
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase">
                                        User
                                    </th>
                                    <th className="text-right px-5 py-3 text-xs font-medium text-slate-400 uppercase">
                                        Activity
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-slate-700/50 hover:bg-slate-700/20">
                                    <td className="px-5 py-4 text-slate-200">Ali</td>
                                    <td className="px-5 py-4 text-right font-semibold text-white">
                                        120
                                    </td>
                                </tr>

                                <tr className="hover:bg-slate-700/20">
                                    <td className="px-5 py-4 text-slate-200">Sara</td>
                                    <td className="px-5 py-4 text-right font-semibold text-white">
                                        100
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Articles */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                    <div className="p-5 border-b border-slate-700">
                        <h3 className="text-lg font-semibold text-white">
                            Top Articles
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase">
                                        Article
                                    </th>
                                    <th className="text-right px-5 py-3 text-xs font-medium text-slate-400 uppercase">
                                        Views
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="hover:bg-slate-700/20">
                                    <td className="px-5 py-4 text-slate-200">
                                        React Guide
                                    </td>

                                    <td className="px-5 py-4 text-right font-semibold text-white">
                                        10K
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Products */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                    <div className="p-5 border-b border-slate-700">
                        <h3 className="text-lg font-semibold text-white">
                            Best Selling Products
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase">
                                        Product
                                    </th>

                                    <th className="text-right px-5 py-3 text-xs font-medium text-slate-400 uppercase">
                                        Sales
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="hover:bg-slate-700/20">
                                    <td className="px-5 py-4 text-slate-200">
                                        Laptop
                                    </td>

                                    <td className="px-5 py-4 text-right font-semibold text-white">
                                        450
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

export default TopPerformanceSection
