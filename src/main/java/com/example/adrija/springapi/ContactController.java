package com.example.adrija.springapi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() {
        List<Contact> contacts = contactService.getAllContacts();

        return ResponseEntity.ok(contacts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable Long id) {
        Contact contact = contactService.getContactById(id);
        return ResponseEntity.ok(contact);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Contact>> searchContacts(@RequestParam String query){
        List<Contact> searchResults = contactService.searchContacts(query);
        return ResponseEntity.ok(searchResults);
    }

    @PostMapping
    public ResponseEntity<Void> createContact(@RequestBody Contact contact) {
        contactService.createContact(contact);
        return ResponseEntity.created(URI.create("/contacts/" + contact.getId())).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateContact(@PathVariable Long id, @RequestBody Contact contact) {
        contactService.updateContact(id, contact);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContact(@PathVariable Long id) {
        contactService.deleteContact(id);
        return ResponseEntity.noContent().build();
    }
}

