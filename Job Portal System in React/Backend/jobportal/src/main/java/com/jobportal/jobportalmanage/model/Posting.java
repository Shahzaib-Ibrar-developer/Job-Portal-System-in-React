package com.jobportal.jobportalmanage.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.Table;

@Entity
//@Table(name="data_db")
public class Posting {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String designation;
	private String address;
	private String jobDescription;
	 @Column(name = "current_date_column")
	 private String currentDate;
	 private String companyName;
	public Posting() {
		super();
		// TODO Auto-generated constructor stub

	}
	public Posting(String title, String designation, String address, String jobDescription, String currentDate,
			String companyName) {
		super();
		this.title = title;
		this.designation = designation;
		this.address = address;
		this.jobDescription = jobDescription;
		this.currentDate = currentDate;
		this.companyName = companyName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getJobDescription() {
		return jobDescription;
	}
	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}
	public String getCurrentDate() {
		return currentDate;
	}
	public void setCurrentDate(String currentDate) {
		this.currentDate = currentDate;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	
	
}