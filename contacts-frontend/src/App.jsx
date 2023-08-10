import { useState } from 'react'
import ContactsTable from './components/ContactsTable';


function App() {
  const contacts = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        org: 'ABC',
        role: 'SDE',
        via: 'College career fair'
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@example.com',
        org: 'XYZ',
        role: 'Recruiter',
        via: 'University career fair'
      },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ContactsTable contacts={contacts} />
    </div>
  );
}

export default App;
