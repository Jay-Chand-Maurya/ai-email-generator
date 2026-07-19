package com.ems.ai_email_generator.service;

import com.ems.ai_email_generator.dto.EmailRequest;
import com.ems.ai_email_generator.dto.EmailResponse;

public interface AIService {

    EmailResponse generateEmail(EmailRequest request);

}