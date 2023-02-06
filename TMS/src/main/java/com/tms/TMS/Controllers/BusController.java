package com.tms.TMS.Controllers;
import com.tms.TMS.Models.Bus;
import com.tms.TMS.Models.Document;
import com.tms.TMS.Repositories.IBusRepository;
import com.tms.TMS.Services.ApiErrorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@ResponseBody
@RequestMapping("/buses")

public class BusController {

    @Autowired
    IBusRepository repository;
    @Autowired
    ApiErrorsService errorsService;
    @GetMapping("")
    public Iterable<Bus> getAll(){
        Iterable<Bus> entities = repository.findAll();
        return entities;
    }

    @PostMapping("")
    public void create(@RequestBody Bus bus)
    {
        try {
            repository.save(bus);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not save bus");
        }
    }

    @PutMapping("")
    public void update(@RequestBody Bus bus) {

        try {
            repository.save(bus);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not update bus");
        }
    }
    @GetMapping("/{id}")
    public Optional<Bus> get(@PathVariable("id") long id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/{id}")
    private void delete(@PathVariable("id") long id)
    {
        repository.deleteById(id);
    }

    @PostMapping("/import")
    public void importData(@RequestBody Iterable<Bus> entities)
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
