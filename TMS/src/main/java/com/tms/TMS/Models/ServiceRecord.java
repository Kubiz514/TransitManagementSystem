package com.tms.TMS.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name="ServiceRecords")
public class ServiceRecord {
    @Id
    @GeneratedValue
    public long Id;
    @NotEmpty(message = "Description info is mandatory")
    public String Description;
    @NotEmpty(message = "Details info is mandatory")
    public String Details;
    @NotNull(message = "Date time is required")
    public LocalDateTime DateTime;

    @ManyToOne
    @JoinColumn(name="BusId")
    public Bus Bus;
}
