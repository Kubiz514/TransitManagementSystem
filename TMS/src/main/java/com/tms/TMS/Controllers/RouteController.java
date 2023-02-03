package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Driver;
import com.tms.TMS.Models.Route;
import com.tms.TMS.Repositories.IRouteRepository;
import com.tms.TMS.Services.ApiErrorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/routes")

public class RouteController {

    @Autowired
    IRouteRepository repository;
    @Autowired
    ApiErrorsService errorsService;
    @GetMapping("")
    public Iterable<Route> getAll(){
        Iterable<Route> entities = repository.findAll();
        return entities;
    }

    @PostMapping("")
    public void create(@RequestBody Route route)
    {

        try {
            repository.save(route);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not save route");
        }
    }

    @PutMapping("")
    public void update(@RequestBody Route route) {

        try {
            repository.save(route);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not update route");
        }
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
