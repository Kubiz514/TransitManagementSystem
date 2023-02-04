package com.tms.TMS.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;

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
    public LocalDateTime DateTime;

    @ManyToOne
    @JoinColumn(name="BusId")
    public Bus Bus;
}
