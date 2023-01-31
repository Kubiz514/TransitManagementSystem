package com.tms.TMS.Repositories;

import com.tms.TMS.Models.Brand;
import com.tms.TMS.Models.Document;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDocumentsRepository extends CrudRepository<Document, Long> {
}
