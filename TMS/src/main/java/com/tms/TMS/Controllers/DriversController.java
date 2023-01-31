package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Document;
import com.tms.TMS.Models.Driver;
import com.tms.TMS.Repositories.IDocumentsRepository;
import com.tms.TMS.Repositories.IDriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/drivers")

public class DriversController {

    @Autowired
    IDriverRepository repository;
    @GetMapping("")
    public Iterable<Driver> getAll(){
        Iterable<Driver> entities = repository.findAll();
        return entities;
    }
}
