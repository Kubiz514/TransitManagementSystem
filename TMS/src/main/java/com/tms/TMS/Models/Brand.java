package com.tms.TMS.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;

import java.util.List;

@Entity
@Table(name="Brands")
public class Brand {
    @Id
    @GeneratedValue
    public long Id;
    @NotEmpty(message = "Name is mandatory")
    public String Name;
    @NotEmpty(message = "Description is mandatory")
    public String Description;

    @OneToMany(mappedBy = "Brand", cascade = CascadeType.DETACH, orphanRemoval = false)
    private List<Bus> Buses;
}
