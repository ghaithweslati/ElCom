package org.glsid.dao;

import java.util.List;

import org.glsid.beans.ActivitePhase;
import org.glsid.beans.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

import feign.Param;


public interface UtilisateurRepository  extends JpaRepository<Utilisateur,String>{
	public List<Utilisateur> findByPoste_Nom(final String nom);


}
