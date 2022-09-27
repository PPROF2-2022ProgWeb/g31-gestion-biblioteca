package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Users;
import com.libreria.biblioteca.repository.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService implements IUsersService{

    @Autowired
    public UsersRepository userRepo;

    @Override
    public List<Users> traerUsers(){
        return userRepo.findAll();
    }

    @Override
    public void crearUsers(Users users){
        userRepo.save(users);
    }

    @Override
    public void bajarUsers(Integer id){
        userRepo.deleteById(Long.valueOf(id));
    }

    @Override
    public Optional<Users> buscarUser(Integer id){
       return userRepo.findById(Long.valueOf(id));

    }

}
