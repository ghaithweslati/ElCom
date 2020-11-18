package org.glsid.dao;

import java.util.List;

import org.glsid.beans.Activite;
import org.glsid.beans.ActivitePhase;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ActivitePhaseRepository  extends JpaRepository<ActivitePhase,Long>{
	public List<ActivitePhase> findByPhase_Id(final String id);

}
