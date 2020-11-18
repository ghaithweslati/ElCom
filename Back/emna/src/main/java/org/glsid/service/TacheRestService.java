package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;


import org.glsid.beans.Activite;
import org.glsid.beans.ActivitePhase;
import org.glsid.beans.Tache;
import org.glsid.metier.ActiviteMetier;
import org.glsid.metier.TacheMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TacheRestService {

@Autowired
private TacheMetier tacheMetier;


@RequestMapping(value="/tache",method=RequestMethod.POST)
public Tache ajouterActivite(@RequestBody Tache tache) {
	return tacheMetier.ajouterTache(tache);
}

@RequestMapping(value="/tache/{dateFin}/{matricule}",method=RequestMethod.GET)
public  List<Tache> getTache(@PathVariable(value = "dateFin")String dateFin,@PathVariable(value = "matricule")String matricule)
{
	return tacheMetier.getTache(dateFin, matricule);
}

	
}
