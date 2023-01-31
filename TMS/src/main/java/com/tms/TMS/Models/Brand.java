package com.tms.TMS.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Brands")
public class Brand {
    @Id
    @GeneratedValue
    public long Id;
    public String Name;
    public String Description;

    @OneToMany(mappedBy = "Brand")
    private List<Bus> Buses;
}
