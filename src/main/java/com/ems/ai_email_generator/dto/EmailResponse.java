package com.ems.ai_email_generator.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmailResponse {

    private String subject;
    private String body;

}