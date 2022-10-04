package com.libreria.biblioteca.service;

import com.libreria.biblioteca.models.Books;
import com.libreria.biblioteca.models.Connect;
import com.libreria.biblioteca.models.Lendings;
import com.libreria.biblioteca.models.Users;
import com.libreria.biblioteca.repository.BooksRepository;
import com.libreria.biblioteca.repository.LendingsRepository;
import com.libreria.biblioteca.repository.UsersRepository;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

import java.sql.Connection;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;


@Service
public class LendingsService extends Component implements ILendingsService {
    Connect conn=new Connect();
    Connection reg=conn.getConnection();


    @Autowired
    public LendingsRepository lendingsRepository;

    @Autowired
    private UsersRepository usuario;

    @Autowired
    private BooksRepository libro;

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




    public boolean UserExist(int id) throws SQLException {
        boolean res = false;
        Statement stm = reg.createStatement();
        ResultSet re = stm.executeQuery("SELECT `id` FROM `users` WHERE `id` = '"+id+"' LIMIT 1");
        if(re.next())
            res = true;

        return res;
    }

    public boolean BookExist(String bookid) throws SQLException{
        boolean res = false;
        Statement stm = reg.createStatement();
        ResultSet re = stm.executeQuery("SELECT `id` FROM `books` WHERE `id` = '"+bookid+"' LIMIT 1");
        if(re.next())
            res = true;

        return res;
    }

    public boolean BookAvailable(String bookid) throws SQLException{
        boolean res = false;
        Statement stm = reg.createStatement();
        ResultSet re = stm.executeQuery("SELECT `available` FROM `books` WHERE `id` = '"+bookid+"' LIMIT 1");
        if(re.next()){
            int av = Integer.parseInt(re.getString("available"));
            if(av >= 1)
                res = true;
        }

        return res;
    }

    public boolean CheckSanction(int userid, String bookid) throws SQLException, ParseException{
        boolean res = false;
        Statement stm = reg.createStatement();
        ResultSet re = stm.executeQuery("SELECT * FROM `lendings` WHERE `id` = '"+bookid+"' AND `user_id` = '"+userid+"' LIMIT 1");
        System.out.println("1");
        if(re.next()){
            System.out.println("2");
            Date ahora = new Date();
            Date returned = deStringToDate(re.getString("dia_devolucion"));
            System.out.println("2");
            int days = diferenciasDeFechas(returned, ahora);
            System.out.println("3");
            System.out.println(days);
            int days2 = diferenciasDeFechas(ahora, returned);
            System.out.println(days2);
            if(days <= 0)
                res = true;
            System.out.println("4");
        }
        System.out.println("5");
        return res;
    }

    public boolean CheckLending(int userid, String bookid) throws SQLException{
        boolean res = false;
        Statement stm = reg.createStatement();
        ResultSet re = stm.executeQuery("SELECT * FROM `lendings` WHERE `user_id` = '"+userid+"' AND `book_id` = '"+ bookid +"'");
        if(re.next()){
            res = true;
        }

        return res;
    }


    public void Devolutions(Long fo, Long bookid) throws SQLException, ParseException{
        conn = new Connect();
        reg = conn.getConnection();
        Statement stm = reg.createStatement();
        int days = -1;
        boolean ready = false;
        do{
            ResultSet re = stm.executeQuery("SELECT * FROM `lendings` WHERE `book_id` = '"+bookid+"' AND `user_id` = '"+fo+"' LIMIT 1");
            if(re.next()){
                Date ahora = new Date();
                Date returned = deStringToDate(re.getString("dia_devolucion"));
                days = diferenciasDeFechas(ahora, returned);
            }
            ready = true;
        }while(!ready);
        if(ready){
            stm.executeUpdate("DELETE FROM `lendings` WHERE `book_id` = '"+ bookid +"' AND `user_id` = '"+ fo +"' LIMIT 1");
            stm.executeUpdate("UPDATE `books` SET `available` = available+1 WHERE `id` = '"+ bookid +"';");
            if(days <= 0){
                int money = 0;
                money = days * -1;
                int cost = 5;// Costo por día retardado.
                money = money * cost;
                stm.executeUpdate("UPDATE `users` SET `sanctions` = sanctions+1, `sanc_money` = sanc_money+'"+ money +"' WHERE `id` = '"+ fo +"';");
                  }

        }
    }

    public static String getFechaActual() {
        Date ahora = new Date();
        SimpleDateFormat formateador = new SimpleDateFormat("dd-MM-yyyy");
        return formateador.format(ahora);
    }


    //Diferencias entre dos fechas
    //@param fechaInicial La fecha de inicio
    //@param fechaFinal  La fecha de fin
    //@return Retorna el numero de dias entre dos fechas
    public static synchronized int diferenciasDeFechas(Date fechaInicial, Date fechaFinal) throws ParseException {

        DateFormat df = DateFormat.getDateInstance(DateFormat.MEDIUM);
        String fechaInicioString = df.format(fechaInicial);
        try {
            fechaInicial = df.parse(fechaInicioString);
        } catch (ParseException ex) {
        }

        String fechaFinalString = df.format(fechaFinal);
        fechaFinal = df.parse(fechaFinalString);

        long fechaInicialMs = fechaInicial.getTime();
        long fechaFinalMs = fechaFinal.getTime();
        long diferencia = fechaFinalMs - fechaInicialMs;
        double dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        return ((int) dias);
    }

    //Devuele un java.util.Date desde un String en formato dd-MM-yyyy
    //@param La fecha a convertir a formato date
    //@return Retorna la fecha en formato Date
    public static synchronized java.util.Date deStringToDate(String fecha) {
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd-MM-yyyy");
        Date fechaEnviar = null;
        try {
            fechaEnviar = formatoDelTexto.parse(fecha);
            return fechaEnviar;
        } catch (ParseException ex) {
            ex.printStackTrace();
            return null;
        }
    }
//-------------------------------------------------------------------------------------------------------



    public void agregar(Lendings p) {
        try {
            if (p.getBook_id() == null) {
                throw new Exception("El Prestamo para agregar no tiene identificador de Libro");
            }
            if (p.getUser_id() == null) {
                throw new Exception("El Prestamo para agregar no tiene identificador de Usuario");
            }

            if(p.getDate_out() == null || p.getDia_devolucion_estimativo() == null) {
                // Manejo de Fechas impuesto en consigna.
                LocalDate hoy = LocalDate.now();
                LocalDate entrega = LocalDate.now().plusDays( 15L);
                Date fechaInicio = Date.from(hoy.atStartOfDay(ZoneId.systemDefault()).toInstant());
                Date fechaEntrega = Date.from(entrega.atStartOfDay(ZoneId.systemDefault()).toInstant());

                // Fecha de 15 dias como se solicita en consigna
                p.setDate_out(fechaInicio);
                p.setDia_devolucion_estimativo(fechaEntrega);
            }

            // Revisamos que el usuario exista
            Optional<Users> usBusqueda = usuario.findById(p.getUser_id());
            if (usBusqueda.get().getId().equals(p.getUser_id())) {
                // Revisamos que el Libro exista
                Optional<Books> liBusqueda = libro.findById(p.getBook_id());
                if (liBusqueda.get().getId().equals(p.getBook_id())) {
                    lendingsRepository.save(p);
                } else {
                    throw new Exception("El Prestamo que va a registrar no tiene Libro registrado");
                }
            } else {
                throw new Exception("El Prestamo que va a registrar no tiene Usuario registrado");
            }
        } catch (Exception e) {
            LogManager.getLogger("Un error ha ocurrido: -> { " + e.getMessage()
                    );
        }
    }





}
