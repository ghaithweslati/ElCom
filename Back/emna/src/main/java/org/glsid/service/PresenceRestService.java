package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;


import org.glsid.beans.Presence;
import org.glsid.metier.PresenceMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PresenceRestService {

@Autowired
private PresenceMetier presenceMetier;



@RequestMapping(value="/presence",method=RequestMethod.POST)
public Presence ajouterPresence(@RequestBody Presence presence) {
	return presenceMetier.ajouterPresence(presence);
}


	
}
