package com.hello.society;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByYear(int year);
    // You can add custom query methods if needed
}
