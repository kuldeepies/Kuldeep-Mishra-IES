package com.hello.society;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/reports/yoy-increase")
public class YoYIncreaseReportController {

    @Autowired
    private YoYIncreaseReportService YoYIncreaseReportService;

    @GetMapping
    public ResponseEntity<List<Double>> getYoYIncreaseOfSpendings() {
        List<Double> yoYIncrease = YoYIncreaseReportService.getYoYIncreaseOfSpendings();
        return new ResponseEntity<>(yoYIncrease, HttpStatus.OK);
    }
}
