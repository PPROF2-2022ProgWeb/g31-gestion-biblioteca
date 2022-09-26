package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Books;

import java.util.List;

public interface IBooksService {
    public List<Books> traerBooks();

    public void crearBooks(Books libro);

    public void bajarUsuario(Long id);
}
