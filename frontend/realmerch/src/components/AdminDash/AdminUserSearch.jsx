import React, { useState } from "react";
import SideNav from "./SideNav";
import UserSearch from "./UserSearch";
import UserInfo from "./UserInfo";

const AdminUserSearch = () => {
  const [selectedUser, setSelectedUser] = useState(null);

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
    {
      id: 10,
      name: "Ifeanyi Nnamdi",
      email: "ifeanyi.nn@example.com",
      role: "Editor",
    },
    {
      id: 11,
      name: "Aisha Bello",
      email: "aisha.bello@example.com",
      role: "User",
    },
    {
      id: 12,
      name: "Emeka Obinna",
      email: "emeka.obinna@example.com",
      role: "Admin",
    },
    {
      id: 13,
      name: "Ngozi Okeke",
      email: "ngozi.okeke@example.com",
      role: "User",
    },
    {
      id: 14,
      name: "Bamidele Ojo",
      email: "bamidele.ojo@example.com",
      role: "Editor",
    },
    {
      id: 15,
      name: "Fatima Yusuf",
      email: "fatima.yusuf@example.com",
      role: "User",
    },
    {
      id: 16,
      name: "Gbenga Afolayan",
      email: "gbenga.afolayan@example.com",
      role: "Admin",
    },
    {
      id: 17,
      name: "Helen Adeoye",
      email: "helen.adeoye@example.com",
      role: "User",
    },
    {
      id: 18,
      name: "Umaru Danjuma",
      email: "umaru.danjuma@example.com",
      role: "User",
    },
    {
      id: 19,
      name: "Olumide Akintola",
      email: "olumide.akintola@example.com",
      role: "Editor",
    },
    {
      id: 20,
      name: "Victoria Eze",
      email: "victoria.eze@example.com",
      role: "User",
    },
  ];
  

  return (
    <div className="flex h-screen">
      <div className="w-[10%]">
        <SideNav />
      </div>

      <div className="flex-1 py-6">
        <div className="flex">
          <div className="w-1/3 relative">
            <UserSearch users={users} onUserSelect={setSelectedUser} />
          </div>

          <div className="w-[50%] ml-8 bg-white p-6 rounded-lg shadow-md fixed right-[50px] top-[15%]">
            <UserInfo user={selectedUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserSearch;
