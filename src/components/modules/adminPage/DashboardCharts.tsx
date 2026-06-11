"use client"
import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from 'recharts'

function DashboardCharts() {

    // Fake data - Revenue Growth
    const revenueData = [
        { month: 'Jan', revenue: 1200 },
        { month: 'Feb', revenue: 1900 },
        { month: 'Mar', revenue: 3000 },
        { month: 'Apr', revenue: 2500 },
        { month: 'May', revenue: 4200 },
        { month: 'Jun', revenue: 5000 },
    ]

    // Fake data - Orders Overview
    const ordersData = [
        { name: 'Completed', value: 60 },
        { name: 'Pending', value: 25 },
        { name: 'Cancelled', value: 15 },
    ]

    const COLORS = ['#22c55e', '#facc15', '#ef4444']

    return (

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            <div className="bg-slate-800 border border-slate-700 p-5 rounded-lg h-80">
                <p className="font-semibold mb-2">Revenue Growth</p>

                <div className="h-[calc(100%-24px)] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                            <XAxis dataKey="month" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="revenue"
                                stroke="#38bdf8"
                                strokeWidth={2}
                                dot={{ r: 3 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 p-5 rounded-lg h-80">
                <p className="font-semibold mb-2">Orders Overview</p>

                <div className="h-[calc(100%-24px)] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={ordersData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={85}
                                label
                            >
                                {ordersData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </section>
    )
}

export default DashboardCharts