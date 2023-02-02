package com.tms.TMS.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Stops")
public class Stop {

    @Id
    @GeneratedValue
    public long Id;

    @Column(nullable=false)
    public float Latitude;

    @Column(nullable=false)
    public float Longitude;

    @ManyToOne
    @JoinColumn(name="RouteId")
    public Route Route;

    @OneToMany(mappedBy = "Stop", cascade = CascadeType.DETACH, orphanRemoval = false)
    private List<Schedule> Schedules;

    public Stop() {};
}
