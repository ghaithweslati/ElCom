package org.glsid.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.transaction.Transactional;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name="phase")
@org.hibernate.annotations.Entity(
	    dynamicInsert = true, dynamicUpdate = true
	)
public class Phase implements Serializable {
	
	
	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_phase", unique = true, nullable = false)
	private String id;
	
	
	@Column
	private String description;
	
	@OneToMany(mappedBy="phase",fetch=FetchType.LAZY)
	private Collection<ActivitePhase> activitePhases;

	



	@ManyToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL, mappedBy = "phases")
	    private List<Article> article = new ArrayList<>();


	public Phase() {
		super();
	}


	public Phase(String id, String description) {
		super();
		this.id = id;
		this.description = description;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}

@JsonIgnore
	public List<Article> getArticle() {
		return article;
	}


	public void setArticle(List<Article> article) {
		this.article = article;
	}


}
