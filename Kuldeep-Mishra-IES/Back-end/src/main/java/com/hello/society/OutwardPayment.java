// OutwardPaymentService.java
package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OutwardPayment {
    @PersistenceContext
    private EntityManager entityManager;


    @Autowired
    private PaymentRepository paymentRepository;

    public void submitOutwardPayment(Long userId, BigDecimal amount, String invoiceDetails) {
        User user = entityManager.find(User.class, userId);
        
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        Payment payment = new Payment();
        payment.setAmount(amount);
        payment.setInvoiceDetails(invoiceDetails);
        payment.setStatus(PaymentStatus.PENDING);
        payment.setUser(user);

        paymentRepository.save(payment);
    }

    public List<Payment> getPendingPayments() {
        return paymentRepository.findByStatus(PaymentStatus.PENDING);
    }

    public void approvePayment(Long checkerId, Long paymentId) {
        // Fetch the checker (User) by ID
        User checker = fetchUserById(checkerId);

        // Call the approvePayment method with the fetched checker and payment ID
        approvePayment(checker, paymentId);
    }

    // Method to fetch User by ID (replace with your actual logic)
    private User fetchUserById(Long userId) {
        // Implement the logic to fetch the user from your data store
        throw new RuntimeException("User fetching logic not implemented");
    }

    // Actual approvePayment method that takes User and paymentId
    public void approvePayment(User checker, Long paymentId) {
        // Fetch the payment by ID
        Payment payment = fetchPaymentById(paymentId);

        // Your approval logic here...
        payment.setStatus(PaymentStatus.APPROVED);
        payment.setChecker(checker);

        paymentRepository.save(payment);
    }

    // Method to fetch Payment by ID (replace with your actual logic)
    private Payment fetchPaymentById(Long paymentId) {
        // Implement the logic to fetch the payment from your data store
        return paymentRepository.findById(paymentId)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
    }

    public void rejectPayment(Long checkerId, Long paymentId) {
        // Fetch the checker (User) by ID
        User checker = fetchUserById(checkerId);

        // Call the rejectPayment method with the fetched checker and payment ID
        rejectPayment(checker, paymentId);
    }

    // Method to fetch User by ID (replace with your actual logic)
    

    // Actual rejectPayment method that takes User and paymentId
    public void rejectPayment(User checker, Long paymentId) {
        // Fetch the payment by ID
        Payment payment = fetchPaymentById(paymentId);

        // Your rejection logic here...
        payment.setStatus(PaymentStatus.REJECTED);
        payment.setChecker(checker);

        paymentRepository.save(payment);
    }
   


}
