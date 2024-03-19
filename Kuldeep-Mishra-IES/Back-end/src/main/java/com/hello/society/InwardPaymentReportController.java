package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/reports/inward-payments")
public class InwardPaymentReportController {

    @Autowired
    private InwardPaymentReportService inwardPaymentReportService;

    @GetMapping
    public ResponseEntity<List<MonthlyPayment>> getInwardPaymentsInDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        List<MonthlyPayment> inwardPayments = inwardPaymentReportService.getInwardPaymentsInDateRange(startDate, endDate);
        return new ResponseEntity<>(inwardPayments, HttpStatus.OK);
    }
}
