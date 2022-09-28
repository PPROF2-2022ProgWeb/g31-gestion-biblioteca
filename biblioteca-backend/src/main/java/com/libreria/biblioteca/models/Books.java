package com.libreria.biblioteca.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "date", nullable = false)
    private String date;

    @Column(name = "author", nullable = false)
    private String author;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "edit", nullable = false)
    private String edit;

    @Column(name = "lang", nullable = false)
    private String lang;

    @Column(name = "pages", nullable = false)
    private String pages;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "ejemplares", nullable = false)
    private String ejemplares;

    @Column(name="available", nullable = false)
    private Integer available;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getEdit() {
        return edit;
    }

    public void setEdit(String edit) {
        this.edit = edit;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public String getPages() {
        return pages;
    }

    public void setPages(String pages) {
        this.pages = pages;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEjemplares() {
        return ejemplares;
    }

    public void setEjemplares(String ejemplares) {
        this.ejemplares = ejemplares;
    }

    public Integer getAvailable() {
        return available;
    }

    public void setAvailable(Integer available) {
        this.available = available;
    }

    public Books(){}

    public Books(Long id, String nombre, String autor, String date, String edit, Integer disp, String categoria, String descripcion, String ejemplares, String lang, String pages){
        this.id=id;
        this.title=nombre;
        this.author=autor;
        this.date=date;
        this.edit=edit;
        this.available=disp;
        this.category=categoria;
        this.description=descripcion;
        this.ejemplares=ejemplares;
        this.lang=lang;
        this.pages=pages;

    }
}
