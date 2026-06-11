import React from 'react'
import SectionOverview from '@/components/modules/adminPage/analytics/SectionOverview'
import AnalyticsChart from '@/components/modules/adminPage/analytics/AnalyticsChart'
import TopPerformanceSection from '@/components/modules/adminPage/analytics/TopPerformanceSection'
import SalesAndInventorySection from '@/components/modules/adminPage/analytics/SalesAndInventorySection'
import SalesInsightsSection from '@/components/modules/adminPage/analytics/SalesInsightsSection'
import OrderStatusOverviewSection from '@/components/modules/adminPage/analytics/OrderStatusOverviewSection'

function page() {
    return (
        <main className="w-full min-h-screen px-6 py-8 bg-gray-900 text-gray-100">

            {/*  TODO: implement export functionality and integrate required components */}
            <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-6 pb-4 border-b border-slate-700">

                {/* Title */}
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Dashboard Analytics
                    </h1>

                    <p className="text-slate-400 mt-1">
                        Export reports for Orders, Products, Sales, Customers, Inventory & Summary
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">

                    {/* Report Type Filter (ONLY 6 TABLES) */}
                    <select className="bg-slate-800 border border-slate-700 text-slate-200 px-3 py-2 rounded-lg focus:outline-none focus:border-slate-500">
                        {/* <option value="all">All Reports</option> */}
                        <option value="orders">Orders Report</option>
                        <option value="products">Products Report</option>
                        <option value="sales">Sales Report</option>
                        <option value="customers">Customers Report</option>
                        <option value="inventory">Inventory Report</option>
                        <option value="summary">PDF Summary Report</option>
                    </select>

                    {/* Format Select */}
                    <select className="bg-slate-800 border border-slate-700 text-slate-200 px-3 py-2 rounded-lg focus:outline-none focus:border-slate-500">
                        <option value="csv">CSV</option>
                        <option value="excel">Excel</option>
                        <option value="pdf">PDF</option>
                    </select>

                    {/* Export Button */}
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition">
                        Export Data
                    </button>

                </div>
            </section>


            <SectionOverview/>

            <TopPerformanceSection/>

            <SalesAndInventorySection/>

            <SalesInsightsSection/>

            <OrderStatusOverviewSection/>

            <AnalyticsChart />
           
        </main>
    )
}

export default page