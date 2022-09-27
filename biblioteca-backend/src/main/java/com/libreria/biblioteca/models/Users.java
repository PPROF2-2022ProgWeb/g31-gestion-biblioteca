package com.libreria.biblioteca.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "last_name_p", nullable = false)
    private String last_name_p;

    @Column(name = "last_name_m", nullable = false)
    private String last_name_m;

    @Column(name = "domicilio", nullable = true)
    private String domicilio;

    @Column(name = "tel", nullable = true)
    private String tel;

    @Column(name = "sanctions", nullable = false)
    private Integer sanctions = 0;

    @Column(name="sanc_money", nullable = false)
    private Integer sanc_money = 0;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLast_name_p() {
        return last_name_p;
    }

    public void setLast_name_p(String last_name_p) {
        this.last_name_p = last_name_p;
    }

    public String getLast_name_m() {
        return last_name_m;
    }

    public void setLast_name_m(String last_name_m) {
        this.last_name_m = last_name_m;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public Integer getSanctions() {
        return sanctions;
    }

    public void setSanctions(Integer sanctions) {
        this.sanctions = sanctions;
    }

    public Integer getSanc_money() {
        return sanc_money;
    }

    public void setSanc_money(Integer sanc_money) {
        this.sanc_money = sanc_money;
    }


    public Users(){}

    public Users(Integer id, String nombre, String domicilio, Integer sanctions, Integer sanc_money, String last_name_m, String telefono, String last_name_p){
        this.name=nombre;
        this.domicilio=domicilio;
        this.sanctions=sanctions;
        this.tel=telefono;
        this.sanc_money=sanc_money;
        this.last_name_m=last_name_m;
        this.last_name_p=last_name_p;
        this.id=id;
    }
}
