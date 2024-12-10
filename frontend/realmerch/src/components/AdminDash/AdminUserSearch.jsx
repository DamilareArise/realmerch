import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import UserSearch from "./UserSearch";
import UserInfo from "./UserInfo";

const AdminUserSearch = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    {
      id: 1,
      name: "Elianah Anuoluwakitan",
      email: "anuoluwakitan24@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Kunle Remi",
      email: "kunlex@example.com",
      role: "User",
    },
    {
      id: 3,
      name: "Shalewa Johnson",
      email: "shaljoe@example.com",
      role: "User",
    },
    {
      id: 4,
      name: "Shade Johnson",
      email: "shadej@example.com",
      role: "User",
    },
    {
      id: 5,
      name: "Jubril Ademola",
      email: "jubril@example.com",
      role: "Admin",
    },
    {
      id: 6,
      name: "Amaka Okoro",
      email: "amaka.okoro@example.com",
      role: "User",
    },
    {
      id: 7,
      name: "Tunde Bakare",
      email: "tunde.bakare@example.com",
      role: "Editor",
    },
    {
      id: 8,
      name: "Chinelo Uche",
      email: "chinelo.uch@example.com",
      role: "Admin",
    },
    {
      id: 9,
      name: "David Omolade",
      email: "david.omo@example.com",
      role: "User",
    },
  ];

  useEffect(() => {
    // Open the modal on small screens when no user is selected or when a user is selected
    if (window.innerWidth < 1024) {
      setIsModalOpen(true);
    }
  }, [selectedUser]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    if (window.innerWidth < 1024) {
      setIsModalOpen(true); // Open the modal if a user is selected on small screens
    }
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-[13%] lg:w-[10%]">
        <SideNav />
      </div>

      <div className="flex-1 py-6 md:w-[87%] lg:w-[90%]">
        <div className="flex">
          <div className="w-full lg:w-1/3">
            <UserSearch users={users} onUserSelect={handleUserSelect} />
          </div>

          {/* Inline UserInfo for larger screens */}
          <div className="hidden lg:block w-[50%] h-fit fixed right-[5%] top-[15%] ml-8 bg-white p-6 rounded-lg shadow-md">
            <UserInfo user={selectedUser} />
          </div>

          {/* Modal for smaller screens */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-md relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-black"
                  onClick={handleCloseModal}
                >
                  ✖
                </button>
                <UserInfo user={selectedUser} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUserSearch;
