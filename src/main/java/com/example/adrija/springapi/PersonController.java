package com.example.adrija.springapi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/persons")
public class PersonController {

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping
    public ResponseEntity<List<Person>> getAllPersons() {
        List<Person> persons = personService.getAllPersons();

        return ResponseEntity.ok(persons);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable Long id) {
        Person person = personService.getPersonById(id);
        return ResponseEntity.ok(person);
    }

    @PostMapping
    public ResponseEntity<Void> createPerson(@RequestBody Person person) {
        personService.createPerson(person);
        return ResponseEntity.created(URI.create("/persons/" + person.getId())).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updatePerson(@PathVariable Long id, @RequestBody Person person) {
        personService.updatePerson(id, person);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
        personService.deletePerson(id);
        return ResponseEntity.noContent().build();
    }
}

