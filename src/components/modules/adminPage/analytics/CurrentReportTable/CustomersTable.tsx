import React from "react";

type Customer = {
  customerName: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
  customerType: "New" | "Loyal";
};

const customers: Customer[] = [
  {
    customerName: "Ali Ahmadi",
    phone: "+994 50 123 45 67",
    totalOrders: 8,
    totalSpent: 320,
    lastOrderDate: "2026-06-08",
    customerType: "Loyal",
  },
  {
    customerName: "Leyla Mammadova",
    phone: "+994 55 987 65 43",
    totalOrders: 2,
    totalSpent: 60,
    lastOrderDate: "2026-06-02",
    customerType: "New",
  },
  {
    customerName: "Rashad Karimov",
    phone: "+994 70 222 11 99",
    totalOrders: 5,
    totalSpent: 210,
    lastOrderDate: "2026-06-07",
    customerType: "Loyal",
  },
  {
    customerName: "Nigar Hasanova",
    phone: "+994 51 444 88 10",
    totalOrders: 1,
    totalSpent: 25,
    lastOrderDate: "2026-06-05",
    customerType: "New",
  },
  {
    customerName: "Kamran Aliyev",
    phone: "+994 77 333 22 11",
    totalOrders: 12,
    totalSpent: 540,
    lastOrderDate: "2026-06-09",
    customerType: "Loyal",
  },
  {
    customerName: "Aysel Huseynova",
    phone: "+994 55 111 66 99",
    totalOrders: 3,
    totalSpent: 110,
    lastOrderDate: "2026-06-04",
    customerType: "New",
  },
  {
    customerName: "Orkhan Mammadov",
    phone: "+994 10 888 77 66",
    totalOrders: 10,
    totalSpent: 450,
    lastOrderDate: "2026-06-06",
    customerType: "Loyal",
  },
];

export default function CustomersTable() {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 ">
        Customers Report
      </h2>

      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="border p-2">Customer Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Total Orders</th>
            <th className="border p-2">Total Spent</th>
            <th className="border p-2">Last Order Date</th>
            <th className="border p-2">Customer Type</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.phone} className="text-center">
              <td className="border p-2">{customer.customerName}</td>
              <td className="border p-2">{customer.phone}</td>
              <td className="border p-2">{customer.totalOrders}</td>
              <td className="border p-2">${customer.totalSpent}</td>
              <td className="border p-2">{customer.lastOrderDate}</td>
              <td className="border p-2">
                <span
                  className={
                    customer.customerType === "Loyal"
                      ? "text-green-600 font-medium"
                      : "text-blue-600 font-medium"
                  }
                >
                  {customer.customerType}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}