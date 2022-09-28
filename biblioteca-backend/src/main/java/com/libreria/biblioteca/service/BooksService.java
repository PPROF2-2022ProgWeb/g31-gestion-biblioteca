package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Books;
import com.libreria.biblioteca.models.Users;
import com.libreria.biblioteca.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Books> traerLibro(Long id){
        return booksRepository.findById(id);
    }

    public void updateBook(Books b){
        booksRepository
                .findById(b.getId()) // returns Optional<User>
                .ifPresent(book1 -> {
                    book1.setAuthor(b.getAuthor());
                    book1.setAvailable(b.getAvailable());
                    book1.setCategory(b.getCategory());
                    book1.setDescription(b.getDescription());
                    book1.setDate(b.getDate());
                    book1.setEjemplares((b.getEjemplares()));
                    book1.setEdit(b.getEdit());
                    book1.setLang(b.getLang());
                    book1.setTitle(b.getTitle());
                    book1.setPages(b.getPages());

                    booksRepository.save(book1);
                });
    }
}
