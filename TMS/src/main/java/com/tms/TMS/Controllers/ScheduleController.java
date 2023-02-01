package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Route;
import com.tms.TMS.Models.Schedule;
import com.tms.TMS.Repositories.IScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/schedules")

public class ScheduleController {

    @Autowired
    IScheduleRepository repository;
    @GetMapping("")
    public Iterable<Schedule> getAll(){
        Iterable<Schedule> entities = repository.findAll();
        return entities;
    }
    @GetMapping("/{id}")
    public Optional<Schedule> get(@PathVariable("id") long id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/{id}")
    private void delete(@PathVariable("id") long id)
    {
        repository.deleteById(id);
    }
}
