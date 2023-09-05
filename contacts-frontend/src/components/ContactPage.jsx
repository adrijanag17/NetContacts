import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';
import EditCard from './EditCard';
import Header from './Header';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const ContactPage = () => {

    const [contacts, setContacts] = useState([]);
    const [isEditCardVisible, setIsEditCardVisible] = useState(false);
    const [editingContact, setEditingContact] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(() => {
            // Fetch data from backend API
            axios.get('http://localhost:8080/contacts')
            .then(response => {
                // Update the contacts array with fetched data
                setContacts(response.data);
                setFilteredContacts(response.data);
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

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Filter contacts based on the search query
        const filtered = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(query.toLowerCase())
        );

        // Update the filteredContacts state with the filtered results
        setFilteredContacts(filtered);
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-pink-200">
              <Header />
              <div className="p-10 max-w-screen-lg mx-auto">
                  <div className="relative mx-4 mb-10">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search contacts..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {filteredContacts.map((contact) => (
                      <ContactCard
                        key={contact.id}
                        contact={contact}
                        onDelete={handleDeleteContact}
                        onEdit={() => handleEditContact(contact)}
                      />
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
};

export default ContactPage;