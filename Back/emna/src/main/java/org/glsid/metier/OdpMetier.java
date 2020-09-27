package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Odp;
import org.glsid.dao.OdpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OdpMetier {
	
	@Autowired
	public OdpRepository odpRepository;
	
	

	public List<Odp> getOdps()
	{
		return odpRepository.findAll();
	}
	

	public boolean supprimerOdp(Long id)
	{
		Odp odp=odpRepository.findById(id).orElse(null);
		odpRepository.delete(odp);
		return true;
	}
	
	public Odp ajouterOdp(Odp odp)
	{
		return odpRepository.save(odp);
	}
	


	
}
