package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;


import org.glsid.beans.Article;
import org.glsid.metier.ArticleMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArticleRestService {

@Autowired
private ArticleMetier articleMetier;



@RequestMapping(value="/article",method=RequestMethod.GET)
public  List<Article> getArticles() {
	return articleMetier.getArticles();
}





@DeleteMapping("/article/{id}")
public  boolean supprimerArticle(@PathVariable(value = "id")String id) 
{
	 return articleMetier.supprimerArticle(id);
}

@RequestMapping(value="/article",method=RequestMethod.POST)
public Article ajouterArticle(@RequestBody Article article) {
	return articleMetier.ajouterArticle(article);
}


	
}
