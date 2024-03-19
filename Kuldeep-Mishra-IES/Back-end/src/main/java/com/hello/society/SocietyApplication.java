package com.hello.society;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EntityScan("com.hello.society") // Add this line
@EnableScheduling

public class SocietyApplication {

    public static void main(String[] args) {
        SpringApplication.run(SocietyApplication.class, args);
    }
}
