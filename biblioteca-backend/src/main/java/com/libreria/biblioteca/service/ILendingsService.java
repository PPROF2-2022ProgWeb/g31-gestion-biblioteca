package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Books;

import java.util.List;

public interface ILendingsService {
    public List<Books> traerLendings();

    public void crearLendings(Books prestamo);

    public void bajarLendings(Long id);
}
