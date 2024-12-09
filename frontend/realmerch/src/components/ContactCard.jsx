import React from 'react';
import profilepic from './../assets/profilepic.png'

function ContactCard({ name, role, email, phone, image }) {
  return (
    <div className="bg-white /w-[200px]  w-[280px] rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
      <img src={profilepic} alt={`${name}`} className="w-32 h-32 rounded-full mb-4 object-cover" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{role}</p>
      <p className="text-gray-600">{email}</p>
      {phone && (
        <div className="mt-2">
          <button className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm">
            <span role="img" aria-label="phone" className="mr-2">📞</span>
            {phone}
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactCard;
