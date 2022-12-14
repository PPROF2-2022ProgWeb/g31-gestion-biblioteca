package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Books;
import com.libreria.biblioteca.models.Lendings;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.List;
import java.util.Optional;

public interface ILendingsService {
    public List<Lendings> traerLendings();

    public void crearLendings(Lendings prestamo);

    public void bajarLendings(Integer id);

    public Optional<Lendings> traerLending(Long id);

    public void agregar(Lendings p);

    public void Devolutions(Long fo, Long bookid) throws SQLException, ParseException;
}
