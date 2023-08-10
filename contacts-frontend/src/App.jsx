import ContactsTable from './components/ContactsTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ContactsTable contacts={contacts} />
    </div>
  );
}

export default App;
