package com.tms.TMS.Models;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="Documents")
public class Document {
    @Id
    @GeneratedValue
    public long Id;
    public String DocumentType;
    public LocalDateTime ValidTo;

    @ManyToOne
    @JoinColumn(name="BusId")
    public Bus Bus;
}
