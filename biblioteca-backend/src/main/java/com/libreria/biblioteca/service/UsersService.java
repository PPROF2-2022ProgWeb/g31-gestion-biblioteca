package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Users;
import com.libreria.biblioteca.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UsersService implements IUsersService{

    @Autowired
    public UsersService usersService;

    @Override
    public List<Users> traerUsers(){
        return UsersRepository.findAll();
    }

    @Override
    public void crearUsers(Users users){
        UsersRepository.save(users);
    }

    @Override
    public void bajarUsers(Integer id){
        UsersRepository.deleteById();
    }
}
