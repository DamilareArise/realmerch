import React, { useState } from 'react';
import SideNav from './SideNav';

// Import icons (replace with actual paths or components)
import completedIcon from './../../assets/complete.svg';
import rejectedIcon from './../../assets/reject.svg';
import processingIcon from './../../assets/processing.svg';
import onHoldIcon from './../../assets/hold.svg';
import inTransitIcon from './../../assets/transit.svg';

const AdminOrderList = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Christine Brooks', address: 'Kutch Green Apt. 448', date: '04 Sep. 24', product: 'Shirt', status: 'InTransit' },
    { id: 2, name: 'Christine Brooks', address: 'Kutch Green Apt. 448', date: '05 Sep. 24', product: 'Shirt', status: 'Processing' },
    { id: 3, name: 'Christine Brooks', address: 'Kutch Green Apt. 448', date: '06 Sep. 24', product: 'Shirt', status: 'OnHold' },
    // Add more orders as needed
  ]);

  const [selectedStatus, setSelectedStatus] = useState(null); // Track selected status
  const [currentOrder, setCurrentOrder] = useState(null); // Track current order
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const statusIcons = {
    Completed: completedIcon,
    Rejected: rejectedIcon,
    Processing: processingIcon,
    OnHold: onHoldIcon,
    InTransit: inTransitIcon,
  };

  // Handle status selection (this will trigger the modal)
  const handleStatusChange = (order, status) => {
    setSelectedStatus(status);
    setCurrentOrder(order);
    setShowModal(true);
  };

  // Update order status on confirmation
  const updateOrderStatus = () => {
    setOrders(orders.map(order =>
      order.id === currentOrder.id ? { ...order, status: selectedStatus } : order
    ));
    setShowModal(false); // Close modal after confirmation
    setCurrentOrder(null); // Reset current order
    setSelectedStatus(null); // Reset selected status
  };

  // Cancel status change
  const cancelStatusChange = () => {
    setShowModal(false); // Close modal
    setCurrentOrder(null); // Reset current order
    setSelectedStatus(null); // Reset selected status
  };

  return (
    <div className='flex'>
      <SideNav />
      <div className='md:w-[13%] lg:w-[10%]'></div>
      <div className="md:w-[87%] lg:w-[90%] p-[20px] md:p-8 mt-[30px]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Order Lists</h1>
          <p>Welcome Jubril</p>
        </div>

        {/* Order Table */}
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-[#f4f4f4] text-left">
              <th className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">ID</th>
              <th className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">Name</th>
              <th className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">Address</th>
              <th className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">Date</th>
              <th className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">Product</th>
              <th className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">{order.id}</td>
                <td className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">{order.name}</td>
                <td className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">{order.address}</td>
                <td className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">{order.date}</td>
                <td className="p-[4px] lg:p-4 text-[8px] md:text-[12px]">{order.product}</td>
                <td className="p-[4px] lg:p-4 text-[8px] md:text-[12px] w-[80px] md:w-[200px]">
                  <div className="flex items-center space-x-2">
                    {order.status && (
                      <>
                        <img src={statusIcons[order.status]} alt={order.status} className="w-4 md:w-6 h-4 md:h-6" />
                        <span>{order.status}</span>
                      </>
                    )}
                    <select 
                      className="border border-gray-300 p-2 rounded-lg  w-[80px] md:w-[120px]"
                      onChange={(e) => handleStatusChange(order, e.target.value)}
                      defaultValue={order.status || ""}
                    >
                      <option value="" disabled>Select Status</option>
                      <option value="Processing">🛠️ Processing</option>
                      <option value="Rejected">❌ Rejected</option>
                      <option value="Completed">📝 Completed</option>
                      <option value="OnHold">✋ On Hold</option>
                      <option value="InTransit">🚚 In Transit</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-bold mb-4">{selectedStatus} Status</h2>
              <p className="mb-6">Are you sure you want to change the status to {selectedStatus}?</p>
              <div className="flex justify-center space-x-4">
                <button 
                  className="bg-[#8B4513] text-white px-4 py-2 rounded-lg" 
                  onClick={updateOrderStatus}
                >
                  Confirm
                </button>
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded-lg" 
                  onClick={cancelStatusChange}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrderList;
