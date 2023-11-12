package com.jobportal.jobportalmanage.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.jobportal.jobportalmanage.model.Posting;

public interface PostingRepository extends JpaRepository<Posting,Integer> {

}
