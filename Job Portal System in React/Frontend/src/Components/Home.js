import React from "react";
import JobSection from "./JobSection";
import PostAJob from "./PostAJob";
import ProfileSection from "./ProfileSection"
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="mainSection">
                <div className="Container-1">
                    <ProfileSection />
                </div>
                <div className="Container-2">

                <JobSection />
                </div>
                <div className="Container-3">
                    <PostAJob />
                </div>
            </div>
        </>
    )
}
export default Home