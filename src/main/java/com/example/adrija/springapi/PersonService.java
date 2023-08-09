package com.example.adrija.springapi;

import java.util.List;

public interface PersonService {
    List<Person> getAllPersons();
    Person getPersonById(Long id);
    void createPerson(Person person);
    void updatePerson(Long id, Person updatedPerson);
    void deletePerson(Long id);
}
