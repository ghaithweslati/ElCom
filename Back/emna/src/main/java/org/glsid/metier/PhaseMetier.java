package org.glsid.metier;

import java.util.List;

import org.glsid.beans.ActivitePhase;
import org.glsid.beans.Phase;
import org.glsid.dao.ActivitePhaseRepository;
import org.glsid.dao.PhaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhaseMetier {
	
	@Autowired
	public PhaseRepository phaseRepository;
	
	@Autowired
	public ActivitePhaseRepository activiteRepository;
	
	public void ajouterPhase(Phase phase)
	{
		 phaseRepository.save(phase);
		 activiteRepository.save(new ActivitePhase("traitement_"+phase.getId(),phase));
	}
	
	public List<Phase> getPhases()
	{
		return phaseRepository.findAll();
	}
	


	
}
