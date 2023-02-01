package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Route;
import com.tms.TMS.Models.Schedule;
import com.tms.TMS.Repositories.IScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("")
    public void create(@RequestBody Schedule schedule)
    {
        repository.save(schedule);
    }

    @PutMapping("")
    public void update(@RequestBody Schedule schedule)
    {
        repository.save(schedule);
    }
}
