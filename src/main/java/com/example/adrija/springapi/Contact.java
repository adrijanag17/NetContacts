package com.example.adrija.springapi;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String org;
    private String role;
    private String via;

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setOrg(String org) {
        this.org = org;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setVia(String via) {
        this.via = via;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getOrg() {
        return org;
    }

    public String getRole() {
        return role;
    }

    public String getVia() {
        return via;
    }

}
