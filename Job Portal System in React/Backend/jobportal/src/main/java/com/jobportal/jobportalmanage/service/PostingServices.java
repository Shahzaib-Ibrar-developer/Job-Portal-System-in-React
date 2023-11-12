package com.jobportal.jobportalmanage.service;

import java.util.List;

import com.jobportal.jobportalmanage.model.Posting;

public interface PostingServices {
public String addData(Posting post);
public List<Posting> getAll(Posting post);
}
