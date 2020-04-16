import React from "react";
import "../Styles/404Page.css";
import Nav404 from "./Nav404";

export default class Page404 extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title-404">404 Page</h1>
        <h3 className="sub-404">
          The page you requested doesn't exist :( <br /> Try one of these links:
        </h3>
        <section className="navvie">
          <Nav404 />
        </section>
      </div>
    );
  }
}
