import React from "react";
import successity from "../logo.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-wrapper">
        <table border="4" width="70%" height="60%"><div className="text-header-wrapper">
          <p className="text-header font__p p__size">Welcome To</p>
          <span>  Social Network! </span>
        </div>

        <div className="text-section font__p p__size">
		PES University<br/>
          This Social Network site is a Web Technology Mini Project which will creates<br/>
		  A Great Platform For Peaoples To Connect With Each Other And Sharing Their Thoughs.
          <br /><br/>
          Created By Team Members :
          <ul>
            <li>Shubha V Hegde</li>
            <li>Shubham S</li>
            <li>Pavankumar Hegde</li>
            
          </ul>
          <div className="text-button-wrapper">
            <Link to="/register">Register in</Link> and add post!
          </div>
        </div></table>
      </div>
      <div className="image-wrapper">
        <img src={successity} className="landing-image" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
