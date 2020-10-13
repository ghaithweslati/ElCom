package org.glsid;


import org.glsid.beans.Article;
import org.glsid.beans.Phase;
import org.glsid.dao.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;


@SpringBootApplication
public class Test  implements CommandLineRunner {
	
    @Autowired
    private ArticleRepository articleRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(Test.class, args);
	}
		
		
		@Override
	    public void run(String... args) throws Exception {
	/*	
		Article article = new Article();
		article.setProjet("projet");
		
		Phase phase1 = new Phase();
		phase1.setNom("phase1");
		Phase phase2 = new Phase();
		phase2.setNom("phase2");
		
		article.getPhases().add(phase1);
		article.getPhases().add(phase2);
		
		phase1.getArticle().add(article);
		phase2.getArticle().add(article);
		
		this.articleRepository.save(article);*/
		
	}
	
	
	

		

}
