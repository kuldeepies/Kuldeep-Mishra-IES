package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private OutwardPayment paymentService;

    @PostMapping("/submit")
    public void submitOutwardPayment(@RequestParam Long userId, @RequestParam BigDecimal amount, @RequestParam String invoiceDetails) {
        paymentService.submitOutwardPayment(userId, amount, invoiceDetails);
    }

    @GetMapping("/pending")
    public List<Payment> getPendingPayments() {
        return paymentService.getPendingPayments();
    }

    @PostMapping("/approve")
    public void approvePayment(@RequestParam Long checkerId, @RequestParam Long paymentId) {
        paymentService.approvePayment(checkerId, paymentId);
    }

    @PostMapping("/reject")
    public void rejectPayment(@RequestParam Long checkerId, @RequestParam Long paymentId) {
        paymentService.rejectPayment(checkerId, paymentId);
    }
}
