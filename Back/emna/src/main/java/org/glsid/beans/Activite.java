package org.glsid.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Activite implements Serializable {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Long id;
	
	
	@Column
	private String nom;
	
	
	@OneToMany(mappedBy="activite",fetch=FetchType.LAZY)
	private List<Tache> taches=new ArrayList<>();
	

	

	public Activite() {
		super();
	}


	public Activite(String nom) {
		super();
		this.nom = nom;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	@JsonIgnore
	public List<Tache> getTaches() {
		return taches;
	}


	public void setTaches(List<Tache> taches) {
		this.taches = taches;
	}


	
	
}
