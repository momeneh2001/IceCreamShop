import React from "react";

type PdfReport = {
  totalRevenue: number;
  totalOrders: number;
  topProducts: string;
  topCustomers: string;
  salesTrend: string;
  bestCategory: string;
};

const report: PdfReport = {
  totalRevenue: 4175,
  totalOrders: 96,
  topProducts:
    "Choco Lava (150 sold), Vanilla Dream (120 sold), Caramel Crunch (110 sold), Pistachio Royal (80 sold), Strawberry Bliss (95 sold)",
  topCustomers:
    "Kamran Aliyev ($540), Ali Ahmadi ($320), Orkhan Mammadov ($450), Rashad Karimov ($210), Aysel Huseynova ($110)",
  salesTrend:
    "Sales are increasing steadily over the last 8 days with peak performance on June 7 (980$ revenue). No major drops detected. Overall growth trend is positive and stable.",
  bestCategory: "Fruity (highest demand due to Strawberry Bliss and Mango Fresh combined sales impact)",
};

export default function SummaryReportTable() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold ">
        Summary Report
      </h2>

      <table className="min-w-full border border-gray-200 text-sm">
        <tbody>
          <tr>
            <td className="border p-2 font-semibold">Total Revenue</td>
            <td className="border p-2">${report.totalRevenue}</td>
          </tr>

          <tr>
            <td className="border p-2 font-semibold">Total Orders</td>
            <td className="border p-2">{report.totalOrders}</td>
          </tr>

          <tr>
            <td className="border p-2 font-semibold">Top 5 Products</td>
            <td className="border p-2">{report.topProducts}</td>
          </tr>

          <tr>
            <td className="border p-2 font-semibold">Top Customers</td>
            <td className="border p-2">{report.topCustomers}</td>
          </tr>

          <tr>
            <td className="border p-2 font-semibold">Sales Trend</td>
            <td className="border p-2">{report.salesTrend}</td>
          </tr>

          <tr>
            <td className="border p-2 font-semibold">Best Selling Category</td>
            <td className="border p-2">{report.bestCategory}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}