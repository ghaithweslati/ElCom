package org.glsid.dao;

import org.glsid.beans.Presence;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PresenceRepository  extends JpaRepository<Presence,String>{


}
