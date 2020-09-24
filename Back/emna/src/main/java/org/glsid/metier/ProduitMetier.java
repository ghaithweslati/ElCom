package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Produit;
import org.glsid.dao.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProduitMetier {
	
	@Autowired
	public ProduitRepository produitRepository;

	
	public List<Produit> getProduits()
	{
		return produitRepository.findAll();
	}
	

	public boolean supprimerProduit(Long id)
	{
		Produit prod=produitRepository.findById(id).orElse(null);
		produitRepository.delete(prod);
		return true;
	}
	
	public Produit ajouterProduit(Produit produit)
	{
		return produitRepository.save(produit);
	}
	


	
}
