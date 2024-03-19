// FamilyController.java
package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/families")
public class FamilyController {

    private final FamilyRepository familyRepository;

    @Autowired
    public FamilyController(FamilyRepository familyRepository) {
        this.familyRepository = familyRepository;
    }

    @GetMapping
    public ResponseEntity<List<Family>> getAllFamilies() {
        List<Family> families = familyRepository.findAll();
        return new ResponseEntity<>(families, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Family> getFamilyById(@PathVariable Long id) {
        Optional<Family> familyOptional = familyRepository.findById(id);
        return familyOptional.map(family -> new ResponseEntity<>(family, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Family> createFamily(@RequestBody Family family) {
        Family savedFamily = familyRepository.save(family);
        return new ResponseEntity<>(savedFamily, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Family> updateFamily(@PathVariable Long id, @RequestBody Family updatedFamily) {
        Optional<Family> familyOptional = familyRepository.findById(id);
        if (familyOptional.isPresent()) {
            Family existingFamily = familyOptional.get();
            existingFamily.setName(updatedFamily.getName());
            existingFamily.setAddress(updatedFamily.getAddress());
            // Set other fields as needed

            Family savedFamily = familyRepository.save(existingFamily);
            return new ResponseEntity<>(savedFamily, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFamily(@PathVariable Long id) {
        if (familyRepository.existsById(id)) {
            familyRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
