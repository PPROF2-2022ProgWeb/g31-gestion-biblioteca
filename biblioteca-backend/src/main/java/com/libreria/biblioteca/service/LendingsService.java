package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Lendings;
import com.libreria.biblioteca.models.Users;
import com.libreria.biblioteca.repository.LendingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LendingsService implements ILendingsService {

    @Autowired
    public LendingsRepository lendingsRepository;

    @Override
    public List<Lendings> traerLendings(){
        return lendingsRepository.findAll();
    }

    @Override
    public void crearLendings(Lendings lendings){
        lendingsRepository.save(lendings);
    }

    @Override
    public void bajarLendings(Integer id){
        lendingsRepository.deleteById(Long.valueOf(id));
    }

    @Override
    public Optional<Lendings> traerLending(Long id){
        return lendingsRepository.findById(id);
    }

   /* @Override
    public void updateLending(Lendings lend) {
        lendingsRepository
                .findByUserAndBook(lend.getBook_id(), lend.getUser_id()) // returns Optional<User>
                .ifPresent(user1 -> {
                    user1.setName(u.getName());
                    user1.setDomicilio(u.getDomicilio());
                    user1.setLast_name(u.getLast_name());
                    user1.setTel(u.getTel());
                    user1.setSanctions(u.getSanctions());
                    user1.setSanc_money((u.getSanc_money()));

                    userRepo.save(user1);
                });
    }*/


}
