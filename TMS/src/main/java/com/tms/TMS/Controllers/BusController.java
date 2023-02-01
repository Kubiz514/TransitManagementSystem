package com.tms.TMS.Controllers;
import com.tms.TMS.Models.Bus;
import com.tms.TMS.Repositories.IBusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@ResponseBody
@RequestMapping("/buses")

public class BusController {

    @Autowired
    IBusRepository repository;
    @GetMapping("")
    public Iterable<Bus> getAll(){
        Iterable<Bus> entities = repository.findAll();
        return entities;
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
}
