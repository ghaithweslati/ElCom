package org.glsid.beans;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "responsable")
public class Responsable extends Utilisateur {


	
	
	@OneToMany(mappedBy="responsable",fetch=FetchType.LAZY)
	private Collection<Operatrice> operatrices;
	
	
	public Responsable() {
		super();
	}
	


	
	
	
	
	
	
}
