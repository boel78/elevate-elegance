package com.test.test.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Tillåter alla endpoints
                .allowedOrigins("https://elevate-elegance-frontend.onrender.com")  // Lägg till din frontend URL här
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Specifika HTTP-metoder
                .allowedHeaders("*")  // Tillåter alla headers
                .allowCredentials(true);  // Tillåter cookies
    }
}
