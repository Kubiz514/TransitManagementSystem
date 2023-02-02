package com.tms.TMS.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Routes")
public class Route {
    @Id
    @GeneratedValue
    public long Id;

    @Column(nullable=false)
    public String Name;

    @ManyToOne
    @JoinColumn(name="BusId")
    public Bus Bus;

    @OneToMany(mappedBy = "Route", cascade = CascadeType.DETACH, orphanRemoval = false)
    private List<Stop> Stops;

    public Route() {};
}
