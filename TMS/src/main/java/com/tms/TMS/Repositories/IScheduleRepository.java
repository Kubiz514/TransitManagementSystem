package com.tms.TMS.Repositories;

import com.tms.TMS.Models.Schedule;
import org.springframework.data.repository.CrudRepository;

public interface IScheduleRepository extends CrudRepository<Schedule, Long> {
}
