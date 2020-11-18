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

@Entity
public class Utilisateur implements Serializable {
	
	
	@Id
	@Column(name = "id_utilisateur", unique = true, nullable = false)
	private String matricule;
	
	@Column
	private String nom;
	
	@Column
	private String prenom;
	
	@Column
	private String mdp;
	
	@Column
	private int age;
	
	@Column
	private String sexe;
	
	@Column
	private String poste;

	@OneToMany(mappedBy="utilisateur",fetch=FetchType.LAZY)
	private Collection<Presence> presences;

	
	@OneToMany(mappedBy="utilisateur",fetch=FetchType.LAZY)
	private Collection<Tache> taches;


	

	public Utilisateur() {

	}




	public Utilisateur(String matricule, String nom, String prenom,String mdp, int age, String sexe, String poste) {
		super();
		this.matricule = matricule;
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.sexe = sexe;
		this.poste = poste;
		this.mdp=mdp;
	}






	public String getMatricule() {
		return matricule;
	}




	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}




	public String getNom() {
		return nom;
	}




	public void setNom(String nom) {
		this.nom = nom;
	}




	public String getPrenom() {
		return prenom;
	}




	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}




	public int getAge() {
		return age;
	}




	public void setAge(int age) {
		this.age = age;
	}




	public String getSexe() {
		return sexe;
	}




	public void setSexe(String sexe) {
		this.sexe = sexe;
	}




	public String getPoste() {
		return poste;
	}




	public void setPoste(String poste) {
		this.poste = poste;
	}




	public String getMdp() {
		return mdp;
	}




	public void setMdp(String mdp) {
		this.mdp = mdp;
	}



	@JsonIgnore
	public Collection<Presence> getPresences() {
		return presences;
	}




	public void setPresences(Collection<Presence> presences) {
		this.presences = presences;
	}
	
	
	
	
	

}