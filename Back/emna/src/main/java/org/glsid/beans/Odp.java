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

@Entity(name="odp")
public class Odp implements Serializable {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_odp")
	private Long id;
	
	@Column
	private String date;


	@OneToMany(mappedBy="Odp",fetch=FetchType.LAZY)
	private Collection<Produit> produits;
	
	

	public Odp() {

	}



	public Odp(Long id, String date) {
		super();
		this.id = id;
		this.date = date;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}

	@JsonIgnore
	public Collection<Produit> getProduits() {
		return produits;
	}



	public void setProduits(Collection<Produit> produits) {
		this.produits = produits;
	}

	
	
	
	
	

	

}