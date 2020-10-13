package org.glsid.metier;

import java.util.List;

import org.glsid.beans.Phase;
import org.glsid.dao.PhaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhaseMetier {
	
	@Autowired
	public PhaseRepository phaseRepository;
	
	public Phase ajouterPhase(Phase phase)
	{
		return phaseRepository.save(phase);
	}
	
	public List<Phase> getPhases()
	{
		return phaseRepository.findAll();
	}
	


	
}
