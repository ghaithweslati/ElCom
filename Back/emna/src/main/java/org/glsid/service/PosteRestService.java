package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.glsid.beans.Article;
import org.glsid.beans.Poste;
import org.glsid.metier.PosteMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PosteRestService {

@Autowired
private PosteMetier posteMetier;





@RequestMapping(value="/poste",method=RequestMethod.GET)
public   List<Poste> getPoste() {
	return posteMetier.getPostes();
}


@RequestMapping(value="/poste",method=RequestMethod.POST)
public Poste ajouterPoste(@RequestBody Poste poste) {
	return posteMetier.ajouterPoste(poste);
}
	


@DeleteMapping("/poste/{id}")
public  boolean supprimerPoste(@PathVariable(value = "id")Long id) 
{
	 return posteMetier.supprimerPoste(id);
}
}
