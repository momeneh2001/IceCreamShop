import React from 'react'

function SectionOverview() {
    return (
        <section className="relative py-10 space-y-6 border-b border-slate-700/60">
            {/* Section Header  */}
            <div>
                <h2 className="text-2xl font-bold text-white">
                    Overview Analytics
                </h2>
                <p className="text-slate-400 mt-1">
                    Quick summary of platform performance and key metrics
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                {/* Total Users */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300">
                    <p className="text-sm text-slate-400">Total Users</p>
                    <h3 className="text-3xl font-bold text-white mt-2">
                        12,450
                    </h3>
                </div>

                {/* Active Users Today */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300">
                    <p className="text-sm text-slate-400">Active Users Today</p>
                    <h3 className="text-3xl font-bold text-white mt-2">
                        1,284
                    </h3>
                </div>

                {/* Orders / Content */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300">
                    <p className="text-sm text-slate-400">Total Orders</p>
                    <h3 className="text-3xl font-bold text-white mt-2">
                        8,542
                    </h3>
                </div>

                {/* Total Revenue */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300">
                    <p className="text-sm text-slate-400">Total Revenue</p>
                    <h3 className="text-3xl font-bold text-white mt-2">
                        $148.2K
                    </h3>
                </div>

                {/* Monthly Revenue */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300">
                    <p className="text-sm text-slate-400">Revenue This Month</p>
                    <h3 className="text-3xl font-bold text-white mt-2">
                        $18.7K
                    </h3>
                </div>

                {/* Growth Rate */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300">
                    <p className="text-sm text-slate-400">Growth Rate</p>
                    <h3 className="text-3xl font-bold text-emerald-400 mt-2">
                        +12.5%
                    </h3>
                </div>

                {/* New Users */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300">
                    <p className="text-sm text-slate-400">New Users</p>
                    <h3 className="text-3xl font-bold text-white mt-2">
                        324
                    </h3>
                </div>

                {/* Published Articles */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300">
                    <p className="text-sm text-slate-400">Published Articles</p>
                    <h3 className="text-3xl font-bold text-white mt-2">
                        642
                    </h3>
                </div>

            </div>
        </section>
    )
}

export default SectionOverview
