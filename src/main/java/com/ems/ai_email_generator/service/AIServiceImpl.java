package com.ems.ai_email_generator.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ems.ai_email_generator.dto.EmailRequest;
import com.ems.ai_email_generator.dto.EmailResponse;

@Service
public class AIServiceImpl implements AIService {

    private final RestTemplate restTemplate;

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    public AIServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public EmailResponse generateEmail(EmailRequest request) {

        String prompt = """
                Write a professional %s.

                Employee Name : %s
                Department : %s
                Designation : %s

                Return only the email without explanation.
                """
                .formatted(
                        request.getEmailType(),
                        request.getName(),
                        request.getDepartment(),
                        request.getDesignation());

        Map<String, Object> text = new HashMap<>();
        text.put("text", prompt);

        Map<String, Object> part = new HashMap<>();
        part.put("parts", List.of(text));

        Map<String, Object> body = new HashMap<>();
        body.put("contents", List.of(part));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity =
                new HttpEntity<>(body, headers);

        // Gemini API Call yaha hoga (Part B)

        String url = apiUrl + "?key=" + apiKey;

Map response = restTemplate.postForObject(
        url,
        entity,
        Map.class
);
if (response == null) {
    return new EmailResponse(
            "Error",
            "No response received from Gemini API."
    );
}
try {

    List<Map<String, Object>> candidates =
            (List<Map<String, Object>>) response.get("candidates");

    Map<String, Object> candidate = candidates.get(0);

    Map<String, Object> content =
            (Map<String, Object>) candidate.get("content");

    List<Map<String, Object>> parts =
            (List<Map<String, Object>>) content.get("parts");

    String generatedEmail =
            parts.get(0).get("text").toString();

    return new EmailResponse(
            "AI Generated Email",
            generatedEmail
    );

} catch (Exception e) {

    return new EmailResponse(
            "Error",
            "Unable to generate email.\n\n" + e.getMessage()
    );
}
    }
}
