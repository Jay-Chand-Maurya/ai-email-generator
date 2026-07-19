package com.ems.ai_email_generator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ems.ai_email_generator.dto.EmailRequest;
import com.ems.ai_email_generator.dto.EmailResponse;
import com.ems.ai_email_generator.service.AIService;

@RestController
@RequestMapping("/api/emails")
@CrossOrigin(origins = {"https://ai-email-generatorapp.netlify.app", "http://localhost:5173"})
public class AIController {

    @Autowired
    private AIService aiService;

    @PostMapping("/generate")
    public EmailResponse generateEmail(@RequestBody EmailRequest request) {

        return aiService.generateEmail(request);

    }
}