package org.glsid.dao;

import java.util.List;

import org.glsid.beans.Tache;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TacheRepository  extends JpaRepository<Tache,Long>{
	List<Tache> findAllByDateFinAndUtilisateur_Matricule(String dateFin, String matricule);

}
