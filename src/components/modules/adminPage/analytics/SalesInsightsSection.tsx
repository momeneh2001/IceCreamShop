import React from 'react'

function SalesInsightsSection() {
    return (
        <section className="relative py-10 space-y-6 border-y border-slate-700/40">

            <div>
                <h2 className="text-2xl font-bold text-white">
                    Sales Insights
                </h2>

                <p className="text-slate-400 mt-1">
                    Peak sales periods and preferred customer payment methods.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                {/* Peak Sales Hours */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">

                    <div className="px-6 py-5 border-b border-slate-700">
                        <h3 className="text-lg font-semibold text-white">
                            Peak Sales Hours
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">

                            <thead>
                                <tr className="bg-slate-900/50 border-b border-slate-700">
                                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-400">
                                        Time Range
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
                                        10:00 - 12:00
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        84
                                    </td>

                                    <td className="px-6 py-4 text-right text-emerald-400 font-semibold">
                                        $1,250
                                    </td>
                                </tr>

                                <tr className="border-b border-slate-700/50 hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        14:00 - 16:00
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        127
                                    </td>

                                    <td className="px-6 py-4 text-right text-emerald-400 font-semibold">
                                        $2,180
                                    </td>
                                </tr>

                                <tr className="hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        18:00 - 21:00
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        196
                                    </td>

                                    <td className="px-6 py-4 text-right text-emerald-400 font-semibold">
                                        $3,940
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>

                {/* Payment Methods */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">

                    <div className="px-6 py-5 border-b border-slate-700">
                        <h3 className="text-lg font-semibold text-white">
                            Payment Methods
                        </h3>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">

                            <thead>
                                <tr className="bg-slate-900/50 border-b border-slate-700">
                                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-400">
                                        Method
                                    </th>

                                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase text-slate-400">
                                        Transactions
                                    </th>

                                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase text-slate-400">
                                        Share
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-slate-700/50 hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        Credit Card
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        520
                                    </td>

                                    <td className="px-6 py-4 text-right text-cyan-400 font-semibold">
                                        52%
                                    </td>
                                </tr>

                                <tr className="border-b border-slate-700/50 hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        Online Wallet
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        310
                                    </td>

                                    <td className="px-6 py-4 text-right text-cyan-400 font-semibold">
                                        31%
                                    </td>
                                </tr>

                                <tr className="hover:bg-slate-700/20">
                                    <td className="px-6 py-4 text-slate-200">
                                        Cash
                                    </td>

                                    <td className="px-6 py-4 text-center text-white">
                                        170
                                    </td>

                                    <td className="px-6 py-4 text-right text-cyan-400 font-semibold">
                                        17%
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

export default SalesInsightsSection
