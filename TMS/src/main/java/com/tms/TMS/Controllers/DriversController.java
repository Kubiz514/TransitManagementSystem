package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Bus;
import com.tms.TMS.Models.Document;
import com.tms.TMS.Models.Driver;
import com.tms.TMS.Models.Route;
import com.tms.TMS.Repositories.IDocumentsRepository;
import com.tms.TMS.Repositories.IDriverRepository;
import com.tms.TMS.Services.ApiErrorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/drivers")

public class DriversController {

    @Autowired
    IDriverRepository repository;
    @Autowired
    ApiErrorsService errorsService;
    @GetMapping("")
    public Iterable<Driver> getAll(){
        Iterable<Driver> entities = repository.findAll();
        return entities;
    }

    @PostMapping("")
    public void create(@RequestBody Driver driver)
    {
        try {
            repository.save(driver);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not save drive");
        }
    }

    @PutMapping("")
    public void update(@RequestBody Driver driver) {

        try {
            repository.save(driver);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not update drive");
        }
    }
    @GetMapping("/{id}")
    public Optional<Driver> get(@PathVariable("id") long id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/{id}")
    private void delete(@PathVariable("id") long id)
    {
        repository.deleteById(id);
    }

    @PostMapping("/import")
    public void importData(@RequestBody Iterable<Driver> entities)
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
