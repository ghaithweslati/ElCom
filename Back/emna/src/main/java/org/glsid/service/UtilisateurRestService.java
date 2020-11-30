package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.glsid.beans.Operatrice;
import org.glsid.beans.Responsable;
import org.glsid.beans.Utilisateur;
import org.glsid.metier.UtilisateurMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UtilisateurRestService {

@Autowired
private UtilisateurMetier userMetier;




@RequestMapping(value="/user",method=RequestMethod.GET)
public  List<Utilisateur> getUtilisateurs() {
	return userMetier.getUtilisateurs();
}

@RequestMapping(value="/user/{nom}",method=RequestMethod.GET)
public  List<Utilisateur> getResponsables(@PathVariable(value = "nom")String nom) {
	return userMetier.getResponsables(nom);
}





@DeleteMapping("/user/{id}")
public  boolean supprimerUtilisateur(@PathVariable(value = "id")String id) 
{
	 return userMetier.supprimerUtilisateur(id);
}

@RequestMapping(value="/user",method=RequestMethod.POST)
public Utilisateur ajouterUtilisateur(@RequestBody Utilisateur user) {
	return userMetier.ajouterUtilisateur(user);
}

@RequestMapping(value="/operatrice",method=RequestMethod.POST)
public Utilisateur ajouterOperatrice(@RequestBody Operatrice user) {
	return userMetier.ajouterUtilisateur(user);
}

@RequestMapping(value="/responsable",method=RequestMethod.POST)
public Utilisateur ajouterResponsable(@RequestBody Responsable user) {
	return userMetier.ajouterUtilisateur(user);
}


	
}
