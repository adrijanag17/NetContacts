import React, { useState } from 'react';
import axios from 'axios';

const EditCard = ({ setIsEditCardVisible }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Edit contact details</h2>
        <input type="text" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Name" />
        <input type="email" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Email" />
        <input type="text" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Organization" />
        <input type="text" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Role" />
        <input type="text" className="border rounded-lg px-3 py-2 mb-2 w-full" placeholder="Connection via" />

        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-gray-600 mr-2"
          onClick={() => setIsEditCardVisible(false)}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCard;