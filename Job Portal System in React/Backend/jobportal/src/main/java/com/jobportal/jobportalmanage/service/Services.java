package com.jobportal.jobportalmanage.service;

import java.util.List;

import com.jobportal.jobportalmanage.model.JobPortal;
import com.jobportal.jobportalmanage.model.Posting;

public interface Services {
public List<JobPortal> getAll(JobPortal jobPortal);
public String addInfo(JobPortal jobPortal);
public boolean isUserExists(String name, String email);
public JobPortal getUserData(JobPortal portalData);

}
