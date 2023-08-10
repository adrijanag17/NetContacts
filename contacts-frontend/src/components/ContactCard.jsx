import React from 'react';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import axios from 'axios';


const ContactCard = ({ contact, onDelete }) => {

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/contacts/${contact.id}`)
          .then(response => {
            onDelete(contact.id);
            console.log('Contact deleted successfully:', response.data);
          })
          .catch(error => {
            console.error('Error deleting contact:', error);
          });
    };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col justify-evenly items-center h-full">
        <h2 className="text-lg font-semibold">{contact.name}</h2>
        <hr className="w-20 border-t border-gray-300 my-2"/>
        <p className="text-gray-500">{contact.email}</p>
        <p className="text-gray-500">{contact.org}</p>
        <p className="text-gray-500">{contact.role}</p>
        <p className="text-gray-500">{contact.via}</p>
        <div className="mt-4 flex space-x-10">
            <button onClick={handleDelete} className="text-red-500 hover:text-red-600">
              <TrashIcon className="h-5 w-5" />
            </button>
            <button className="text-blue-500 hover:text-blue-600">
              <PencilSquareIcon className="h-5 w-5" />
            </button>
        </div>
    </div>
  );
};

export default ContactCard;
