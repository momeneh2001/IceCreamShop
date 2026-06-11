import React from "react";

type Inventory = {
  product: string;
  stock: number;
  soldToday: number;
  status: "Low" | "Normal" | "Out of Stock";
};

const inventory: Inventory[] = [
  {
    product: "Vanilla Dream",
    stock: 45,
    soldToday: 12,
    status: "Normal",
  },
  {
    product: "Strawberry Bliss",
    stock: 18,
    soldToday: 9,
    status: "Normal",
  },
  {
    product: "Choco Lava",
    stock: 6,
    soldToday: 22,
    status: "Low",
  },
  {
    product: "Mango Fresh",
    stock: 0,
    soldToday: 8,
    status: "Out of Stock",
  },
  {
    product: "Pistachio Royal",
    stock: 25,
    soldToday: 5,
    status: "Normal",
  },
  {
    product: "Blueberry Sky",
    stock: 10,
    soldToday: 7,
    status: "Low",
  },
  {
    product: "Caramel Crunch",
    stock: 3,
    soldToday: 14,
    status: "Low",
  },
  {
    product: "Hazelnut Cream",
    stock: 30,
    soldToday: 4,
    status: "Normal",
  },
  {
    product: "Coffee Blast",
    stock: 0,
    soldToday: 10,
    status: "Out of Stock",
  },
];

export default function InventoryTable() {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 ">
        Inventory Report
      </h2>

      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="border p-2">Product</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Sold Today</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {inventory.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{item.product}</td>
              <td className="border p-2">{item.stock}</td>
              <td className="border p-2">{item.soldToday}</td>
              <td className="border p-2">
                <span
                  className={
                    item.status === "Normal"
                      ? "text-green-600 font-medium"
                      : item.status === "Low"
                      ? "text-yellow-600 font-medium"
                      : "text-red-600 font-medium"
                  }
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}