package com.jobportal.jobportalmanage.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.jobportalmanage.model.JobPortal;
import com.jobportal.jobportalmanage.service.Servicesimpl;


@RestController
@RequestMapping("/portal")
@CrossOrigin
public class PortalController {
@Autowired
private Servicesimpl services;

@GetMapping("/getAll")
public List<JobPortal> getAllData(@RequestBody JobPortal portal){
	return services.getAll(portal);
}
@PostMapping("/add")
public String addData(@RequestBody JobPortal portal){
	return services.addInfo(portal);
}



@PostMapping("/check-existence")
public ResponseEntity<?> checkExistence(@RequestBody Map<String, String> requestData) {
    String name = requestData.get("name");
    String email = requestData.get("email");

    // Check if the user and email exist
    boolean exists = services.isUserExists(name, email);
    if (exists) {
        // Create a JobPortal object and set its name and email
        JobPortal portalData = new JobPortal();
        portalData.setName(name);
        portalData.setEmail(email);

        // Retrieve additional user data
        portalData = services.getUserData(portalData);

        if (portalData != null) {
            // Return the user data along with a success message
            return ResponseEntity.ok(portalData);
        } else {
            // If user data is not found, return a custom error message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User data not found.");
        }
    } else {
        // If user and email do not exist, return a not found response
        return ResponseEntity.notFound().build();
    }
}



}
