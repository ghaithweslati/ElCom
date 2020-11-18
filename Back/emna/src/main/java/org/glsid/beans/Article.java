package org.glsid.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
@org.hibernate.annotations.Entity(
	    dynamicInsert = true, dynamicUpdate = true
	)
@Table(name="article")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Article implements Serializable {
	

	@Id
	@Column(name = "id_article", unique = true, nullable = false)
	private String code;
	
	@Column
	private String projet;
	
	
	@Column
	private String type;
	
	@Column
	private int nbFile;

	@JsonIgnore
	@OneToMany(mappedBy="article",fetch=FetchType.LAZY)
	private Collection<Odp> odps;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "activite_descr", joinColumns = {
            @JoinColumn(name = "article_id", nullable = false, updatable = false) },
            inverseJoinColumns = { @JoinColumn(name = "phase_id",
                    nullable = false, updatable = false) })
    private List<Phase> phases = new ArrayList<>();
    
	public Article() {
		super();
	}




	public Article(String code, String projet, String type, int nbFile) {
		super();
		this.code = code;
		this.projet = projet;
		this.type = type;
		this.nbFile = nbFile;
	}




	public String getCode() {
		return this.code;
	}




	public void setCode(String code) {
		this.code = code;
	}
	
	
	




	public Collection<Odp> getOdps() {
		return odps;
	}




	public void setOdps(Collection<Odp> odps) {
		this.odps = odps;
	}



	public List<Phase> getPhases() {
		return phases;
	}




	public void setPhases(List<Phase> phases) {
		this.phases = phases;
	}




	public String getProjet() {
		return projet;
	}




	public void setProjet(String projet) {
		this.projet = projet;
	}




	public String getType() {
		return type;
	}




	public void setType(String type) {
		this.type = type;
	}




	public int getNbFile() {
		return nbFile;
	}




	public void setNbFile(int nbFile) {
		this.nbFile = nbFile;
	}



}