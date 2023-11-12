

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "./Login"; // Fixed import path
import SignUp from "./SignUp";// Fixed import path
import Home from "./Home"; // Fixed import path
import "./Navbar.css";
import Posting from "./Posting";
const Navbar = () => {
    return (
        <Router>
            <div className="Navbar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link> {/* Corrected path */}
                        </li>
                        <li>
                            <Link to="login">Login</Link> {/* Corrected path */}
                        </li>
                        <li>
                            <Link to="signUp">SignUp</Link> {/* Corrected path */}
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/home" element={<Home />} /> {/* Corrected path */}
                    <Route path="/login" element={<Login />} /> {/* Corrected path */}
                    <Route path="/signUp" element={<SignUp />} /> {/* Corrected path */}
                    <Route path="/posting" element ={<Posting />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Navbar;
