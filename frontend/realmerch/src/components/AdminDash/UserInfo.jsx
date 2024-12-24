import React, { useState, useEffect } from 'react';
import profile from './../../assets/userlistprof.svg';
import axios from 'axios';

const UserInfo = ({ user }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (user) {
      setIsChecked(user.is_staff);
    }
  }, [user]);

  if (!user) {
    return (
      <div>
        <div>Select a user to see their details</div>
        <div className='mt-[20px]'>
          <p className='font-[500] text-[18px]'>All Admins are expected to:</p>
          <ul className='list-inside list-disc'>
            <li>Protect customer data by following security protocols</li>
            <li>Regularly update product listings (descriptions, images, prices).</li>
            <li>Process orders promptly and ensure accurate status updates.</li>
            <li>Respond to customer inquiries or complaints in a timely and professional manner.</li>
            <li>Implement discounts, coupons, or special offers as scheduled.</li>
          </ul>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    axios.put("http://localhost:5000/account/make-admin", {
      email: user.email,
      is_staff: isChecked
    })
    .then((response) => {
      setSuccess("User  updated successfully!");
      setError(null);
      console.log(response.data);
    })
    .catch((error) => {
      setError("An error occurred while updating the user.");
      console.log(error);
    });
  };

  return (
    <div className="text-gray-700">
      <div className="flex items-center mb-4 gap-[16px]">
        <img src={user.profile || profile} alt="User  Profile" />
        <h2 className="text-xl font-semibold">{user.fullname}</h2>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Fullname</label>
        <input
          type="text"
          value={user.fullname}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="text"
          value={user.email}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
        />
      </div>
      <div className="mb-2 flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          id="admin-checkbox"
        />
        <label htmlFor="admin-checkbox" className="px-2 text-sm font-medium">Admin</label>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500 text-sm ">{success}</div>}
      <div className='flex justify-end'>
        <button className="w-fit bg-[#845649] text-white py-[16px] px-[30px] rounded-lg" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default UserInfo;