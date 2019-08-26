import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaWhatsapp } from "react-icons/fa";
import EngCPictures from "../components/EngCPictures";
import mainBG from "../images/engcBG.jpg";
import TopBanner from "../components/TopBanner.js";
import "./EngChallenge.css";

export default class EngChallenge extends React.Component {
  render() {
    return (
      <div>
          <TopBanner src={mainBG} />
        <br />
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="6" lg="7">
              <Row>
                <Col>
                  <Card body>
                    <h1 style={{ color: "#a62124" }}>Engineering Challenge</h1>
                    <br />
                    <p>
                    UniKL MFI Engineering Challenge is an innovation and creativity competition that is created for the primary and secondary school students. In this challenge, students are tasked to solve engineering related challenges. This event will expose students to real life problem and challenges in engineering, and also developing interest in STEM (Science, Technology, Engineering, and Mathematics). UniKL MFI Engineering Challenge is a student-lead event, which runs under UIRC 2019. The event is held on the 2nd and 3rd of November 2019 at Entrepreneur square, UniKL MFI.
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
                        <b>Champion:</b> TBA
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Design Award:</b> TBA
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="6" lg="5">
              <Row>
                <Col>
                  <EngCPictures/>
                </Col>
              </Row>
              <br />
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
                          <Col>RM 20.00 (RM 10.00)</Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Button
                        variant="primary"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScpqqe_o5PBeRTJDiLtetPExu_FMwj2lpp0FOfdgiRXUdxAyw/viewform?usp=sf_link"
                      >
                        Register Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Card>
                    <Card.Header>Rules &amp; Coodinating Team</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <u>Rules &amp; Regulation</u>
                        <br />
                        <br />
                        <Button variant="secondary" disabled>
                          Will be updated soon...
                        </Button>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <u>Contact Us (WhatsApp PM only)</u>
                        <br />
                        Muhammad Adib <FaWhatsapp /> 019-5774940
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
