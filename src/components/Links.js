import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Mainpage from "../containers/Mainpage";
import Robocombat from "../containers/Robocombat";
import { FaRegCopyright } from "react-icons/fa";
import "./Links.css";
import store from "../stores/index.js";
import { observer } from "mobx-react";
import AboutUs from "../containers/AboutUs";
import ContactUs from "../containers/ContactUs";
import Accomodation from "../containers/Accomodation";
import LineFollow from "../containers/LineFollow";
import EngChallenge from "../containers/EngChallenge";
import navLogo from "../assets/images/logouirc.png";

const Links = observer(
  class Links extends React.Component {
    constructor(props) {
      super(props);
      this.gotoHome = this.gotoHome.bind(this);
      this.gotoCombat = this.gotoCombat.bind(this);
      this.gotoLifo = this.gotoLifo.bind(this);
      this.gotoEngChallenge = this.gotoEngChallenge.bind(this);
      this.gotoAccom = this.gotoAccom.bind(this);
      this.gotoAbout = this.gotoAbout.bind(this);
      this.gotoContact = this.gotoContact.bind(this);
    }

    gotoHome() {
      store.pageNav.setPage("home");
    }

    gotoCombat() {
      store.pageNav.setPage("robocombat");
    }

    gotoLifo() {
      store.pageNav.setPage("lifo");
    }

    gotoEngChallenge() {
      store.pageNav.setPage("engc");
    }

    gotoAbout() {
      store.pageNav.setPage("about");
    }

    gotoAccom() {
      store.pageNav.setPage("accomodation");
    }

    gotoContact() {
      store.pageNav.setPage("contact");
    }

    render() {
      const page = store.pageNav;

      return (
        <Router>
          <div className="body">
            <Navbar
              fixed="top"
              collapseOnSelect
              expand="lg"
              bg="dark"
              variant="dark"
            >
              <Link onClick={this.gotoHome} className="navbar-brand" to="/uirc/">
                <img
                  alt="RS-LOGO"
                  src={navLogo}
                  width="200"
                  height="56"
                  className="d-inline-block align-top"
                />
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                  <Link
                    onClick={this.gotoHome}
                    className={`nav-link ${page.homeActive}`}
                    to="/uirc/"
                  >
                    Home
                  </Link>
                  <NavDropdown
                    title="2019 Competitions"
                    id="collasible-nav-dropdown"
                    className={page.compActive}
                  >
                    <Link
                      onClick={this.gotoCombat}
                      role="button"
                      className={`dropdown-item ${page.comp1Active}`}
                      to="/uirc/robot-combat/"
                    >
                      Robot Combat
                    </Link>
                    <Link
                      onClick={this.gotoLifo}
                      role="button"
                      className={`dropdown-item ${page.comp2Active}`}
                      to="/uirc/line-following/"
                    >
                      Line Following
                    </Link>
                    <Link
                      onClick={this.gotoEngChallenge}
                      role="button"
                      className={`dropdown-item ${page.comp3Active}`}
                      to="/uirc/engineering-challenge/"
                    >
                      Engineering Challenge
                    </Link>
                  </NavDropdown>
                  <Nav.Link>Schedule</Nav.Link>
                  <Link
                    onClick={this.gotoAccom}
                    className={`nav-link ${page.accomActive}`}
                    to="/uirc/accomodation/"
                  >
                    Accomodation
                  </Link>
                  <Link
                    onClick={this.gotoAbout}
                    className={`nav-link ${page.aboutActive}`}
                    to="/uirc/about/"
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={this.gotoContact}
                    className={`nav-link ${page.contactActive}`}
                    to="/uirc/contact/"
                  >
                    Contact Us
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route path="/uirc/" exact component={Mainpage} />
            <Route path="/uirc/robot-combat/" component={Robocombat} />
            <Route path="/uirc/line-following/" component={LineFollow} />
            <Route path="/uirc/engineering-challenge/" component={EngChallenge} />
            <Route path="/uirc/accomodation/" component={Accomodation} />
            <Route path="/uirc/about/" component={AboutUs} />
            <Route path="/uirc/contact/" component={ContactUs} />
            <br />
            <Container fluid className="footer">
              <FaRegCopyright className="footer-icon" /> Robotique Society 2019
            </Container>
          </div>
        </Router>
      );
    }
  }
);

export default Links;
