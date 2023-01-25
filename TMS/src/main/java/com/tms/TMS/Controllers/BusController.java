package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Bus;
import com.tms.TMS.Repositories.IBusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BusController {

    @Autowired
    IBusRepository busRepository;

    @GetMapping("/buses")
    public Iterable<Bus> getAll(){
        Iterable<Bus> buses = busRepository.findAll();
        return buses;
    }
}
