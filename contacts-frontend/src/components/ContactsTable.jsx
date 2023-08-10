import React from 'react';

const ContactsTable = ({ contacts }) => {
  return (
    <div className="container mx-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Organization</th>
            <th className="py-2">Role</th>
            <th className="py-2">Connection Via</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="border-b">
              <td className="py-2">{contact.name}</td>
              <td className="py-2">{contact.email}</td>
              <td className="py-2">{contact.org}</td>
              <td className="py-2">{contact.role}</td>
              <td className="py-2">{contact.via}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
