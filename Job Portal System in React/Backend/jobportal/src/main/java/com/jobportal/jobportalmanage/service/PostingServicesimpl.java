package com.jobportal.jobportalmanage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.jobportalmanage.model.Posting;
import com.jobportal.jobportalmanage.repository.PostingRepository;

@Service
public class PostingServicesimpl implements PostingServices {
	@Autowired
	private PostingRepository postingRepo;

	@Override
	public String addData(Posting post) {
		postingRepo.save(post);
		return "Data Added in Data base";
	}

	@Override
	public List<Posting> getAll(Posting post) {
		// TODO Auto-generated method stub
		return postingRepo.findAll();
	}

}
