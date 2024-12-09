import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "./../../assets/arrowBack.svg";
import reviews from "./../../assets/reviews.svg";
import profile from "./../../assets/profilee.svg";
import contact from "./../../assets/contact.svg";
import task from "./../../assets/task.svg";
import orders from "./../../assets/orders.svg";
import product from "./../../assets/product.svg";
import database from "./../../assets/database.svg";
import logout from "./../../assets/logout.svg";

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden fixed top-[10px] left-[10px] z-[100000001]">
        <button
          onClick={toggleMobileMenu}
          className="text-black /bg-[#845649] p-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`h-screen fixed z-[100000000] ${
          isMobileMenuOpen
            ? "w-[60%]"
            : isCollapsed
            ? "w-[13%] lg:w-[10%]"
            : "w-[25%] lg:w-[20%]"
        } ${
          isMobileMenuOpen ? "md:hidden" : "hidden md:flex"
        } bg-[#845649] px-[20px] py-[28px] flex flex-col items-center gap-[28px] transition-all duration-300`}
      >
        <img
          src={arrow}
          alt="Toggle sidebar"
          className={`w-[30px] h-[30px] cursor-pointer ${
            isCollapsed ? "rotate-180" : ""
          } transition-transform duration-300`}
          onClick={toggleSidebar}
        />

        <div className="flex flex-col gap-[14px] items-start">
        <Link to={"/admin/dashboard"} className="flex items-center">
            <img
              src={task}
              alt="Task"
              className="w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]"
            />
            {!isCollapsed && <span className="text-white ml-4">DashBoard</span>}
          </Link>


          <Link to={"/admin/productDashboard"}>
            <div className="flex items-center">
              <img
                src={product}
                alt="Product"
                className="w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]"
              />
              {!isCollapsed && <span className="text-white ml-4">Product</span>}
            </div>
          </Link>

          <Link to={"/admin/adminOrderList"}>
            <div className="flex items-center">
              <img
                src={orders}
                alt="Orders"
                className="w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]"
              />
              {!isCollapsed && <span className="text-white ml-4">Orders</span>}
            </div>
          </Link>

          <Link to={"/admin/contact"}>
            <div className="flex items-center">
              <img
                src={contact}
                alt="Contact"
                className="w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]"
              />
              {!isCollapsed && <span className="text-white ml-4">Contact</span>}
            </div>
          </Link>

          <Link to={"/admin/user-search"}>
            <div className="flex items-center">
              <img
                src={database}
                alt="Database"
                className="w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]"
              />
              {!isCollapsed && (
                <span className="text-white ml-4">Database</span>
              )}
            </div>
          </Link>

          <Link to={"/admin/profile"}>
            <div className="flex items-center">
              <img
                src={profile}
                alt="Profile"
                className="w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]"
              />
              {!isCollapsed && <span className="text-white ml-4">Profile</span>}
            </div>
          </Link>

          

          <div className="flex items-center">
            <img
              src={reviews}
              alt="Reviews"
              className="w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]"
            />
            {!isCollapsed && <span className="text-white ml-4">Reviews</span>}
          </div>

          <div className="flex items-center">
            <img
              src={logout}
              alt="Logout"
              className="w-[60px] h-[60px] p-[14px] rounded-[10px] border-[2px] border-[#FFFFFF]"
            />
            {!isCollapsed && <span className="text-white ml-4">Logout</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
