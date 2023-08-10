import ContactsTable from './components/ContactsTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from './components/ContactCard';


function App() {
//   const contacts = [
//     {
//         id: 1,
//         name: 'John Doe',
//         email: 'john@example.com',
//         org: 'ABC',
//         role: 'SDE',
//         via: 'College career fair'
//       },
//       {
//         id: 2,
//         name: 'Jane Doe',
//         email: 'jane@example.com',
//         org: 'XYZ',
//         role: 'Recruiter',
//         via: 'University career fair'
//       },
//   ];

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        // Fetch data from backend API
        axios.get('http://localhost:8080/contacts')
        .then(response => {
            // Update the contacts array with fetched data
            setContacts(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const handleDeleteContact = (deletedId) => {
        // Remove the deleted contact from the contacts array
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== deletedId));
    };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10 w-full max-w-screen-lg mx-auto">
        {contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} onDelete={handleDeleteContact}/>
        ))}
      </div>
    </div>
  );
}

export default App;