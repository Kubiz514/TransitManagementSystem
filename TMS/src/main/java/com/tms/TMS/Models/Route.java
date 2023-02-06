package com.tms.TMS.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;

import java.util.List;

@Entity
@Table(name="Routes")
public class Route {
    @Id
    @GeneratedValue
    public long Id;

    @Column(nullable=false)
    @NotEmpty(message = "Name info is mandatory")
    public String Name;

    @ManyToOne
    @JoinColumn(name="BusId")
    public Bus Bus;

    @OneToMany(mappedBy = "Route", cascade = CascadeType.DETACH, orphanRemoval = false)
    private List<Stop> Stops;

    public Route() {};
}
