// FamilyRepository.java
package com.hello.society;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FamilyRepository extends JpaRepository<Family, Long> {
    List<Family> findByIdIn(List<Long> familyIds);
    
}
