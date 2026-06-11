import React from "react";

type Sale = {
  date: string;
  ordersCount: number;
  totalRevenue: number;
  averageOrderValue: number;
  discountGiven: number;
};

const sales: Sale[] = [
  {
    date: "2026-06-01",
    ordersCount: 12,
    totalRevenue: 540,
    averageOrderValue: 45,
    discountGiven: 35,
  },
  {
    date: "2026-06-02",
    ordersCount: 9,
    totalRevenue: 410,
    averageOrderValue: 45.5,
    discountGiven: 20,
  },
  {
    date: "2026-06-03",
    ordersCount: 15,
    totalRevenue: 720,
    averageOrderValue: 48,
    discountGiven: 60,
  },
  {
    date: "2026-06-04",
    ordersCount: 7,
    totalRevenue: 315,
    averageOrderValue: 45,
    discountGiven: 10,
  },
  {
    date: "2026-06-05",
    ordersCount: 18,
    totalRevenue: 860,
    averageOrderValue: 47.8,
    discountGiven: 75,
  },
  {
    date: "2026-06-06",
    ordersCount: 11,
    totalRevenue: 500,
    averageOrderValue: 45.4,
    discountGiven: 25,
  },
  {
    date: "2026-06-07",
    ordersCount: 20,
    totalRevenue: 980,
    averageOrderValue: 49,
    discountGiven: 90,
  },
  {
    date: "2026-06-08",
    ordersCount: 14,
    totalRevenue: 650,
    averageOrderValue: 46.4,
    discountGiven: 40,
  },
];

export default function SalesTable() {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 ">
        Sales Report
      </h2>

      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Orders Count</th>
            <th className="border p-2">Total Revenue</th>
            <th className="border p-2">Average Order Value</th>
            <th className="border p-2">Discount Given</th>
          </tr>
        </thead>

        <tbody>
          {sales.map((item) => (
            <tr key={item.date} className="text-center">
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.ordersCount}</td>
              <td className="border p-2">${item.totalRevenue}</td>
              <td className="border p-2">${item.averageOrderValue}</td>
              <td className="border p-2">${item.discountGiven}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}