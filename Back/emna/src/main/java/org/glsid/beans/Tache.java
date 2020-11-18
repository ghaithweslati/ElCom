package org.glsid.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@Entity
@Table(name = "tache")
public class Tache{


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private Long id;
	
	@Column
	private String dateDeb;
	
	@Column
	private String dateFin;
	

	@ManyToOne
	@JoinColumn(name="id_odp")
	private Odp odp;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="id_activite")
	private Activite activite;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="id_utilisateur")
	private Utilisateur utilisateur;
	
	
	
	public Tache() {
		super();
	}
	
	

	public Long getId() {
		return id;
	}





	public void setId(Long id) {
		this.id = id;
	}





	public String getDateDeb() {
		return dateDeb;
	}





	public void setDateDeb(String dateDeb) {
		this.dateDeb = dateDeb;
	}





	public String getDateFin() {
		return dateFin;
	}





	public void setDateFin(String dateFin) {
		this.dateFin = dateFin;
	}





	public Odp getOdp() {
		return odp;
	}


	public void setOdp(Odp odp) {
		this.odp = odp;
	}


	public Utilisateur getUtilisateur() {
		return utilisateur;
	}


	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}



	public Activite getActivite() {
		return activite;
	}



	public void setActivite(Activite activite) {
		this.activite = activite;
	}
	
	
	
	
	
}
