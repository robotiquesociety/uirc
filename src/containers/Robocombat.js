import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaWhatsapp } from "react-icons/fa";
import mainBG from "../assets/images/uircMain.png";
import TopBanner from "../components/TopBanner.js";
import RoboCombatPics from "../components/RoboCombatPics";
import "./Robocombat.css";

export default class Robocombat extends React.Component {
  render() {
    return (
      <div>
        <TopBanner src={mainBG} />
        <br />
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="6" lg="7">
              <br />
                <Row>
                    <Col>
              <Card body>
                <h1 style={{ color: "#a62124" }}>Robot Battle</h1>
                <br />
                <p>
                  UniKL Ro-Battle Competition aims to create awareness and
                  interest in robotics technology as well as create a platform
                  for various people especially the students to be involved in a
                  more hands-on and practical aspect in engineering and
                  technology through robotics.
                </p>
                <p>
                  This program is a student-driven event, initiated by Robotique
                  Society with the collaboration of various clubs/societies and
                  departments of Universiti Kuala Lumpur. The competition is
                  open to IPTA, IPTS, Technical Institute, Companies and
                  Schools.
                </p>
                <p>
                  This event is a two day event which starts on 2nd November
                  2019 to 3rd November 2019 at Perdana Hall, Malaysia France
                  Institute, University Kuala Lumpur.
                </p>
              </Card>
              </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Card>
                    <Card.Header>Prizes</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <b>Champion:</b> RM 2000.00 &amp; Trophy
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          1<sup>st</sup> Runner-Up:
                        </b>{" "}
                        RM 1000.00 &amp; Trophy
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          2<sup>nd</sup> Runner-Up:
                        </b>{" "}
                        RM 800.00 &amp; Trophy
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          3<sup>rd</sup> Runner-Up:
                        </b>{" "}
                        RM 600.00 &amp; Trophy
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Design Award:</b> RM 200.00 &#43; Award Plaque
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Technology Award:</b> RM 200.00 &#43; Award Plaque
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="6" lg="5">
            <br />
              <Row>
                <Col>
                  <RoboCombatPics/>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <Card>
                    <Card.Header>Registration</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Registration fees can be transfered to the account
                        below:-
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col xs="5">
                            <b>Account Number</b>
                          </Col>
                          <Col>12029021019728</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col xs="5">
                            <b>Bank Name</b>
                          </Col>
                          <Col>Bank Islam</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col xs="5">
                            <b>Account Holder</b>
                          </Col>
                          <Col>Qurratul Nadzirah Binti Zahrin</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col xs="5">
                            <b>Registration Fees (Deposit)</b>
                          </Col>
                          <Col>RM 200.00 (RM 100.00)</Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Button
                        variant="primary"
                        href="https://forms.gle/yNmLo5Bwr8sst86T9"
                      >
                        Register Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br/>
              <Row>
                  <Col>
                  <Card>
                  <Card.Header>Rules &amp; Coodinating Team</Card.Header>
                  <ListGroup variant="flush">
                      <ListGroup.Item>
                        <u>Rules &amp; Regulation</u><br/><br/>
                        <Button variant="secondary" disabled>Will be updated soon...</Button>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <u>Contact Us (WhatsApp PM only)</u><br/>
                        Muhammad Afeeq <FaWhatsapp/> 011-35035154
                      </ListGroup.Item>
                      </ListGroup>
                  </Card>
                  </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
