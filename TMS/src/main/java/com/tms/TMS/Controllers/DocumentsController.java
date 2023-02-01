package com.tms.TMS.Controllers;

import com.tms.TMS.Models.Brand;
import com.tms.TMS.Models.Document;
import com.tms.TMS.Models.Driver;
import com.tms.TMS.Repositories.IBrandRepository;
import com.tms.TMS.Repositories.IDocumentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @PostMapping("")
    public void create(@RequestBody Document document)
    {
        repository.save(document);
    }

    @PutMapping("")
    public void update(@RequestBody Document document)
    {
        repository.save(document);
    @GetMapping("/{id}")
    public Optional<Document> get(@PathVariable("id") long id)
    {
        return repository.findById(id);
    }
    @DeleteMapping("/{id}")
    private void delete(@PathVariable("id") long id)
    {
        repository.deleteById(id);
    }
}
