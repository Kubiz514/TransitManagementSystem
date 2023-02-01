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
    private Brand Brand;

    @ManyToOne
    @JoinColumn(name="DriverId")
    private Driver Driver;

    @OneToMany(mappedBy = "Bus", cascade = CascadeType.DETACH, orphanRemoval = false)
    private List<ServiceRecord> ServiceRecords;

    @OneToMany(mappedBy = "Bus", cascade = CascadeType.DETACH, orphanRemoval = false)
    private List<Document> Documents;

    @OneToMany(mappedBy = "Bus", cascade = CascadeType.DETACH, orphanRemoval = false)
    private List<Route> Routes;

    public Bus() {}
}
