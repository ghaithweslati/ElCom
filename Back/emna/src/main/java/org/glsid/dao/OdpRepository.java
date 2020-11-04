package org.glsid.dao;

import java.util.List;

import org.glsid.beans.Odp;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OdpRepository  extends JpaRepository<Odp,Long>{
	public List<Odp> findAllByOrderByUrgenceAsc();

}
