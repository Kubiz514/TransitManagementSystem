package com.tms.TMS.Repositories;

import com.tms.TMS.Models.Brand;
import com.tms.TMS.Models.ServiceRecord;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface IServiceRecordsRepository extends CrudRepository<ServiceRecord, Long> {
}
