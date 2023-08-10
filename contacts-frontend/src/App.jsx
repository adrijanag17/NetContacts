import ContactsTable from './components/ContactsTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from './components/ContactCard';
import EditCard from './components/EditCard';



function App() {

    const [contacts, setContacts] = useState([]);
    const [isEditCardVisible, setIsEditCardVisible] = useState(false);
    const [editingContact, setEditingContact] = useState(null);


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

    const handleEditContact = (contact) => {
        setEditingContact(contact);
        setIsEditCardVisible(true);
    };

//     const handleUpdateContact = (updatedContact) => {
//         // Find the id of the updated contact
//         const updatedIndex = contacts.findIndex((contact) => contact.id === updatedContact.id);
//
//         if (updatedIndex !== -1) {
//           // Update the contacts array with the updated contact
//           setContacts((prevContacts) => [
//             ...prevContacts.slice(0, updatedIndex),
//             updatedContact,
//             ...prevContacts.slice(updatedIndex + 1),
//           ]);
//         }
//     };

    const handleUpdateContact = (updatedContact) => {
      const updatedContacts = contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );

      setContacts(updatedContacts);
    };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10 w-full max-w-screen-lg mx-auto">
        {contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} onDelete={handleDeleteContact}
          onEdit={() => handleEditContact(contact)}/>
        ))}
      </div>
      {isEditCardVisible && <EditCard contact={editingContact}
                                      setIsEditCardVisible={setIsEditCardVisible}
                                      updateContact={handleUpdateContact}/>}
    </div>
  );
}

export default App;