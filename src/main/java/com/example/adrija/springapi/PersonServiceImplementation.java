package com.example.adrija.springapi;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImplementation implements PersonService {

    private final PersonRepository personRepository;

    public PersonServiceImplementation(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    @Override
    public Person getPersonById(Long id) {
        return personRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Person not found with id: " + id));
    }

    @Override
    public void createPerson(Person person) {
        personRepository.save(person);
    }

    @Override
    public void updatePerson(Long id, Person updatedPerson) {
        Person existingPerson = personRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Person not found with id: " + id));

        existingPerson.setName(updatedPerson.getName());
        existingPerson.setEmail(updatedPerson.getEmail());
        existingPerson.setOrg(updatedPerson.getOrg());
        existingPerson.setRole(updatedPerson.getRole());
        existingPerson.setVia(updatedPerson.getVia());

        personRepository.save(existingPerson);
    }

    @Override
    public void deletePerson(Long id) {
        personRepository.deleteById(id);
    }
}

