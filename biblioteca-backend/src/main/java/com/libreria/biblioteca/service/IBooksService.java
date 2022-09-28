package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Books;
import com.libreria.biblioteca.models.Users;

import java.util.List;
import java.util.Optional;

public interface IBooksService {
    public List<Books> traerBooks();

    public void crearBooks(Books libro);

    public void bajarBooks(Integer id);

    public Optional<Books> traerLibro(Long id);

    public void updateBook(Books b);
}
