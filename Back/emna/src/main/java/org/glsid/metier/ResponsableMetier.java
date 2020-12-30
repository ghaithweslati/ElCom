package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Operatrice;
import org.glsid.beans.Responsable;
import org.glsid.dao.OperatriceRepository;
import org.glsid.dao.ResponsableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResponsableMetier {
	
	@Autowired
	public ResponsableRepository responsableRepository;
	
	

	public List<Responsable> getResponsables()
	{
		return responsableRepository.findAll();
	}
	
	
}
