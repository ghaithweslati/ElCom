package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Utilisateur;
import org.glsid.dao.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurMetier {
	
	@Autowired
	public UtilisateurRepository userRepository;
	
	

	public List<Utilisateur> getUtilisateurs()
	{
		return userRepository.findAll();
	}
	
	public List<Utilisateur> getResponsables(String nom)
	{
		return userRepository.findByPoste_Nom(nom);
	}
	

	public boolean supprimerUtilisateur(String id)
	{
		Utilisateur user=userRepository.findById(id).orElse(null);
		userRepository.delete(user);
		return true;
	}
	
	public Utilisateur ajouterUtilisateur(Utilisateur user)
	{
		return userRepository.save(user);
	}
	


	
}
