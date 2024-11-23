import React, { useState } from "react";
import profile from './../../assets/userlistprof.svg'

const UserSearch = ({ users, onUserSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="border-b-[1px] border-[#000000] pt-[18px] pl-[18px] fixed w-[30%] bg-white top-0">
        <input
          type="text"
          placeholder="Search..."
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </div>
      <ul className="space-y-2 pt-[60px]">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            onClick={() => onUserSelect(user)}
            className="px-[18px] py-[22px]  hover:bg-gray-300 cursor-pointer border-b-[1px] border-[#80808080] font-[400] text-[18px]"
          >
            <div className="flex items-center gap-[15px]">
                {user.profile? <img src="" alt=""/>: <img src={profile} alt=""/>}
            {user.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
