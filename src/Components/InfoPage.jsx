import React from "react";
import "../Styles/Containers.css";
import "../Styles/InfoPage.css";
import TijdelijkIMG from "../Images/tijdelijk.JPG";

export default class InfoPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="aboutContent">
          <div className="aboutText">
            <h1 className="aboutTitle">About me</h1>
            <h4>
              I'm an Android developer <br /> from Rotterdam the Netherlands.
            </h4>
            <p>
              I love to bring ideas to real world apps and to solve <br />{" "}
              problems with code. I'm a first year student at the <br />
              Techniek College Rotterdam. I love to work with <br /> Java,
              Kotlin, PHP and ReactJS. <br /> I'm a kickboxer in my free time
              and really love to do it.
            </p>
          </div>
          <div className="img-div-about">
            <img className="aboutIMG" src={TijdelijkIMG} />
          </div>
        </div>
      </div>
    );
  }
}
