package com.jobportal.jobportalmanage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.jobportalmanage.model.Posting;
import com.jobportal.jobportalmanage.service.PostingServicesimpl;

@RestController
@RequestMapping("/posting")
@CrossOrigin
public class PostingControllers {

	
	@Autowired
	private PostingServicesimpl serve;
	
	@PostMapping("/add")
	public String addData(@RequestBody Posting post) {
		serve.addData(post);
		return "Student Data Added";
	}
	
	@GetMapping("/getAll")
	public List<Posting> getAll(Posting post){
		return serve.getAll(post);
	}
}
