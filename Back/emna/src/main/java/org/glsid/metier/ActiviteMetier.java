package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Activite;
import org.glsid.beans.ActivitePhase;
import org.glsid.dao.ActiviteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActiviteMetier {
	
	@Autowired
	public ActiviteRepository activiteRepository;
	
	
	public Activite ajouterActivite(Activite activite)
	{
		return activiteRepository.save(activite);
	}
	
	public Activite getActivite(Long id)
	{
		return activiteRepository.findById(id).orElse(null);
	}
	
	


	
}
