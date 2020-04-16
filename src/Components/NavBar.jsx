import React from "react";
import "../Styles/NavBar.css";
import UserIC from "../Icons/user.png";
import ProjectIC from "../Icons/project.png";
import InfoIC from "../Icons/info.png";
import ContactIC from "../Icons/identification.png";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      // Vertical navbar
      <nav className="vertical-nav">
        {/* Link to "/" which is the landing page */}
        <Link to="/">
          <li>
            <img className="user-ic" alt="User icon" src={UserIC} />
          </li>
        </Link>
        {/* Link to the projects component */}
        <Link to="/projects">
          <li>
            <img className="project-ic" alt="Project icon" src={ProjectIC} />
          </li>
        </Link>
        {/* Link to the info component */}
        <Link to="/info">
          <li>
            <img className="info-ic" alt="Info icon" src={InfoIC} />
          </li>
        </Link>
        {/* Link to the contact component */}
        <Link to="contact">
          <li>
            <img className="contact-ic" alt="Contact icon" src={ContactIC} />
          </li>
        </Link>
      </nav>
    );
  }
}
