package com.hello.society;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount;
    private String invoiceDetails;

    @Enumerated(EnumType.STRING)
    private PaymentStatus status; // Pending, Approved, Rejected

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; // User who initiated the payment

    @ManyToOne
    @JoinColumn(name = "checker_id")
    private User checker; // Checker user who approved or rejected the payment

    // Constructors, getters, setters, etc.

    public Payment() {
    }

    public Payment(BigDecimal amount, String invoiceDetails, PaymentStatus status, User user, User checker) {
        this.amount = amount;
        this.invoiceDetails = invoiceDetails;
        this.status = status;
        this.user = user;
        this.checker = checker;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getInvoiceDetails() {
        return invoiceDetails;
    }

    public void setInvoiceDetails(String invoiceDetails) {
        this.invoiceDetails = invoiceDetails;
    }

    public PaymentStatus getStatus() {
        return status;
    }

    public void setStatus(PaymentStatus status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getChecker() {
        return checker;
    }

    public void setChecker(User checker) {
        this.checker = checker;
    }

    // You can override toString() for better logging or debugging
    @Override
    public String toString() {
        return "Payment{" +
                "id=" + id +
                ", amount=" + amount +
                ", invoiceDetails='" + invoiceDetails + '\'' +
                ", status=" + status +
                ", user=" + user +
                ", checker=" + checker +
                '}';
    }
}
