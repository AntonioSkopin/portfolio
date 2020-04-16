import React from "react";
import SocialMediaIcons from "./ContactPage/SocialMediaIcons";
import PersonalInfo from "./ContactPage/PersonalInfo";
import "../Styles/Containers.css";
import "../Styles/ContactPage.css";

export default class ContactPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="contact-title">Contact me</h1>
        <div className="contact-content">
          <PersonalInfo />
          <div className="middle-line"></div>
          <SocialMediaIcons />
        </div>
      </div>
    );
  }
}
