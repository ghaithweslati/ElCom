package org.glsid.metier;


import org.glsid.beans.Presence;

import org.glsid.dao.PresenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PresenceMetier {
	
	@Autowired
	public PresenceRepository presenceRepository;
	
	
	
	public Presence ajouterPresence(Presence presence)
	{		
		return this.presenceRepository.save(presence);
	}
	


	
}
