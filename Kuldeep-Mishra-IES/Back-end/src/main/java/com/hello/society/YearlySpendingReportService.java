package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YearlySpendingReportService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public List<Expense> getYearlySpendings(int year) {
        return expenseRepository.findByYear(year);
    }
}
