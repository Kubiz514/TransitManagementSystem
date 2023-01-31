package com.tms.TMS.Models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="ServiceRecords")
public class ServiceRecord {
    @Id
    @GeneratedValue
    public long Id;
    public String Description;
    public String Details;
    public LocalDateTime DateTime;

    @ManyToOne
    @JoinColumn(name="BusId")
    public Bus Bus;
}
