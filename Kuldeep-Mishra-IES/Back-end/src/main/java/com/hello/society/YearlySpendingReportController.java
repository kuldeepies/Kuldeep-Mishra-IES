package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports/yearly-spendings")
public class YearlySpendingReportController {

    @Autowired
    private YearlySpendingReportService yearlySpendingReportService;

    @GetMapping
    public ResponseEntity<List<Expense>> getYearlySpendings(@RequestParam int year) {
        List<Expense> yearlySpendings = yearlySpendingReportService.getYearlySpendings(year);
        return new ResponseEntity<>(yearlySpendings, HttpStatus.OK);
    }
}
