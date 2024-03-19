package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class DelayedPaymentReportService {

    @Autowired
    private MonthlyPaymentRepository monthlyPaymentRepository;

    @Autowired
    private FamilyRepository familyRepository; // Assuming you have a FamilyRepository

    public List<Family> getFamiliesWithFrequentDelayedPayments() {
        // Assuming a frequent delay is defined as more than, for example, 2 delays in the last 6 months
        LocalDate startDate = LocalDate.now().minusMonths(6);
        LocalDate endDate = LocalDate.now();

        List<Long> familyIdsWithDelayedPayments = monthlyPaymentRepository.findFamiliesWithFrequentDelayedPayments(startDate, endDate);

        // Assuming you have a method in FamilyRepository to find families by their IDs
        return familyRepository.findByIdIn(familyIdsWithDelayedPayments);
    }
}
