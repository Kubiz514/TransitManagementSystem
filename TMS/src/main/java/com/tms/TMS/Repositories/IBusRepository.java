package com.tms.TMS.Repositories;

import com.tms.TMS.Models.Bus;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBusRepository extends CrudRepository<Bus, Long> {
}
