package com.tms.TMS.Models;

import jakarta.persistence.*;
import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
@Table(name="Buses")
public class Bus {
    @Id
    @GeneratedValue
    public long Id;
    public String Name;
    public String Description;

    @ManyToOne
    @JoinColumn(name="BrandId")
    public Brand Brand;

    @ManyToOne
    @JoinColumn(name="DriverId")
    public Driver Driver;

    @OneToMany(mappedBy = "Bus")
    public List<ServiceRecord> ServiceRecords;

    @OneToMany(mappedBy = "Bus")
    public List<Document> Documents;

    @OneToMany(mappedBy = "Bus")
    public List<Route> Routes;

    public Bus() {}
}
