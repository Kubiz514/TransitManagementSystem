package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Brand;
import com.tms.TMS.Models.Document;
import com.tms.TMS.Repositories.IBrandRepository;
import com.tms.TMS.Repositories.IDocumentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/documents")

public class DocumentsController {

    @Autowired
    IDocumentsRepository repository;
    @GetMapping("")
    public Iterable<Document> getAll(){
        Iterable<Document> entities = repository.findAll();
        return entities;
    }
}
