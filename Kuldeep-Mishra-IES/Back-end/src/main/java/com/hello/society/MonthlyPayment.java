package com.hello.society;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class MonthlyPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "family_id", nullable = false)
    private Family family;

    private Double paymentAmount;
    private LocalDate paymentDate;

    // Constructors
    public MonthlyPayment() {
    }

    public MonthlyPayment(Family family, Double paymentAmount, LocalDate paymentDate) {
        this.family = family;
        this.paymentAmount = paymentAmount;
        this.paymentDate = paymentDate;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Family getFamily() {
        return family;
    }

    public void setFamily(Family family) {
        this.family = family;
    }

    public Double getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(Double paymentAmount) {
        this.paymentAmount = paymentAmount;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }
}
