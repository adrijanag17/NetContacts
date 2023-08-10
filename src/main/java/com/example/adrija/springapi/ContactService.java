package com.example.adrija.springapi;

import java.util.List;

public interface ContactService {
    List<Contact> getAllContacts();
    Contact getContactById(Long id);
    void createContact(Contact contact);
    void updateContact(Long id, Contact updateContact);
    void deleteContact(Long id);
}
