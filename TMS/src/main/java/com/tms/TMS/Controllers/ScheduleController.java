package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Schedule;
import com.tms.TMS.Repositories.IScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
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
}
