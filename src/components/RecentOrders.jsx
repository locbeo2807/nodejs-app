import React from "react";

const RecentOrders = () => {
  const orders = [
    { name: "Foldable Mini Drone", number: "85631", payment: "Due", status: "Pending" },
    { name: "LARVENDER KFI02 Drone", number: "36378", payment: "Refunded", status: "Declined" },
    { name: "Ruko F11 Pro Drone", number: "49347", payment: "Due", status: "Pending" },
    { name: "Drone with Camera", number: "96996", payment: "Paid", status: "Delivered" },
  ];

  return (
    <table className="table-auto w-full text-white">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Number</th>
          <th>Payment</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td>{order.name}</td>
            <td>{order.number}</td>
            <td>{order.payment}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentOrders;
