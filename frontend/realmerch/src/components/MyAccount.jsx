import React, { useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";

// Import your components
const AccountInfo = () => (
  <div>
    <h2>Account Information</h2>
    {/* Your account form or content here */}
  </div>
);

const Orders = () => (
  <div>
    <h2>Order History</h2>
    {/* Your order content here */}
  </div>
);

const DeleteAccount = () => (
  <div>
    <h2>Delete Account</h2>
    {/* Your delete account content here */}
  </div>
);

const MyAccount = () => {
  const [selectedTab, setSelectedTab] = useState("account");

  return (
    <div>
      <Navbar/>
      <div className="flex bg-gray-400 /h-[70vh] mt-[100px]">
        {/*The Content */}
        <div className="w-[75%] p-4 bg-[#FBFEFF]">
          {selectedTab === "account" && <AccountInfo />}
          {selectedTab === "orders" && <Orders />}
          {selectedTab === "delete" && <DeleteAccount />}
        </div>

        {/* The navigation */}
        <div className="w-[25%] bg-[#FBFEFF] shadow-md p-4">
          <div
            className={`p-4 cursor-pointer ${
              selectedTab === "account" ? "bg-gray-100" : ""
            }`}
            onClick={() => setSelectedTab("account")}
          >
            <h3>My Account</h3>
            <p>Account Information</p>
          </div>
          <div
            className={`p-4 cursor-pointer ${
              selectedTab === "orders" ? "bg-gray-100" : ""
            }`}
            onClick={() => setSelectedTab("orders")}
          >
            <h3>Orders</h3>
            <p>Order History</p>
          </div>
          <div
            className={`p-4 cursor-pointer ${
              selectedTab === "delete" ? "bg-gray-100" : ""
            }`}
            onClick={() => setSelectedTab("delete")}
          >
            <h3>Delete Account</h3>
            <p>Delete Account</p>
          </div>
        </div>
      </div>
      <div className="pb-[20px]">
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MyAccount;
