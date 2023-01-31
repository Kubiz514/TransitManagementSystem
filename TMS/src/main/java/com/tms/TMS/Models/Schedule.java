package com.tms.TMS.Models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="Schedules")
public class Schedule {
    @Id
    @GeneratedValue
    public long Id;

    @Column(nullable=false)
    public LocalDateTime Departure;

    @Column(nullable=false)
    public boolean temporary;

    @ManyToOne
    @JoinColumn(name="StopId")
    public Stop Stop;

    public Schedule() {};

}
