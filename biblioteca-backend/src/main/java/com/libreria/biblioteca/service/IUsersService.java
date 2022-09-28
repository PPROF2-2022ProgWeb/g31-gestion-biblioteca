package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Users;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IUsersService {
    public List<Users> traerUsers();

    public void crearUsers(Users usuario);

    public void bajarUsers(Integer id);

    public Optional<Users> buscarUser(Integer id);

    public void updateUser(Users u);

    public Optional<Users> buscarUserName(String nombre);
}
