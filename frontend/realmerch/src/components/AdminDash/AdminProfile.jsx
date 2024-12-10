import { useState } from "react";
import React from "react";
import SideNav from "./SideNav";

const AdminProfile = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setContact({ ...contact, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContact({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      image: null,
    });
  };
  return (
    <div className="bg-[#F9F2F2] flex min-h-screen /p-10 /rounded-lg /shadow-md w-full  /max-w-md /mx-auto">
      <div className="md:w-[13%] lg:w-[10%]">
        <SideNav />
      </div>

      <div className="w-full mx-[20px] mb-[20px] md:mx-0  md:w-[87%] lg:w-[90%] mt-[60px] /flex /justify-center /flex-col items-center">
        <p className="text-[24px] font-[700] ml-[24px] mb-[42px]">Profile</p>
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md mx-auto /pl-[35%]">
          <div className="flex flex-col items-center mb-6">
            <label htmlFor="upload-image" className="cursor-pointer mb-2">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center border">
                {contact.image ? (
                  <img
                    src={contact.image}
                    alt="Uploaded"
                    className="rounded-full object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-gray-500 text-2xl">📷</span>
                )}
              </div>
            </label>
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <p className="text-gray-500 mt-2">Upload Image</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="Enter Firstname"
              value={contact.firstName}
              onChange={handleChange}
              className="block w-full border p-2 mb-2 rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Lastname"
              value={contact.lastName}
              onChange={handleChange}
              className="block w-full border p-2 mb-2 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={contact.email}
              onChange={handleChange}
              className="block w-full border p-2 mb-2 rounded-lg"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={contact.phoneNumber}
              onChange={handleChange}
              className="block w-full border p-2 mb-4 rounded-lg"
            />
            <button
              type="submit"
              className="bg-[#845649] text-white py-2 px-4 rounded-lg w-full"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
