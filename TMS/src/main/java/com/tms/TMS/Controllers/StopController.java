package com.tms.TMS.Controllers;

import com.tms.TMS.Models.ServiceRecord;
import com.tms.TMS.Models.Stop;
import com.tms.TMS.Repositories.IStopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("")
    public void create(@RequestBody Stop stop)
    {
        repository.save(stop);
    }

    @PutMapping("")
    public void update(@RequestBody Stop stop)
    {
        repository.save(stop);
    }
}
