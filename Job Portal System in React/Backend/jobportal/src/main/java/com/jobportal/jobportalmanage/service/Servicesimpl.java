package com.jobportal.jobportalmanage.service;
import com.jobportal.jobportalmanage.model.JobPortal;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.jobportalmanage.model.JobPortal;
import com.jobportal.jobportalmanage.model.Posting;
import com.jobportal.jobportalmanage.repository.PortalRepository;
@Service
public class Servicesimpl implements Services {
	@Autowired
	private PortalRepository portalRepo;

	@Override
	public List<JobPortal> getAll(JobPortal jobPortal) {
		return portalRepo.findAll();
	}

	@Override
	public String addInfo(JobPortal jobPortal) {
		JobPortal portal = portalRepo.save(jobPortal);
		return "New Student is added";
	}

	@Override
	  public boolean isUserExists(String name, String email) {
        return portalRepo.existsByNameAndEmail(name, email);
    }
	@Override
	public JobPortal getUserData(JobPortal portalData) {
	    // Assuming you have a method to retrieve user data by name and email
	    return portalRepo.findByNameAndEmail(portalData.getName(), portalData.getEmail());
	}


}
