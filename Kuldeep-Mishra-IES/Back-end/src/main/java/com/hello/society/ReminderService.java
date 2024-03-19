package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.util.List;

@Service
public class ReminderService {

    @Autowired
    private EmailService emailService;

    @Autowired
    private MonthlyPaymentRepository monthlyPaymentRepository;

    // Scheduled task to run from 5th to 10th of every month
    @Scheduled(cron = "0 0 0 5-10 * ?")
    public void sendMonthlyReminders() {
        List<MonthlyPayment> overduePayments = monthlyPaymentRepository.findOverduePayments();

        for (MonthlyPayment payment : overduePayments) {
            try {
                sendMonthlyReminder(payment.getFamily().getEmail(), "Monthly Maintenance Reminder", "Don't forget to pay your monthly maintenance fee!");
            } catch (MessagingException e) {
                // Handle exceptions, log or throw as needed
                e.printStackTrace();
            }
        }
    }

    private void sendMonthlyReminder(String to, String subject, String body) throws MessagingException {
        // Use your email sending logic here
        emailService.sendEmail(to, subject, body);
    }
}
