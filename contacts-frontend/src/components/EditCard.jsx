import React, { useState } from 'react';
import axios from 'axios';

const EditCard = ({ contact, setIsEditCardVisible, updateContact }) => {
    const [editedContact, setEditedContact] = useState(contact);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedContact((prevContact) => ({ ...prevContact, [name]: value }));
    };

    const handleSave = () => {
        axios
          .put(`http://localhost:8080/contacts/${contact.id}`, editedContact)
          .then((response) => {
            updateContact(editedContact); // Update the contact in the parent component's state
            setIsEditCardVisible(false); // Close the edit card
            console.log('Contact updated successfully:', response.data);
          })
          .catch((error) => {
            console.error('Error updating contact:', error);
          });
    };


  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit contact details</h2>
        <input type="text" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Name"
            name="name" value={editedContact.name} onChange={handleInputChange} />
        <input type="email" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Email"
            name="email" value={editedContact.email} onChange={handleInputChange}/>
        <input type="text" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Organization"
            name="org" value={editedContact.org} onChange={handleInputChange}/>
        <input type="text" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Role"
            name="role" value={editedContact.role} onChange={handleInputChange}/>
        <input type="text" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Connection via"
            name="via" value={editedContact.via} onChange={handleInputChange}/>

        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-gray-600 mr-2"
          onClick={() => setIsEditCardVisible(false)}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCard;