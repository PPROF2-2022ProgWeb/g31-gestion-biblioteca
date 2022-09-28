package com.libreria.biblioteca.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Lendings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "user_id", nullable = false)
    private Integer user_id = 0;

    @Column(name="book_id", nullable = false)
    private Integer book_id = 0;

    @Column(name = "date_out", nullable = true)
    private String date_out;

    @Column(name = "date_return", nullable = true)
    private   String date_return;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getBook_id() {
        return book_id;
    }

    public void setBook_id(Integer book_id) {
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

    public Lendings(){}

    public Lendings(Integer id, Integer book_id, String devol, String date_out, Integer user_id){
        this.id=id;
        this.book_id=book_id;
        this.date_return=devol;
        this.date_out=date_out;
        this.user_id=user_id;
    }

    public void ifPresent(Object o) {
    }
}
