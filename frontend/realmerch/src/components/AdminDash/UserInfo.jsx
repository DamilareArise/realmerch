import React from 'react'
import profile from './../../assets/userlistprof.svg'
const UserInfo = ({ user }) => {
    if (!user) return <div>
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
    </div>;

    return (
      <div className="text-gray-700">
        <div className="flex items-center mb-4 gap-[16px]">
        {user.profile? <img src="" alt=""/>: <img src={profile} alt=""/>}
          <h2 className="text-xl font-semibold">{user.name}</h2>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Fullname</label>
          <input
            type="text"
            value={user.name}
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
        <div className="mb-2">
          <label className="block text-sm font-medium">Role</label>
          <select className="w-full p-2 border border-gray-300 rounded-lg">
            <option value="">{user.role}</option>
            <option value="Admin">Admin</option>
            <option value="Editor">User</option>
          </select>
        </div>
       <div className='flex justify-end'>
       <button className="w-fit bg-[#845649] text-white py-[16px] px-[30px] rounded-lg ">
          Save
        </button>
       </div>
      </div>
    );
}

export default UserInfo