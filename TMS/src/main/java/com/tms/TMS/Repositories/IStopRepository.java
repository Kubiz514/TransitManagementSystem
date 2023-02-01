package com.tms.TMS.Repositories;

import com.tms.TMS.Models.Stop;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IStopRepository extends CrudRepository<Stop, Long> {
}
