package com.tms.TMS.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name="Schedules")
public class Schedule {
    @Id
    @GeneratedValue
    public long Id;

    @NotNull(message = "Date time is required")
    @Column(nullable=false)
    public LocalDateTime Departure;

    @Column(nullable=false)
    public boolean Temporary;

    @ManyToOne
    @JoinColumn(name="StopId")
    public Stop Stop;

    public Schedule() {};

}
