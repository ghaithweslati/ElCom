package org.glsid.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "operatrice")
public class Operatrice extends Utilisateur {


	
	@ManyToOne(optional=true)
	@JoinColumn(name="id_responsable",referencedColumnName="id_utilisateur")
	private Responsable responsable;

	public Responsable getResponsable() {
		return responsable;
	}

	public void setResponsable(Responsable responsable) {
		this.responsable = responsable;
	}
	
	
	
	
	
	
}
