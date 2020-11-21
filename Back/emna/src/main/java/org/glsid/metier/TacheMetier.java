package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Activite;
import org.glsid.beans.ActivitePhase;
import org.glsid.beans.Article;
import org.glsid.beans.Tache;
import org.glsid.dao.TacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TacheMetier {
	
	@Autowired
	public TacheRepository tacheRepository;
	
	
	public Tache ajouterTache(Tache tache)
	{
	
		if(tache.getId()!=null)
		{
			Tache t  = tacheRepository.findById(tache.getId()).orElse(null);
			t.setDateFin(tache.getDateFin());
			return tacheRepository.save(t);
		}
		else
			return tacheRepository.save(tache);
	}
	
	public  List<Tache> getTache(String dateFin,String matricule)
	{
		return tacheRepository.findAllByDateFinAndUtilisateur_Matricule(dateFin, matricule);
	}
	

	
}
