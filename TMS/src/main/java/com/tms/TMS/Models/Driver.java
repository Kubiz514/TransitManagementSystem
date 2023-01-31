package com.tms.TMS.Models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="Drivers")
public class Driver {
    @Id
    @GeneratedValue
    public long Id;
    public String FirstName;
    public String LastName;
    public String ContactInfo;
    public LocalDateTime HiredDate;
    @OneToMany(mappedBy = "Driver")
    private List<Bus> Buses;
}
