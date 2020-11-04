package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Odp;
import org.glsid.dao.ArticleRepository;
import org.glsid.dao.OdpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OdpMetier {
	
	@Autowired
	public OdpRepository odpRepository;
	
	@Autowired
	public ArticleRepository articleRepository;
	
	

	public List<Odp> getOdps()
	{
		return odpRepository.findAllByOrderByUrgenceAsc();
	}
	

	public boolean supprimerOdp(Long id)
	{
		Odp odp=odpRepository.findById(id).orElse(null);
		odpRepository.delete(odp);
		return true;
	}
	
	public Odp ajouterOdp(Odp odp)
	{
		articleRepository.save(odp.getArticle());
		return odpRepository.save(odp);
	}
	


	
}
