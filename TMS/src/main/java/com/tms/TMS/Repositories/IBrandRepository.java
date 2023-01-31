package com.tms.TMS.Repositories;

import com.tms.TMS.Models.Brand;
import com.tms.TMS.Models.Bus;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBrandRepository extends CrudRepository<Brand, Long> {
}
