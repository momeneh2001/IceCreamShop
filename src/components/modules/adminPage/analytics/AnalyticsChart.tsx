"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// fake data generator (برای تست)
const generateData = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const data = [];
  let current = new Date(startDate);

  while (current <= endDate) {
    data.push({
      date: current.toISOString().split("T")[0],
      users: Math.floor(Math.random() * 200) + 50,
      revenue: Math.floor(Math.random() * 500) + 100,
    });

    current.setDate(current.getDate() + 1);
  }

  return data;
};

export default function AnalyticsChart() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState<any[]>([]);


  const handleApply = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      alert("Start date cannot be after end date");
      return;
    }

    const result = generateData(startDate, endDate);
    setData(result);
  };

  useEffect(() => {
    // default range (last 7 days)
    const today = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(today.getDate() - 7);

    const s = lastWeek.toISOString().split("T")[0];
    const e = today.toISOString().split("T")[0];

    setStartDate(s);
    setEndDate(e);
    setData(generateData(s, e));
  }, []);

  return (
    <section className="w-full py-10 space-y-6 ">

      {/* DATE FILTER */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 space-y-4">

        {/* Header */}
        <div>
          <h3 className="text-white font-semibold text-lg">
            Date Range Filter
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Select a period to filter analytics and reports
          </p>
        </div>

        {/* Inputs Row */}
        <div className="flex flex-col md:flex-row gap-4 md:items-end">

          {/* Start Date */}
          <div className="flex-1">
            <label className="text-sm text-slate-300">Start Date</label>
            <input
              type="date"
              value={startDate}
              max={endDate || undefined}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 text-white
                 rounded-lg px-3 py-2 mt-1
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* End Date */}
          <div className="flex-1">
            <label className="text-sm text-slate-300">End Date</label>
            <input
              type="date"
              value={endDate}
              min={startDate || undefined}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 text-white
                 rounded-lg px-3 py-2 mt-1
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleApply}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-500
                 text-white px-6 py-2 rounded-lg transition
                 active:scale-95"
            >
              Apply Filter
            </button>
          </div>

        </div>
      </div>

      {/* CHART */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={2}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#22c55e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Export button */}
      <div className="flex flex-wrap gap-3 mt-3">

        <button
          className="bg-slate-700 hover:bg-slate-600 active:scale-95
               text-white px-4 py-2 rounded-lg text-sm font-medium
               transition-all duration-200 shadow-sm
               border border-slate-600"
        >
          Export PDF
        </button>

        <button
          className="bg-slate-700 hover:bg-slate-600 active:scale-95
               text-white px-4 py-2 rounded-lg text-sm font-medium
               transition-all duration-200 shadow-sm
               border border-slate-600"
        >
          Export PNG
        </button>

        <button
          className="bg-slate-700 hover:bg-slate-600 active:scale-95
               text-white px-4 py-2 rounded-lg text-sm font-medium
               transition-all duration-200 shadow-sm
               border border-slate-600"
        >
          Export Excel
        </button>

        <button
          className="bg-slate-700 hover:bg-slate-600 active:scale-95
               text-white px-4 py-2 rounded-lg text-sm font-medium
               transition-all duration-200 shadow-sm
               border border-slate-600"
        >
          Export Word
        </button>

      </div>
    </section>
  );
}