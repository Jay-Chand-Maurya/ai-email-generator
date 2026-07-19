package com.ems.ai_email_generator.dto;

import lombok.Data;

@Data
public class EmailRequest {

    private String name;
    private String department;
    private String designation;
    private String emailType;

}