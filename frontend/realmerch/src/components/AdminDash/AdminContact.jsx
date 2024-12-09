import React from "react";
import ContactCard from "../ContactCard";
import SideNav from "./SideNav";

const AdminContact = () => {
  const contacts = [
    {
      name: "Jason Price",
      role: "Lead Admin",
      email: "kuhlman.jeremy@yahoo.com",
      phone: '+234 9031328853',
      image: "link_to_image", // Replace with actual image URL or path
    },
    {
      name: "Duane Dean",
      role: "Admin",
      email: "rusty.botsford@wilfrid.io",
      phone: "+234 9031328853",
      image: "link_to_image",
    },
    // Add more contacts as needed
  ];
  return (
    <div>
      <div className="md:w-[13%] lg:w-[10%]">
        <SideNav />
      </div>
      <div className="p-4 bg-[#F5EBE9] min-h-screen flex items-start">
        <div className="md:w-[13%] lg:w-[10%]"></div>
        <div className="/grid /grid-cols-1 /sm:grid-cols-2 /md:grid-cols-3 gap-4 flex flex-wrap justify-center md:justify-start md:w-[87%] lg:w-[90%]">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              name={contact.name}
              role={contact.role}
              email={contact.email}
              phone={contact.phone}
              image={contact.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminContact;
