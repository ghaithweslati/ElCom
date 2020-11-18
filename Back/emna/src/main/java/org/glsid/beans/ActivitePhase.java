package org.glsid.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "activite_phase")
public class ActivitePhase extends Activite {


	@ManyToOne
	@JoinColumn(name="id_phase")
	private Phase phase;
	
	/*
	@ManyToOne
	@JoinColumn(name="id_utilisateur")
	private Utilisateur utilisateur;*/
	
	
	
	public ActivitePhase() {
		super();
	}
	
	

	public ActivitePhase( String nom,Phase phase) {
		super(nom);
		this.phase = phase;
	}

	


	public Phase getPhase() {
		return phase;
	}



	public void setPhase(Phase phase) {
		this.phase = phase;
	}



/*
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}


	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}*/
	
	
	
	
	
}
