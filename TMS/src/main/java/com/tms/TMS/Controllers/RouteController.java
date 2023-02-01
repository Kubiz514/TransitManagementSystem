package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Route;
import com.tms.TMS.Repositories.IRouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/routes")

public class RouteController {

    @Autowired
    IRouteRepository repository;
    @GetMapping("")
    public Iterable<Route> getAll(){
        Iterable<Route> entities = repository.findAll();
        return entities;
    }

    @PostMapping("")
    public void create(@RequestBody Route route)
    {
        repository.save(route);
    }

    @PutMapping("")
    public void update(@RequestBody Route route)
    {
        repository.save(route);
    }
}
