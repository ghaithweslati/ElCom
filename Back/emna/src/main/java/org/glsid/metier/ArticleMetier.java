package org.glsid.metier;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.glsid.beans.Article;
import org.glsid.beans.Phase;
import org.glsid.dao.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleMetier {
	
	@Autowired
	public ArticleRepository articleRepository;
	
	

	public List<Article> getArticles()
	{
		return articleRepository.findAll();
	}
	

	public boolean supprimerArticle(String id)
	{
		Article article=articleRepository.findById(id).orElse(null);
		articleRepository.delete(article);
		return true;
	}
	
	public Article ajouterArticle(Article art)
	{
				for(int i=0;i<art.getPhases().size();i++)
					art.getPhases().get(i).getArticle().add(art);
		/*Iterator it = art.getPhases().iterator();
		Phase phase;
		Set<Phase> phases = new HashSet<>();
		 while(it.hasNext())
		 {
			  phase = (Phase) it.next();
			  phase.getArticle().add(art);
			  phases.add(phase);
		 }
		 art.setPhases(phases);
		
		/*

		/*	Article art = new Article();
			art.setProjet(article.getProjet());
			art.setType(article.getType());
			art.setCode(article.getCode());
			
		/*	Phase phase1 =  (Phase) it.next();
			System.out.println(phase1.getNom());
			Phase phase2 = (Phase) it.next();
			System.out.println(phase2.getNom());*/
			
		/*Article article = new Article();
		article.setProjet("projet");
		
		Phase phase1 = new Phase();
		phase1.setNom("phase1");
		Phase phase2 = new Phase();
		phase2.setNom("phase2");
		
		article.getPhases().add(phase1);
		article.getPhases().add(phase2);
		
		phase1.getArticle().add(article);
		phase2.getArticle().add(article);*/
		
		return this.articleRepository.save(art);
	

	}
	


	
}
