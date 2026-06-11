import React from "react";

type Order = {
    orderId: string;
    customerName: string;
    phone: string;
    date: string;
    products: string;
    totalQuantity: number;
    subtotal: number;
    discount: number;
    totalPrice: number;
    paymentMethod: "Cash" | "Online";
    paymentStatus: "Paid" | "Unpaid";
    orderStatus: "Preparing" | "Shipping" | "Delivered";
    address: string;
};

const orders: Order[] = [
    {
        orderId: "ORD-1001",
        customerName: "Ali Ahmadi",
        phone: "+994 50 123 45 67",
        date: "2026-06-01",
        products: "Vanilla ×2, Chocolate ×1",
        totalQuantity: 3,
        subtotal: 45,
        discount: 5,
        totalPrice: 40,
        paymentMethod: "Online",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        address: "Baku, Nasimi district, 12 Azadliq street",
    },
    {
        orderId: "ORD-1002",
        customerName: "Leyla Mammadova",
        phone: "+994 55 987 65 43",
        date: "2026-06-02",
        products: "Strawberry ×1, Vanilla ×1",
        totalQuantity: 2,
        subtotal: 30,
        discount: 0,
        totalPrice: 30,
        paymentMethod: "Cash",
        paymentStatus: "Unpaid",
        orderStatus: "Preparing",
        address: "Baku, Yasamal district, 8 Inshaatchilar ave",
    },
    {
        orderId: "ORD-1003",
        customerName: "Rashad Karimov",
        phone: "+994 70 222 11 99",
        date: "2026-06-03",
        products: "Chocolate ×3",
        totalQuantity: 3,
        subtotal: 60,
        discount: 10,
        totalPrice: 50,
        paymentMethod: "Online",
        paymentStatus: "Paid",
        orderStatus: "Shipping",
        address: "Sumqayit, 5th microdistrict, building 22",
    },
];

export default function OrdersTable() {
    return (
        <>
            <div className="overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4 ">
                    Orders Overview
                </h2>

                <table className="min-w-full border border-gray-200 text-sm">
                    <thead className="bg-gray-500">
                        <tr>
                            <th className="border p-2">Order ID</th>
                            <th className="border p-2">Customer Name</th>
                            <th className="border p-2">Phone</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Products</th>
                            <th className="border p-2">Total Quantity</th>
                            <th className="border p-2">Subtotal</th>
                            <th className="border p-2">Discount</th>
                            <th className="border p-2">Total Price</th>
                            <th className="border p-2">Payment Method</th>
                            <th className="border p-2">Payment Status</th>
                            <th className="border p-2">Order Status</th>
                            <th className="border p-2">Address</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.orderId} className="text-center">
                                <td className="border p-2">{order.orderId}</td>
                                <td className="border p-2">{order.customerName}</td>
                                <td className="border p-2">{order.phone}</td>
                                <td className="border p-2">{order.date}</td>
                                <td className="border p-2">{order.products}</td>
                                <td className="border p-2">{order.totalQuantity}</td>
                                <td className="border p-2">{order.subtotal}</td>
                                <td className="border p-2">{order.discount}</td>
                                <td className="border p-2">{order.totalPrice}</td>
                                <td className="border p-2">{order.paymentMethod}</td>
                                <td className="border p-2">{order.paymentStatus}</td>
                                <td className="border p-2">{order.orderStatus}</td>
                                <td className="border p-2">{order.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            
        </>
    );
}