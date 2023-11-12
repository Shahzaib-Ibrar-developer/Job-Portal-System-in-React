import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import "./PostAJob.css"
const PostAJob = () => {
    return (
        <div className="btn">
            <Link to="/posting">
                {/* No need for a custom click handler, React Router will handle the navigation */}
                <button className="bt-2">Post Job</button>
            </Link>
        </div>
    );
};

export default PostAJob;
