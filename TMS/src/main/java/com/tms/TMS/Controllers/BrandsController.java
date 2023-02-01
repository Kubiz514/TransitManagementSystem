package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Brand;
import com.tms.TMS.Models.Bus;
import com.tms.TMS.Repositories.IBrandRepository;
import com.tms.TMS.Repositories.IBusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/brands")

public class BrandsController {

    @Autowired
    IBrandRepository repository;
    @GetMapping("")
    public Iterable<Brand> getAll(){
        Iterable<Brand> entities = repository.findAll();
        return entities;
    }

    @PostMapping("")
    public void create(@RequestBody Brand brand)
    {
        repository.save(brand);
    }

    @PutMapping("")
    public void update(@RequestBody Brand brand)
    {
        repository.save(brand);
    }
}
