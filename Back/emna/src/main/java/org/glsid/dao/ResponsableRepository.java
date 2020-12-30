package org.glsid.dao;

import java.util.List;

import org.glsid.beans.ActivitePhase;
import org.glsid.beans.Responsable;
import org.springframework.data.jpa.repository.JpaRepository;

import feign.Param;


public interface ResponsableRepository  extends JpaRepository<Responsable,String>{


}
