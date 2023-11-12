import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userType, setUserType] = useState("employee"); // Default value
    const [headline, setHeadline] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { name, email, phoneNumber, userType, headline };

        fetch("http://localhost:8080/portal/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student),
        }).then(() => {
            console.log("New Student Added");
            setName("")
            setEmail("")
            setPhoneNumber("")
            setUserType("")
            setHeadline("")
        });
    };

    return (
        <div className="signup-form">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>User Type</label>
                    <select
                        name="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value="employee">Employee</option>
                        <option value="recruiter">Recruiter</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="headline">Headline</label>
                    <textarea
                        id="headline"
                        name="headline"
                        value={headline}
                        onChange={(e) => setHeadline(e.target.value)}
                    />
                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
