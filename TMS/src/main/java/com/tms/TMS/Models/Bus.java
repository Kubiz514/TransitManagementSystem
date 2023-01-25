package com.tms.TMS.Models;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name="Buses")
public class Bus {
    @Id
    public long Id;
    public String Name;
    public String Description;

    public Bus() {}
}
