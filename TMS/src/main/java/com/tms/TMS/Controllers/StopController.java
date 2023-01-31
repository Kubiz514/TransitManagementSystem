package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Stop;
import com.tms.TMS.Repositories.IStopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/stops")

public class StopController {

    @Autowired
    IStopRepository repository;
    @GetMapping("")
    public Iterable<Stop> getAll(){
        Iterable<Stop> entities = repository.findAll();
        return entities;
    }
}
