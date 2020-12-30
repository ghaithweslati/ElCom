package org.glsid.service;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.glsid.beans.Operatrice;
import org.glsid.beans.Responsable;
import org.glsid.beans.Utilisateur;
import org.glsid.metier.OperatriceMetier;
import org.glsid.metier.UtilisateurMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OperatriceRestService {

@Autowired
private OperatriceMetier operatriceMetier;




@RequestMapping(value="/operatrice",method=RequestMethod.GET)
public  List<Operatrice> getOperatrices() {
	return operatriceMetier.getOperatrices();
}

	
}
