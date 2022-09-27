package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Lendings;
import com.libreria.biblioteca.repository.LendingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
}
