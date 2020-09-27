package org.glsid.beans;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
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
	

	@Column
	private String ultra;
	
	
	@Column
	private String simple;
	
	
	@Column
	private String tube;
	

	
	
	
	

	public Article() {
		super();
	}




	public Article(String code, String projet, String type, int nbFile, String ultra, String simple, String tube) {
		super();
		this.code = code;
		this.projet = projet;
		this.type = type;
		this.nbFile = nbFile;
		this.ultra = ultra;
		this.simple = simple;
		this.tube = tube;
	}




	public String getCode() {
		return this.code;
	}




	public void setCode(String code) {
		this.code = code;
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




	public String getUltra() {
		return ultra;
	}




	public void setUltra(String ultra) {
		this.ultra = ultra;
	}




	public String getSimple() {
		return simple;
	}




	public void setSimple(String simple) {
		this.simple = simple;
	}




	public String getTube() {
		return tube;
	}




	public void setTube(String tube) {
		this.tube = tube;
	}






}