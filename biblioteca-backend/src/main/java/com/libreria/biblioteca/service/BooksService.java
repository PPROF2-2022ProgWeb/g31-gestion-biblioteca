package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Books;
import com.libreria.biblioteca.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BooksService implements IBooksService{

    @Autowired
    public BooksRepository booksRepository;

    @Override
    public List<Books> traerBooks(){
        return booksRepository.findAll();
    }

    @Override
    public void crearBooks(Books books){
        booksRepository.save(books);
    }

    @Override
    public void bajarBooks(Integer id){
        booksRepository.deleteById(Long.valueOf(id));
    }
}
