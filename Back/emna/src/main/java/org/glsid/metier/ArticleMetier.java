package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Article;
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
	

	public boolean supprimerArticle(Long id)
	{
		Article article=articleRepository.findById(id).orElse(null);
		articleRepository.delete(article);
		return true;
	}
	
	public Article ajouterArticle(Article article)
	{
		return articleRepository.save(article);
	}
	


	
}
