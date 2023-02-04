package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Bus;
import com.tms.TMS.Models.Route;
import com.tms.TMS.Models.Schedule;
import com.tms.TMS.Repositories.IScheduleRepository;
import com.tms.TMS.Services.ApiErrorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/schedules")

public class ScheduleController {

    @Autowired
    IScheduleRepository repository;
    @Autowired
    ApiErrorsService errorsService;
    @GetMapping("")
    public Iterable<Schedule> getAll(){
        Iterable<Schedule> entities = repository.findAll();
        return entities;
    }

    @PostMapping("")
    public void create(@RequestBody Schedule schedule)
    {

        try {
            repository.save(schedule);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not save schedule");
        }
    }

    @PutMapping("")
    public void update(@RequestBody Schedule schedule) {

        try {
            repository.save(schedule);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not update schedule");
        }
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

    @PostMapping("/import")
    public void importData(@RequestBody Iterable<Schedule> entities)
    {
        entities.forEach(entity -> entity.Id = 0);
        repository.saveAll(entities);
    }
}
