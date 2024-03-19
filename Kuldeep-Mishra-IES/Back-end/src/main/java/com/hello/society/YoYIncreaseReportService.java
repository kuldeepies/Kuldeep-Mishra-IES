package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Year;
import java.util.List;

@Service
public class YoYIncreaseReportService {

    @Autowired
    private ExpenseRepository expenseRepository;

    // Method to get YoY increase in expenses
    public List<Double> getYoYIncreaseOfSpendings() {
        int currentYear = Year.now().getValue();
        int previousYear = currentYear - 1;

        // Fetch expenses for the current and previous years
        List<Expense> currentYearExpenses = expenseRepository.findByYear(currentYear);
        List<Expense> previousYearExpenses = expenseRepository.findByYear(previousYear);

        // Calculate the total expenses for each year
        BigDecimal currentYearTotal = calculateTotalExpense(currentYearExpenses);
        BigDecimal previousYearTotal = calculateTotalExpense(previousYearExpenses);

        // Calculate the YoY increase
        double yoyIncrease = currentYearTotal.doubleValue() - previousYearTotal.doubleValue();

        // Return the YoY increase as a single-element list
        return List.of(yoyIncrease);
    }

    // Helper method to calculate total expenses
    private BigDecimal calculateTotalExpense(List<Expense> expenses) {
        return expenses.stream()
                .map(Expense::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
