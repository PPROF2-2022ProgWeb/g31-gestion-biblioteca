package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Lendings;

import java.util.List;

public interface ILendingsService {
    public List<Lendings> traerLendings();

    public void crearLendings(Lendings prestamo);

    public void bajarLendings(Integer id);
}
