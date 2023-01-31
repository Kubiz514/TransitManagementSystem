package com.tms.TMS.Models;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.List;

@Entity
@Table(name="Buses")
public class Bus {
    @Id
    public long Id;
    public String Name;
    public String Description;

    @OneToMany(mappedBy = "Bus")
    public List<Route> Routes;

    public Bus() {}
}
