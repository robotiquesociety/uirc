import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Gmap from "../components/Gmap.js";
import mainBG from "../assets/images/uircMain.png";
import TopBanner from "../components/TopBanner.js";

import "./ContactUs.css";

export default class ContactUs extends React.Component {
  render() {
    return (
      <div className="contactUs">
        <Helmet>
          <title>Robotique Society - Contact Us</title>
          <meta
            name="description"
            content="UniKL MFI yearly competition is here. UniKL International Robattle Competition (UIRC) 2019 is a place where you can push your limit in building the best robot you can build. Compete with other robotic enthusiasts to be the best in concurring the task given. Choose between our various tasks covering from creative engineering design, fast and accurate line following robot, or even crush the other competitors in our famous Robattle event. Exchange knowledge between us. Together we grow and bring the best robotic community. Visit our website and come and join us."
          />
          <meta
            name="keywords"
            content="UIRC, Malaysia, Robattle, Robot Combat, UniKL, MFI, Malaysia France Institute, Line Following, Robot, Engineering Challenge, University Kuala Lumpur, Competition, November, 2019, Robotique Society, Robotic, Community, Society"
          />
        </Helmet>
        <TopBanner src={mainBG} />
        <br />
        <Container fluid>
          <br />
          <Row>
            <Col lg="8">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h2 className="about-text-center">Our Location</h2>
                    <br />
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col lg="5">
                        <p>
                          <b>Address:</b>
                          <br />
                          <br />
                          Robotique Society Unikl MFI,
                          <br />
                          Robotics and Automation Center Of Excellence,
                          <br />
                          Level 2, Block E,
                          <br />
                          Universiti Kuala Lumpur Malaysia France Institute,
                          <br />
                          Seksyen 14, Jalan Teras Jernang,
                          <br />
                          Bandar Baru Bangi,43650 Bandar Baru Bangi,
                          <br />
                          Selangor, Malaysia.
                        </p>
                      </Col>
                      <Col>
                        <Gmap />
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Header as="h5">Direct Contacts</Card.Header>
                <Card.Body>
                  <Card.Text>Email:</Card.Text>
                  <Button
                    variant="link"
                    href="mailto:robotiquesociety@gmail.com"
                  >
                    robotiquesociety@gmail.com
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}
