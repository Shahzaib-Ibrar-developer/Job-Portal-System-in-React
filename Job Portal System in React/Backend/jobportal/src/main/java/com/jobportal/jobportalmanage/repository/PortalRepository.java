package com.jobportal.jobportalmanage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.jobportalmanage.model.JobPortal;

public interface PortalRepository extends JpaRepository<JobPortal,Integer>{
	 boolean existsByNameAndEmail(String name, String email);

	JobPortal findByNameAndEmail(String name, String email);
}
