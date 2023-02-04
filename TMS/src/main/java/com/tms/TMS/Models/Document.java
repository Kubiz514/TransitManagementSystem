package com.tms.TMS.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

@Entity
@Table(name="Documents")
public class Document {
    @Id
    @GeneratedValue
    public long Id;
    @NotEmpty(message = "DocumentType is mandatory")
    public String DocumentType;
    @NotNull(message = "Valid to is required")
    public LocalDateTime ValidTo;

    @ManyToOne
    @JoinColumn(name="BusId")
    public Bus Bus;
}
