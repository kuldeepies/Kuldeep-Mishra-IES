package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    private final MonthlyPaymentRepository paymentRepository;
    private final EmailService emailService;
    private final DefaulterService defaulterService; // Inject DefaulterService

    @Autowired
    public PaymentService(MonthlyPaymentRepository paymentRepository, EmailService emailService, DefaulterService defaulterService) {
        this.paymentRepository = paymentRepository;
        this.emailService = emailService;
        this.defaulterService = defaulterService;
    }

    public List<MonthlyPayment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Optional<MonthlyPayment> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    public MonthlyPayment createPayment(MonthlyPayment payment) {
        return paymentRepository.save(payment);
    }

    public MonthlyPayment updatePayment(Long id, MonthlyPayment updatedPayment) {
        if (paymentRepository.existsById(id)) {
            updatedPayment.setId(id);
            return paymentRepository.save(updatedPayment);
        } else {
            // Handle error, throw exception, or return a meaningful response
            return null;
        }
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }

    // New method to calculate fines for overdue payments
    public Double calculateFinesForOverduePayments() {
        return paymentRepository.calculateFinesForOverduePayments();
    }

    // You can include this method in your scheduled task or use it as needed
    public void sendFinesReminder() {
        // Get the total fines for overdue payments
        Double totalFines = calculateFinesForOverduePayments();

        if (totalFines > 0) {
            try {
                emailService.sendEmail("recipient@example.com", "Fines Reminder", "You have overdue payments. Total fines: " + totalFines);

                // Fetch defaulting families using DefaulterService
                List<Family> defaultingFamilies = defaulterService.findDefaultingFamilies();
                // Process defaulting families as needed
            } catch (Exception e) {
                // Handle exceptions, log, or throw as needed
                e.printStackTrace();
            }
        }
    }
}
