package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Route;
import com.tms.TMS.Repositories.IRouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
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
}
