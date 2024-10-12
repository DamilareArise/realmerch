import React, {useState} from 'react'
import SideNav from './SideNav';

const AdminOrderList = () => {
    const [orders, setOrders] = useState([
        { id: 1, name: 'Christine Brooks', address: 'Kutch Green Apt. 448', date: '04 Sep. 24', product: 'Shirt', status: 'Completed' },
        { id: 2, name: 'Christine Brooks', address: 'Kutch Green Apt. 448', date: '04 Sep. 24', product: 'Shirt', status: 'Pending' },
        { id: 3, name: 'Christine Brooks', address: 'Kutch Green Apt. 448', date: '04 Sep. 24', product: 'Shirt', status: 'Processing' },
        // Add more orders as needed
      ]);
  return (
    <div className='flex'>
        <SideNav/>
        <div className='w-[10%]'></div>
        <div className="w-[90%] p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order Lists</h1>
        <p>Welcome Jubril</p>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="bg-gray-200 p-2 rounded-lg flex items-center">
            <span className="mr-2">Filter By</span> {/* Icon could go here */}
          </button>
          <select className="border border-gray-300 p-2 rounded-lg">
            <option>Order Type</option>
            {/* Add more filter options */}
          </select>
          <select className="border border-gray-300 p-2 rounded-lg">
            <option>Date</option>
            {/* Add more date options */}
          </select>
          <select className="border border-gray-300 p-2 rounded-lg">
            <option>Order Status</option>
            {/* Add more status options */}
          </select>
        </div>
        <button className="text-red-500 font-semibold">Reset Filter</button>
      </div>

      {/* Order Table */}
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-[#f4f4f4] text-left">
            <th className="p-4">ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Address</th>
            <th className="p-4">Date</th>
            <th className="p-4">Product</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{order.id}</td>
              <td className="p-4">{order.name}</td>
              <td className="p-4">{order.address}</td>
              <td className="p-4">{order.date}</td>
              <td className="p-4">{order.product}</td>
              <td className="p-4">
                {/* Status icons could be based on order.status */}
                <span className={`inline-block p-2 rounded-lg ${order.status === 'Completed' ? 'bg-green-500' : order.status === 'Pending' ? 'bg-yellow-500' : 'bg-blue-500'}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default AdminOrderList