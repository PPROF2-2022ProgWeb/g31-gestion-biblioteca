package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Users;

import java.util.List;

public interface IUsersService {
    public List<Users> traerUsers();

    public void crearUsers(Users usuario);

    public void bajarUsers(Integer id);
}
