package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Poste;
import org.glsid.beans.Utilisateur;
import org.glsid.dao.PosteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PosteMetier {
	
	@Autowired
	public PosteRepository posteRepository;
	
	
	public Poste ajouterPoste(Poste poste)
	{
		return posteRepository.save(poste);
	}
	
	public  List<Poste> getPostes()
	{
		return posteRepository.findAll();
	}
	
	public boolean supprimerPoste(Long id)
	{
		Poste poste=posteRepository.findById(id).orElse(null);
		posteRepository.delete(poste);
		return true;
	}


	
}
