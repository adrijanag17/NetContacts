import React from 'react';
import logo from '../../public/handshake.png'

const Header = () => {
  return (
    <header className="py-6 text-gray-800">
      <div className="container mx-auto flex items-center text-center justify-center">
        <div className="flex items-center">
          <div className="rounded-full border-2 border-black w-24 h-24 p-1 mr-4 ml-4">
            <img src={logo} alt="Handshake Logo" className="w-full h-full rounded-full" />
          </div>
          <div>
            <h1 className="text-4xl font-semibold mb-2">NetContacts</h1>
            <p className="text-lg text-gray-600">All your professional network contacts in one place</p>
          </div>
        </div>
      </div>
    </header>
  );
};



export default Header;
