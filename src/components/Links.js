import React from "react";
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
import navLogo from "../assets/images/logouirc.png"

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
      let link;

      switch (page.page) {
        case "home":
          link = <Mainpage />;
          break;
        case "robocombat":
          link = <Robocombat />;
          break;
        case "lifo":
          link = <LineFollow />;
          break;
        case "engc":
          link = <EngChallenge />;
          break;
        case "accomodation":
          link = <Accomodation />;
          break;
        case "about":
          link = <AboutUs />;
          break;
        case "contact":
            link = <ContactUs />;
            break;
        default:
          break;
      }

      return (
        <div className="body">
          <Navbar
            fixed="top"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand href="#" onClick={this.gotoHome}>
              <img
                alt="RS-LOGO"
                src={navLogo}
                width="200"
                height="56"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" />
              <Nav>
                <Nav.Link onClick={this.gotoHome} className={page.homeActive}>
                  Home
                </Nav.Link>
                <NavDropdown
                  title="2019 Competitions"
                  id="collasible-nav-dropdown"
                  className={page.compActive}
                >
                  <NavDropdown.Item
                    onClick={this.gotoCombat}
                    className={page.comp1Active}
                  >
                    Robot Combat
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={this.gotoLifo}
                    className={page.comp2Active}
                  >
                    Line Following
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={this.gotoEngChallenge}
                    className={page.comp3Active}>
                    Engineering Challenge
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>Schedule</Nav.Link>
                <Nav.Link onClick={this.gotoAccom} className={page.accomActive}>
                  Accomodation
                </Nav.Link>
                <Nav.Link onClick={this.gotoAbout} className={page.aboutActive}>
                  About Us
                </Nav.Link>
                <Nav.Link onClick={this.gotoContact} className={page.contactActive}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {link}
          <br />
          <Container fluid className="footer">
            <FaRegCopyright className="footer-icon" /> Robotique Society 2019
          </Container>
        </div>
      );
    }
  }
);

export default Links;