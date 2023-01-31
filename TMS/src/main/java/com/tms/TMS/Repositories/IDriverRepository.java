package com.tms.TMS.Repositories;

import com.tms.TMS.Models.Document;
import com.tms.TMS.Models.Driver;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDriverRepository extends CrudRepository<Driver, Long> {
}
