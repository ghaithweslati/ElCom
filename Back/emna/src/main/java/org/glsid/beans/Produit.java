package org.glsid.beans;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Produit implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_prod")
	private Long id;
	
	@Column
	private String article;
	
	
	@Column
	private int quantite;
	
	@Column
	private String type;
	
	@Column
	private boolean periorite;
	
	

	@ManyToOne
	@JoinColumn(name="id_odp")
	private Odp Odp;
	
	
	

	public Produit() {
		super();
	}




	public Produit(String article, int quantite, String type, boolean periorite) {
		super();
		this.article = article;
		this.quantite = quantite;
		this.type = type;
		this.periorite = periorite;
	}

	

	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}




	public String getArticle() {
		return article;
	}




	public void setArticle(String article) {
		this.article = article;
	}




	public int getQuantite() {
		return quantite;
	}




	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}




	public String getType() {
		return type;
	}




	public void setType(String type) {
		this.type = type;
	}




	public boolean isPeriorite() {
		return periorite;
	}




	public void setPeriorite(boolean periorite) {
		this.periorite = periorite;
	}



	public Odp getOdp() {
		return Odp;
	}




	public void setOdp(Odp odp) {
		Odp = odp;
	}


	


}