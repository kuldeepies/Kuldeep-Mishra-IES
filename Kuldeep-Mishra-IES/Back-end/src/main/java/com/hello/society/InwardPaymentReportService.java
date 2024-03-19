package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class InwardPaymentReportService {

    @Autowired
    private MonthlyPaymentRepository monthlyPaymentRepository;

    public List<MonthlyPayment> getInwardPaymentsInDateRange(LocalDate startDate, LocalDate endDate) {
        return monthlyPaymentRepository.findByPaymentDateBetween(startDate, endDate);
    }
}
