package com.libreria.biblioteca.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
public class Lendings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long user_id;

    @Column(name="book_id", nullable = false)
    private Long book_id;

    @Column(name = "date_out", nullable = true)
    private String date_out;

    @Column(name = "date_return", nullable = true)
    private   String date_return;

    @Column(name = "dia_devolucion", nullable = true)
    private Date dia_devolucion;

    public Long getId() {
        return id;
    }



    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getBook_id() {
        return book_id;
    }

    public void setBook_id(Long book_id) {
        this.book_id = book_id;
    }

    public String getDate_out() {
        return date_out;
    }

    public void setDate_out(String date_out) {
        this.date_out = date_out;
    }

    public String getDate_return() {
        return date_return;
    }

    public void setDate_return(String date_return) {
        this.date_return = date_return;
    }

    public Date getDia_devolucion_estimativo() {
        return dia_devolucion;
    }

    public void setDia_devolucion_estimativo(Date dia_devolucion_estimativo) {
        this.dia_devolucion = dia_devolucion_estimativo;
    }

    public Lendings(){}

    public Lendings(Long id, Long book_id, String devol, String date_out, Long user_id){
        this.id=id;
        this.book_id=book_id;
        this.date_return=devol;
        this.date_out=date_out;
        this.user_id=user_id;
    }


}
