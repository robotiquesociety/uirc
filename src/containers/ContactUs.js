import React from "react";
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
                          <br /><br />
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
                  <Card.Text>
                    Email:
                  </Card.Text>
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
