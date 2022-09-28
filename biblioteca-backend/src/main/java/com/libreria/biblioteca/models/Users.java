package com.libreria.biblioteca.models;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.util.Optional;

@Getter @Setter
@Entity
@Proxy(lazy=false)
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "last_name", nullable = false)
    private String last_name;

    @Column(name = "domicilio", nullable = true)
    private String domicilio;

    @Column(name = "tel", nullable = true)
    private String tel;

    @Column(name = "sanctions", nullable = false)
    private Integer sanctions = 0;

    @Column(name="sanc_money", nullable = false)
    private Integer sanc_money = 0;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
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

    public Users(Long id, String nombre, String domicilio, Integer sanctions, Integer sanc_money, String last_name, String telefono){
        this.name=nombre;
        this.domicilio=domicilio;
        this.sanctions=sanctions;
        this.tel=telefono;
        this.sanc_money=sanc_money;
        this.last_name=last_name;
        this.id=id;
    }
}
