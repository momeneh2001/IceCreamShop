import React from "react";

type Product = {
  productId: string;
  productName: string;
  category: string;
  price: number;
  soldQuantity: number;
  revenue: number;
  stock: number;
  status: "Active" | "Inactive";
};

const products: Product[] = [
  {
    productId: "PRD-2001",
    productName: "Vanilla Dream",
    category: "Vanilla",
    price: 5,
    soldQuantity: 120,
    revenue: 600,
    stock: 45,
    status: "Active",
  },
  {
    productId: "PRD-2002",
    productName: "Strawberry Bliss",
    category: "Fruity",
    price: 6,
    soldQuantity: 95,
    revenue: 570,
    stock: 30,
    status: "Active",
  },
  {
    productId: "PRD-2003",
    productName: "Choco Lava",
    category: "Chocolate",
    price: 7,
    soldQuantity: 150,
    revenue: 1050,
    stock: 10,
    status: "Active",
  },
  {
    productId: "PRD-2004",
    productName: "Mango Fresh",
    category: "Fruity",
    price: 6,
    soldQuantity: 40,
    revenue: 240,
    stock: 0,
    status: "Inactive",
  },
  {
    productId: "PRD-2005",
    productName: "Pistachio Royal",
    category: "Nutty",
    price: 8,
    soldQuantity: 80,
    revenue: 640,
    stock: 22,
    status: "Active",
  },
  {
    productId: "PRD-2006",
    productName: "Blueberry Sky",
    category: "Fruity",
    price: 6,
    soldQuantity: 60,
    revenue: 360,
    stock: 15,
    status: "Active",
  },
  {
    productId: "PRD-2007",
    productName: "Caramel Crunch",
    category: "Caramel",
    price: 7,
    soldQuantity: 110,
    revenue: 770,
    stock: 5,
    status: "Active",
  },
];

export default function ProductsTable() {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 ">
        Products Report
      </h2>

      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="border p-2">Product ID</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Sold Quantity</th>
            <th className="border p-2">Revenue</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.productId} className="text-center">
              <td className="border p-2">{product.productId}</td>
              <td className="border p-2">{product.productName}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.soldQuantity}</td>
              <td className="border p-2">${product.revenue}</td>
              <td className="border p-2">{product.stock}</td>
              <td className="border p-2">
                <span
                  className={
                    product.status === "Active"
                      ? "text-green-600 font-medium"
                      : "text-red-600 font-medium"
                  }
                >
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}