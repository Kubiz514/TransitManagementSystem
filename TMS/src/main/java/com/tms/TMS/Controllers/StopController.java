package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Bus;
import com.tms.TMS.Models.Stop;
import com.tms.TMS.Repositories.IStopRepository;
import com.tms.TMS.Services.ApiErrorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.web.ErrorResponseException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
@RequestMapping("/stops")

public class StopController {

    @Autowired
    IStopRepository repository;
    @Autowired
    ApiErrorsService errorsService;
    @GetMapping("")
    public Iterable<Stop> getAll(){
        Iterable<Stop> entities = repository.findAll();
        return entities;
    }

    @PostMapping("")
    public void create(@RequestBody Stop stop)
    {
        try {
            repository.save(stop);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not save entity");
        }
    }

    @PutMapping("")
    public void update(@RequestBody Stop stop) {

        try {
            repository.save(stop);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not update entity");
        }
    }
    @GetMapping("/{id}")
    public Optional<Stop> get(@PathVariable("id") long id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/{id}")
    private void delete(@PathVariable("id") long id)
    {
        repository.deleteById(id);
    }

    @PostMapping("/import")
    public void importData(@RequestBody Iterable<Stop> entities)
    {
        try {
            entities.forEach(entity -> entity.Id = 0);
            repository.saveAll(entities);
        }
        catch(Exception e) {
            errorsService.showErrorMessage(500, "Could not import data");
        }
    }
}
