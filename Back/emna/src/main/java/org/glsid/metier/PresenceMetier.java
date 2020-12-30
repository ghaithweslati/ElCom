package org.glsid.metier;


import java.time.OffsetDateTime;
import java.util.List;

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
	
	public  List<Presence> getPresences(String endDate, String startDate)
	{		
		return this.presenceRepository.findAllByDateLessThanEqualAndDateGreaterThanEqual(endDate, startDate);
	}
	
	


	
}
