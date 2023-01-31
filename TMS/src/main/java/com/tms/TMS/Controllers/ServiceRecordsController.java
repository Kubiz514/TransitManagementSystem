package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Driver;
import com.tms.TMS.Models.ServiceRecord;
import com.tms.TMS.Repositories.IDriverRepository;
import com.tms.TMS.Repositories.IServiceRecordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/serviceRecords")

public class ServiceRecordsController {

    @Autowired
    IServiceRecordsRepository repository;
    @GetMapping("")
    public Iterable<ServiceRecord> getAll(){
        Iterable<ServiceRecord> entities = repository.findAll();
        return entities;
    }
}
