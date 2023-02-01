package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Driver;
import com.tms.TMS.Models.Route;
import com.tms.TMS.Repositories.IRouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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
    @GetMapping("/{id}")
    public Optional<Route> get(@PathVariable("id") long id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/{id}")
    private void delete(@PathVariable("id") long id)
    {
        repository.deleteById(id);
    }
}
