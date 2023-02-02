package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Document;
import com.tms.TMS.Models.Driver;
import com.tms.TMS.Models.Route;
import com.tms.TMS.Repositories.IDocumentsRepository;
import com.tms.TMS.Repositories.IDriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @PostMapping("")
    public void create(@RequestBody Driver driver)
    {
        repository.save(driver);
    }

    @PutMapping("")
    public void update(@RequestBody Driver driver) {
        repository.save(driver);
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
}
