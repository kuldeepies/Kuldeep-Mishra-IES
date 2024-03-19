// FamilyService.java
package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FamilyService {

    private final FamilyRepository familyRepository;

    @Autowired
    public FamilyService(FamilyRepository familyRepository) {
        this.familyRepository = familyRepository;
    }

    public List<Family> getAllFamilies() {
        return familyRepository.findAll();
    }

    public Optional<Family> getFamilyById(Long id) {
        return familyRepository.findById(id);
    }

    public Family createFamily(Family family) {
        return familyRepository.save(family);
    }

    public Optional<Family> updateFamily(Long id, Family updatedFamily) {
        Optional<Family> familyOptional = familyRepository.findById(id);
        if (familyOptional.isPresent()) {
            Family existingFamily = familyOptional.get();
            existingFamily.setName(updatedFamily.getName());
            existingFamily.setAddress(updatedFamily.getAddress());
            // Set other fields as needed

            return Optional.of(familyRepository.save(existingFamily));
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteFamily(Long id) {
        if (familyRepository.existsById(id)) {
            familyRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
