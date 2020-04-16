import React, { Fragment } from "react";
import "./Styles/App.css";
import Navbar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import ProjectsPage from "./Components/ProjectsPage";
import InfoPage from "./Components/InfoPage";
import ContactPage from "./Components/ContactPage";
import Page404 from "./Components/Page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Switch to check what components belongs to what path  */}
        <Switch>
          {/* Routes to paths */}

          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Navbar />
                <LandingPage />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/projects"
            render={(props) => (
              <Fragment>
                <Navbar />
                <ProjectsPage />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/info"
            render={(props) => (
              <Fragment>
                <Navbar />
                <InfoPage />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/contact"
            render={(props) => (
              <Fragment>
                <Navbar />
                <ContactPage />
              </Fragment>
            )}
          />

          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
