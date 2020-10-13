package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;


import org.glsid.beans.Activite;
import org.glsid.metier.ActiviteMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActiviteRestService {

@Autowired
private ActiviteMetier activiteMetier;


@RequestMapping(value="/activite",method=RequestMethod.POST)
public Activite ajouterActivite(@RequestBody Activite activite) {
	return activiteMetier.ajouterActivite(activite);
}


	
}
