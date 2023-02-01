package com.tms.TMS.Controllers;
import com.tms.TMS.Models.Bus;
import com.tms.TMS.Repositories.IBusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
