package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/reports/delayed-payments")
public class DelayedPaymentReportController {

    @Autowired
    private DelayedPaymentReportService delayedPaymentReportService;

    @GetMapping
    public ResponseEntity<List<Family>> getFamiliesWithFrequentDelayedPayments() {
        List<Family> families = delayedPaymentReportService.getFamiliesWithFrequentDelayedPayments();
        return new ResponseEntity<>(families, HttpStatus.OK);
    }
}
