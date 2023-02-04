package com.tms.TMS.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;

@Entity
@Table(name="Stops")
public class Stop {

    @Id
    @GeneratedValue
    public long Id;

    @NotNull(message = "Latitude is mandatory")
    @Column(nullable=false)
    public float Latitude;

    @NotNull(message = "Longitude is mandatory")
    @Column(nullable=false)
    public float Longitude;

    @ManyToOne
    @JoinColumn(name="RouteId")
    public Route Route;

    @OneToMany(mappedBy = "Stop", cascade = CascadeType.DETACH, orphanRemoval = false)
    private List<Schedule> Schedules;

    public Stop() {};
}
