package com.tms.TMS.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="Drivers")
public class Driver {
    @Id
    @GeneratedValue
    public long Id;
    @NotEmpty(message = "First name is mandatory")
    public String FirstName;
    @NotEmpty(message = "Last name is mandatory")
    public String LastName;
    @NotEmpty(message = "Contact info is mandatory")
    public String ContactInfo;
    @NotNull(message = "Hired Date is required")
    public LocalDateTime HiredDate;
    @OneToMany(mappedBy = "Driver", cascade = CascadeType.DETACH, orphanRemoval = false)
    private List<Bus> Buses;
}
