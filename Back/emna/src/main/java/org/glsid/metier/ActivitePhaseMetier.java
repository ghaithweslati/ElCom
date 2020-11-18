package org.glsid.metier;

import java.util.List;

import org.glsid.beans.Activite;
import org.glsid.beans.ActivitePhase;
import org.glsid.beans.Odp;
import org.glsid.dao.ActivitePhaseRepository;
import org.glsid.dao.ActiviteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivitePhaseMetier {
	
	@Autowired
	public ActivitePhaseRepository activitePhaseRepository;
	
	
	public ActivitePhase ajouterActivite(ActivitePhase activite)
	{
		return activitePhaseRepository.save(activite);
	}
	
	public List<ActivitePhase> getActiviteByPhase(String id)
	{
		return activitePhaseRepository.findByPhase_Id(id);
	}
	
	


	
}
