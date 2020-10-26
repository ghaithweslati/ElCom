package org.glsid.beans;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@SuppressWarnings("unused")
@Entity(name="odp")
public class Odp implements Serializable {
	
	@Id
	@Column(name = "id_odp", unique = true, nullable = false)
	private Long id;

	
	@Column
	private int quantite;
	
	@Column
	private String description;
	
	
	@Column
	private String date;
	
	@Column
	private String etat;
	
	@Column
	private int urgence=1;
	
	
	@ManyToOne
	@JoinColumn(name="id_article")
	private Article article;
	


	public Odp(Long id, int quantite, String description, String date,int urgence) {
		super();
		this.id = id;
		this.quantite = quantite;
		this.description = description;
		this.date = date;
		this.urgence=urgence;
	}

	
	
	

	public Odp() {
		super();
	}




	public Long getId() {
		return id;
	}




	public void setId(Long id) {
		this.id = id;
	}




	public int getQuantite() {
		return quantite;
	}




	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public String getDate() {
		return date;
	}




	public void setDate(String date) {
		this.date = date;
	}


	


	public String getEtat() {
		return etat;
	}





	public void setEtat(String etat) {
		this.etat = etat;
	}





	public int getUrgence() {
		return urgence;
	}





	public void setUrgence(int urgence) {
		this.urgence = urgence;
	}





	public Article getArticle() {
		return article;
	}




	public void setArticle(Article article) {
		this.article = article;
	}






}