import React, { useState } from 'react';
import arrow from './../../assets/arrowBack.svg';
import reviews from './../../assets/reviews.svg';
import profile from './../../assets/profilee.svg';
import contact from './../../assets/contact.svg';
import task from './../../assets/task.svg';
import orders from './../../assets/orders.svg';
import product from './../../assets/product.svg';
import logout from './../../assets/logout.svg';

const SideNav = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(false);


  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen fixed ${isCollapsed ? 'w-[10%]' : 'w-[15%]'} bg-[#845649] px-[20px] py-[28px] flex flex-col items-center gap-[28px] transition-all duration-300`}
    >
     
      <img
        src={arrow}
        alt="Toggle sidebar"
        className={`w-[30px] h-[30px] cursor-pointer ${isCollapsed ? 'rotate-180' : ''} transition-transform duration-300`}
        onClick={toggleSidebar}
      />

      
      <div className='flex flex-col gap-[14px] items-start'>
       
        <div className='flex items-center'>
          <img
            src={profile}
            alt="Profile"
            className='w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'
          />
          {!isCollapsed && <span className='text-white ml-4'>Profile</span>}
        </div>

        <div className='flex items-center'>
          <img
            src={contact}
            alt="Contact"
            className='w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'
          />
          {!isCollapsed && <span className='text-white ml-4'>Contact</span>}
        </div>

        <div className='flex items-center'>
          <img
            src={task}
            alt="Task"
            className='w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'
          />
          {!isCollapsed && <span className='text-white ml-4'>Task</span>}
        </div>

        <div className='flex items-center'>
          <img
            src={orders}
            alt="Orders"
            className='w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'
          />
          {!isCollapsed && <span className='text-white ml-4'>Orders</span>}
        </div>

        <div className='flex items-center'>
          <img
            src={reviews}
            alt="Reviews"
            className='w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'
          />
          {!isCollapsed && <span className='text-white ml-4'>Reviews</span>}
        </div>

        <div className='flex items-center'>
          <img
            src={product}
            alt="Product"
            className='w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'
          />
          {!isCollapsed && <span className='text-white ml-4'>Product</span>}
        </div>

        <div className='flex items-center'>
          <img
            src={logout}
            alt="Logout"
            className='w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]'
          />
          {!isCollapsed && <span className='text-white ml-4'>Logout</span>}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
