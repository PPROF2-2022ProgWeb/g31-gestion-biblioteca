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

    @Override
    public Optional<Users> buscarUserName(String nombre){
        return Optional.ofNullable(userRepo.findByName(nombre));

    }


    @Override
    public void updateUser(Users u) {
        userRepo
                .findById(u.getId()) // returns Optional<User>
                .ifPresent(user1 -> {
                    user1.setName(u.getName());
                    user1.setDomicilio(u.getDomicilio());
                    user1.setLast_name(u.getLast_name());
                    user1.setTel(u.getTel());
                    user1.setSanctions(u.getSanctions());
                    user1.setSanc_money((u.getSanc_money()));

                    userRepo.save(user1);
                });
    }


}
