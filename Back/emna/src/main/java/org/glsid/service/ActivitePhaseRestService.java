package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.glsid.beans.ActivitePhase;
import org.glsid.beans.Odp;
import org.glsid.metier.ActivitePhaseMetier;
import org.glsid.metier.OdpMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActivitePhaseRestService {

@Autowired
private ActivitePhaseMetier activitePhaseMetier;



@RequestMapping(value="/activitephase/{id}",method=RequestMethod.GET)
public  List<ActivitePhase> getOdps(@PathVariable(value = "id")String id) {
	return activitePhaseMetier.getActiviteByPhase(id);
}


	
}
