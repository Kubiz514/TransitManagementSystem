package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Brand;
import com.tms.TMS.Models.Bus;
import com.tms.TMS.Repositories.IBrandRepository;
import com.tms.TMS.Repositories.IBusRepository;
import com.tms.TMS.Services.ApiErrorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/brands")

public class BrandsController {

    @Autowired
    IBrandRepository repository;
    @Autowired
    ApiErrorsService errorsService;
    @GetMapping("")
    public Iterable<Brand> getAll(){
        Iterable<Brand> entities = repository.findAll();
        return entities;
    }

    @PostMapping("")
    public void create(@RequestBody Brand brand)
    {
        try {
            repository.save(brand);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not save breand");
        }
    }

    @PutMapping("")
    public void update(@RequestBody Brand brand) {
        try {
            repository.save(brand);
        }
        catch (Exception e){
            errorsService.showErrorMessage(500, "Could not update brand");
        }
    }
    @GetMapping("/{id}")
    public Optional<Brand> get(@PathVariable("id") long id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/{id}")
    private void delete(@PathVariable("id") long id)
    {
        repository.deleteById(id);
    }
}
