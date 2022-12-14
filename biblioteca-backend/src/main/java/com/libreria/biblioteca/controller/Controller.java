package com.libreria.biblioteca.controller;
import com.libreria.biblioteca.models.Books;
import com.libreria.biblioteca.models.Lendings;
import com.libreria.biblioteca.models.Users;
import com.libreria.biblioteca.repository.BooksRepository;
import com.libreria.biblioteca.repository.LendingsRepository;
import com.libreria.biblioteca.repository.UsersRepository;
import com.libreria.biblioteca.service.IBooksService;
import com.libreria.biblioteca.service.ILendingsService;
import com.libreria.biblioteca.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class Controller {
    @Autowired
    private IUsersService usuServi;

    @Autowired
    private IBooksService bookservi;

    @Autowired
    private ILendingsService lendiservi;

    private UsersRepository usuarioRepository;
    private BooksRepository booksRepo;
    private LendingsRepository lendingsRepository;


    @CrossOrigin(origins="http://localhost:4200/nuevo-usuario")
    @PostMapping("/agregarUsers")
    public void agregarUsuario(@RequestBody Users usuario){
        usuServi.crearUsers(usuario);
    }

    @GetMapping("/ver/usuarios")
    @ResponseBody
    public List<Users> verUsers(){
        return usuServi.traerUsers();
    }

    @GetMapping("/ver/usuarios/{id}")
    @ResponseBody
    public Optional<Users> getUser(@PathVariable Long id){
        return usuServi.buscarUser(id);
    }

    @DeleteMapping("/delete/{id}")
    public void bajarUsuario(@PathVariable Long id){
        usuServi.bajarUsers(id);
    }

    @GetMapping("/users/")
    public List<Users> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    @CrossOrigin(origins="")
    @PutMapping("/editarUser")
    public void editarUser(@RequestBody Users usuario){usuServi.updateUser(usuario);}


//-------------------------------------------------------------------

    @CrossOrigin(origins="http://localhost:4200/*")
    @PostMapping("/agregarBooks")
    public void agregarLibro(@RequestBody Books libro){
        bookservi.crearBooks(libro);
    }

    @GetMapping("/verLibro")
    @ResponseBody
    public Optional<Books> verLibro(Long id){
        return bookservi.traerLibro(id);
    }

    @GetMapping("/ver/verLibro/{id}")
    @ResponseBody
    public Optional<Books> getBook(@PathVariable Long id){
        return bookservi.traerLibro(id);
    }

    @GetMapping("/ver/libros")
    @ResponseBody
    public List<Books> verLibros(){
        return bookservi.traerBooks();
    }

    @DeleteMapping("/deletebook/{id}")
    public void bajarLibro(@PathVariable Long id){
        usuServi.bajarUsers(id);
    }

    @CrossOrigin(origins="")
    @PutMapping("/editarBook")
    public void editarLibro(@RequestBody Books libro){bookservi.updateBook(libro);}

    //--------------------------------------------------------------------------------

    @CrossOrigin(origins="http://localhost:4200/*")
    @PostMapping("/agregarLendings")
    public void agregarLendings(@RequestBody Lendings lending){
        lendiservi.agregar(lending);
    }
    @CrossOrigin(origins="http://localhost:4200/*")
    @GetMapping("/ver/lendings")
    @ResponseBody
    public List<Lendings> verLendings(){
        return lendiservi.traerLendings();
    }
    @CrossOrigin(origins="http://localhost:4200/*")
    @DeleteMapping("/deletelending/{id}")
    public void bajarLending(@PathVariable Long id){
        lendiservi.bajarLendings(Math.toIntExact(id));
    }


    @CrossOrigin(origins="http://localhost:4200/*")
    @PostMapping("/devolver")
    public void devolver(@RequestBody Lendings lending) throws SQLException, ParseException {
        lendiservi.Devolutions(lending.getUser_id(), lending.getBook_id());
    }





}

