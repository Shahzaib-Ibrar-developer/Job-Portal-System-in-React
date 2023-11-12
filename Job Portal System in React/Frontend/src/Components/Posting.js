import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Posting.css";

const Posting = () => {
    const [title, setTitle] = useState("");
    const [designation, setDesignation] = useState("");
    const [address, setAddress] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [companyName, setCompanyName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const info = { title, designation, address, jobDescription, currentDate, companyName };
        fetch("http://localhost:8080/posting/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
        }).then(() => {
            console.log("New Student Added");
            setTitle("")
            setDesignation("")
            setAddress("")
            setJobDescription("")
            setCurrentDate(new Date());
            setCompanyName("")
        }).catch((error) => {
            console.error("Error:", error);
          });
    }


        return (
            <div className="container">
                <h2>Post a Job</h2>
                <Form className="newForm" onSubmit={handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="designation">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
                            type="text"
                            name="designation"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="jobDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="jobDescription"
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="currentDate">
                        <Form.Label>Current Date</Form.Label>
                        <DatePicker
                            selected={currentDate}
                            onChange={(date) => setCurrentDate(date)} // Use setCurrentDate to update currentDate state
                            className="form-control"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    };

    export default Posting
