import React, { useState, useEffect } from 'react';
import "./JobSection.css"

const JobSection = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/posting/getAll')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setJobData(data))
      .catch((error) => {
        console.error('Error fetching job data:', error);
      });
  }, []);
  

  return (
    <div className="job-data">
      <h1>Job Data</h1>
      <ul>
        {jobData.map((job) => (
          <li key={job.id}>
            <strong>Title:</strong> {job.title}<br /> <br />
            <strong>Designation:</strong> {job.designation}<br /> <br />
            <strong>Address:</strong> {job.address}<br /> <br />
            <strong>Date:</strong> {job.currentDate}<br /> <br />
            <strong>Job Description:</strong> {job.jobDescription}<br /> <br /><br />
            {/* Add more fields as needed */}
            <button>Apply Now</button> {/* Apply Now button */}
            <hr /> <br />
          </li>
          
        )
        
        )
        }

      </ul>
    </div>
  );
};

export default JobSection;
