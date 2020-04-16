import React from "react";
import NameIC from "../../Icons/user (white).png";
import EmailIC from "../../Icons/mail.png";
import PhoneIC from "../../Icons/phone.png";

export default class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="personal-contact">
        <div className="name-cont">
          <img className="attr" src={NameIC} />
          <h4>Antonio Skopin</h4>
        </div>
        <div className="mail-cont">
          <img className="attr" src={EmailIC} />
          <h4>askopin@outlook.com</h4>
        </div>
        <div className="phone-cont">
          <img className="attr" src={PhoneIC} />
          <h4>06-40129597</h4>
        </div>
      </div>
    );
  }
}
