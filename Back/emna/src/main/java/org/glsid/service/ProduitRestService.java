package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.glsid.beans.Produit;
import org.glsid.beans.Odp;
import org.glsid.metier.ProduitMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProduitRestService {

@Autowired
private ProduitMetier produitMetier;




@RequestMapping(value="/produit",method=RequestMethod.GET)
public  List<Produit> getProduits() {
	return produitMetier.getProduits();
}



@DeleteMapping("/produit/{id}")
public  boolean supprimerProduit(@PathVariable(value = "id")Long id) 
{
	 return produitMetier.supprimerProduit(id);
}

@RequestMapping(value="/produit",method=RequestMethod.POST)
public Produit ajouterProduit(@RequestBody Produit produit) {
	return produitMetier.ajouterProduit(produit);
}


	
}
