package com.tms.TMS.Models;

import jakarta.persistence.*;


@Entity
@Table(name="Buses")
public class Bus {
    @Id
    public long Id;
    public String Name;
    public String Description;

    public Bus() {}
}
