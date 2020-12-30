package org.glsid.metier;

import java.util.List;
import org.glsid.beans.Operatrice;
import org.glsid.dao.OperatriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OperatriceMetier {
	
	@Autowired
	public OperatriceRepository operatriceRepository;
	
	

	public List<Operatrice> getOperatrices()
	{
		return operatriceRepository.findAll();
	}
	
	
}
