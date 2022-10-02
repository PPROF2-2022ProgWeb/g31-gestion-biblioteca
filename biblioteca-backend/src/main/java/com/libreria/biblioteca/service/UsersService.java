package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Users;
import com.libreria.biblioteca.repository.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JPanel;

import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;
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
    public void bajarUsers(Long id){
        userRepo.deleteById(id);
    }

    @Override
    public Optional<Users> buscarUser(Long id){
       return userRepo.findById(id);
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

   /* @Override
    public void InsertLending(int id, String bookid) throws SQLException {
        Statement stm = reg.createStatement();
        String date = getFechaActual();
        Date ahora = new Date();
        Date devol = sumarFechasDias(ahora, 5);//Sumamos 5 días a la fecha actual.
        SimpleDateFormat formateador = new SimpleDateFormat("dd-MM-yyyy");
        String dev = formateador.format(devol);
        stm.executeUpdate("INSERT INTO `lendings` (`id`, `user_id`, `book_id`, `date_out`, `date_return`) VALUES (NULL, '"+id+"', '"+ bookid +"', '"+ date +"', '"+dev+"')");
        stm.executeUpdate("UPDATE `books` SET `available` = available-1 WHERE `id` = '"+ bookid +"';");
        javax.swing.JOptionPane.showMessageDialog(this, "¡Prestamo realizado correctamente! \n", "HECHO", javax.swing.JOptionPane.INFORMATION_MESSAGE);

    }*/


}
