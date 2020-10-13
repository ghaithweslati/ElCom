package org.glsid.dao;

import org.glsid.beans.Article;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ArticleRepository  extends JpaRepository<Article,String>{


}
