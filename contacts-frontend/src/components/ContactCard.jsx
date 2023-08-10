import React from 'react';

const ContactCard = ({ contact }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-evenly items-center h-full">
        <h2 className="text-lg font-semibold">{contact.name}</h2>
        <hr className="w-20 border-t border-gray-300 my-2"/>
        <p className="text-gray-500">{contact.email}</p>
        <p className="text-gray-500">{contact.org}</p>
        <p className="text-gray-500">{contact.role}</p>
        <p className="text-gray-500">{contact.via}</p>
    </div>
  );
};

export default ContactCard;
