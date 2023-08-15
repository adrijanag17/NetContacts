import ContactsTable from './components/ContactsTable';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from './components/ContactCard';
import EditCard from './components/EditCard';
import Header from './components/Header';
import { PlusIcon } from '@heroicons/react/24/solid';



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

    const handleUpdateContact = (updatedContact) => {
      const updatedContacts = contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );

      setContacts(updatedContacts);
    };

    const handleAddContact = (newContact) => {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-10 max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {contacts.map(contact => (
              <ContactCard key={contact.id} contact={contact} onDelete={handleDeleteContact}
              onEdit={() => handleEditContact(contact)}/>
            ))}
          </div>
      </div>
      <button
        className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
        onClick={() => setIsEditCardVisible(true)}>
        <PlusIcon className="h-5 w-5" />
      </button>
      {isEditCardVisible && <EditCard contact={editingContact}
                                                setIsEditCardVisible={setIsEditCardVisible}
                                                updateContact={handleUpdateContact}
                                                addContact={handleAddContact}/>}

    </div>
  );
}

export default App;