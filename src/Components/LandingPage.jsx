import React from "react";
import "../Styles/Containers.css";
import "../Styles/LandingPage.css";
import PersonalIMG from "../Images/tijdelijk.JPG";
import LocationIC from "../Icons/pin.png";

export default class LandingPage extends React.Component {
  render() {
    return (
      // Background content
      <div className="container">
        <h1 className="firstname">
          Antonio <br /> &emsp; Skopin
        </h1>

        <div className="developer-box">
          <h1 className="developer-text">App Developer</h1>
        </div>

        {/* Circle background for image */}
        <div className="image-background">
          {/* Image of me */}
          <img className="image-me" alt="Personal" src={PersonalIMG} />
        </div>

        {/* Bubble below image */}
        <div className="bubble"></div>

        {/* Location icon and text */}
        <div className="location-div">
          <h1 className="location-text">
            {/* Location Icon */}
            <img
              className="location-icon"
              alt="Location icon"
              src={LocationIC}
            />
            {/* Text next to location icon */}
            Rotterdam, Zuid-Holland
          </h1>
        </div>
      </div>
    );
  }
}
