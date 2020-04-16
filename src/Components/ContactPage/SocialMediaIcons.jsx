import React from "react";
import "../../Styles/ContactPage.css";
import InstaICwhite from "../../Icons/instagram.png";
import FacebookICwhite from "../../Icons/facebook.png";
import LinkedinICwhite from "../../Icons/linkedin.png";
import InstaICoriginal from "../../Icons/instagram (original).png";
import FacebookICoriginal from "../../Icons/facebook (original).png";
import LinkedinICoriginal from "../../Icons/linkedin (original).png";

export default class SocialMediaIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      insta: InstaICwhite,
      facebook: FacebookICwhite,
      linkedin: LinkedinICwhite,
    };
  }
  render() {
    return (
      <div className="social-media-circles">
        <div className="insta">
          <a href="https://www.instagram.com/antonioo.sk/" target="_blank">
            <img
              className="instaIc"
              src={this.state.insta}
              onMouseEnter={() => {
                this.setState({
                  insta: InstaICoriginal,
                });
              }}
              onMouseOut={() => {
                this.setState({
                  insta: InstaICwhite,
                });
              }}
            />
          </a>
        </div>
        <div className="insta">
          <a href="https://www.facebook.com/antonio.skopin" target="_blank">
            <img
              className="instaIc"
              src={this.state.facebook}
              onMouseEnter={() => {
                this.setState({
                  facebook: FacebookICoriginal,
                });
              }}
              onMouseOut={() => {
                this.setState({
                  facebook: FacebookICwhite,
                });
              }}
            />
          </a>
        </div>
        <div className="insta">
          <a
            href="https://www.linkedin.com/in/antonio-skopin-73515718b/"
            target="_blank"
          >
            <img
              className="instaIc"
              src={this.state.linkedin}
              onMouseEnter={() => {
                this.setState({
                  linkedin: LinkedinICoriginal,
                });
              }}
              onMouseOut={() => {
                this.setState({
                  linkedin: LinkedinICwhite,
                });
              }}
            />
          </a>
        </div>
      </div>
    );
  }
}
