package com.tms.TMS.Repositories;

import com.tms.TMS.Models.Route;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRouteRepository extends CrudRepository<Route, Long> {
}
