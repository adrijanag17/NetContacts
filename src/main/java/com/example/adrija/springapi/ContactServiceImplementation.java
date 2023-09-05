package com.example.adrija.springapi;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImplementation implements ContactService {

    private final ContactRepository contactRepository;

    public ContactServiceImplementation(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @Override
    public Contact getContactById(Long id) {
        return contactRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Contact not found with id: " + id));
    }

    @Override
    public List<Contact> searchContacts(String query){
        return contactRepository.findByNameContaining(query);
    }

    @Override
    public void createContact(Contact contact) {
        contactRepository.save(contact);
    }

    @Override
    public void updateContact(Long id, Contact updatedContact) {
        Contact existingContact = contactRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Contact not found with id: " + id));

        existingContact.setName(updatedContact.getName());
        existingContact.setEmail(updatedContact.getEmail());
        existingContact.setOrg(updatedContact.getOrg());
        existingContact.setRole(updatedContact.getRole());
        existingContact.setVia(updatedContact.getVia());

        contactRepository.save(existingContact);
    }

    @Override
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}

