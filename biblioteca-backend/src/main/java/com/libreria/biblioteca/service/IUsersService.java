package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Books;

import java.util.List;

public interface IUsersService {
    public List<Books> traerUsers();

    public void crearUsers(Books usuario);

    public void bajarUsers(Long id);
}
