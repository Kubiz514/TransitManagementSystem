package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Driver;
import com.tms.TMS.Models.Route;
import com.tms.TMS.Models.ServiceRecord;
import com.tms.TMS.Repositories.IDriverRepository;
import com.tms.TMS.Repositories.IServiceRecordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/service-records")

public class ServiceRecordsController {

    @Autowired
    IServiceRecordsRepository repository;
    @GetMapping("")
    public Iterable<ServiceRecord> getAll(){
        Iterable<ServiceRecord> entities = repository.findAll();
        return entities;
    }

    @PostMapping("")
    public void create(@RequestBody ServiceRecord serviceRecord)
    {
        repository.save(serviceRecord);
    }

    @PutMapping("")
    public void update(@RequestBody ServiceRecord serviceRecord)
    {
        repository.save(serviceRecord);
    @GetMapping("/{id}")
    public Optional<ServiceRecord> get(@PathVariable("id") long id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/{id}")
    private void delete(@PathVariable("id") long id)
    {
        repository.deleteById(id);
    }
}
