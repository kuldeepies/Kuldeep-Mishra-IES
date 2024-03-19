package com.hello.society;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface MonthlyPaymentRepository extends JpaRepository<MonthlyPayment, Long> {

   

    // New method to find overdue payments
    @Query("SELECT mp FROM MonthlyPayment mp WHERE mp.dueDate < CURRENT_DATE")
    List<MonthlyPayment> findOverduePayments();

    // New method to calculate fines for overdue payments
    @Query("SELECT SUM(CASE WHEN mp.dueDate < CURRENT_DATE THEN 100 ELSE 0 END) FROM MonthlyPayment mp")
    Double calculateFinesForOverduePayments();
   //defaulter 
   @Query("SELECT DISTINCT mp.family FROM MonthlyPayment mp WHERE mp.dueDate < CURRENT_DATE")
   List<Family> findDefaultingFamilies();
   @Query("SELECT mp FROM MonthlyPayment mp WHERE mp.paymentDate BETWEEN :startDate AND :endDate")
    List<MonthlyPayment> findByPaymentDateBetween(LocalDate startDate, LocalDate endDate);
    @Query("SELECT DISTINCT mp.family.id FROM MonthlyPayment mp WHERE mp.paymentDate BETWEEN :startDate AND :endDate AND mp.isDelayed = true")
    List<Long> findFamiliesWithFrequentDelayedPayments(LocalDate startDate, LocalDate endDate);


}
