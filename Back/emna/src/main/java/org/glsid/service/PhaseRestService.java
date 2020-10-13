package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.glsid.beans.Odp;
import org.glsid.beans.Phase;
import org.glsid.metier.PhaseMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PhaseRestService {

@Autowired
private PhaseMetier phaseMetier;


@RequestMapping(value="/phase",method=RequestMethod.POST)
public Phase ajouterPhase(@RequestBody Phase phase) {
	return phaseMetier.ajouterPhase(phase);
}

@RequestMapping(value="/phase",method=RequestMethod.GET)
public  List<Phase> getPhases() {
	return phaseMetier.getPhases();
}


	
}
