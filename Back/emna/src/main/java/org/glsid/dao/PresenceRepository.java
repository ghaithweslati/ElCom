package org.glsid.dao;

import java.time.OffsetDateTime;
import java.util.List;

import org.glsid.beans.Presence;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PresenceRepository  extends JpaRepository<Presence,String>{

	 List<Presence> findAllByDateLessThanEqualAndDateGreaterThanEqual(String endDate, String startDate);
}
