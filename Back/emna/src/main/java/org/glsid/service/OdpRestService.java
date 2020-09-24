package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.glsid.beans.Produit;
import org.glsid.beans.Odp;
import org.glsid.metier.OdpMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OdpRestService {

@Autowired
private OdpMetier odpMetier;



@RequestMapping(value="/odp",method=RequestMethod.GET)
public  List<Odp> getOdps() {
	return odpMetier.getOdps();
}





@DeleteMapping("/odp/{id}")
public  boolean supprimerOdp(@PathVariable(value = "id")Long id) 
{
	 return odpMetier.supprimerOdp(id);
}

@RequestMapping(value="/odp",method=RequestMethod.POST)
public Odp ajouterOdp(@RequestBody Odp odp) {
	return odpMetier.ajouterOdp(odp);
}


	
}
