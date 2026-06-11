import DashboardCharts from "@/components/modules/adminPage/DashboardCharts";
import QuickActions from "@/components/modules/adminPage/QuickActions";
import SystemKIP from "@/components/modules/adminPage/SystemKIP";
import DashboardContentSections from "@/components/modules/adminPage/DashboardContentSections";
import React from "react";
import OverviewPanel from "@/components/modules/adminPage/OverviewPanel";
import AdminDirectory from "@/components/modules/adminPage/AdminDirectory";




function AdminHomePage() {


  return (
    <main className="w-full min-h-screen px-6 py-8 bg-gray-900 text-gray-100">
      {/* ================= QUICK ACTIONS ================= */}
      <QuickActions role="superAdmin" />
      {/* ================= SYSTEM KPI SystemKIP ================= */}
      <SystemKIP role="superAdmin" />
      {/* ================= ADMIN MANAGEMENT ================= */}
      <AdminDirectory/>
      {/* ================= CHARTS ================= */}
      <DashboardCharts />
      {/* ================= SECURITY + AUDIT ================= */}
      <DashboardContentSections role="superAdmin" />
      {/* ================= GLOBAL OVERVIEW ================= */}
      <OverviewPanel role="superAdmin" />
    </main>
  );
}

export default AdminHomePage;
