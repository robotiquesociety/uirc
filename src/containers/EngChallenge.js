import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaWhatsapp } from "react-icons/fa";
import EngCPictures from "../components/EngCPictures";
import mainBG from "../assets/images/uircMain.png";
import TopBanner from "../components/TopBanner.js";
import PDFRules from "../assets/Peraturan_UIRC_Bridge_Challenge.pdf";
import "./EngChallenge.css";

export default class EngChallenge extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Robotique Society - Engineering Challenge</title>
          <meta
            name="description"
            content="
            Engineering Challenge is an innovation and creativity competition that is created to test the ability of participants to solve engineering related challenges. Test your limit as an engineer and improve yourself. Think outside the box? No! Think outside this world. Participate now and claim your position on the seat of GREATNESS. Surprise Us!"
          />
          <meta
            name="keywords"
            content="UIRC, Malaysia, Robattle, UniKL, MFI, Malaysia France Institute, Engineering Challenge, University Kuala Lumpur, Competition, November, 2019, Robotique Society, Robotic, Community, Society"
          />
        </Helmet>
        <TopBanner src={mainBG} />
        <br />
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="6" lg="7">
              <br />
              <Row>
                <Col>
                  <Card body>
                    <h1 style={{ color: "#a62124" }}>Engineering Challenge</h1>
                    <br />
                    <p>
                      UniKL MFI Engineering Challenge is an innovation and
                      creativity competition that is created for the primary and
                      secondary school students. In this challenge, students are
                      tasked to solve engineering related challenges. This event
                      will expose students to real life problem and challenges
                      in engineering, and also developing interest in STEM
                      (Science, Technology, Engineering, and Mathematics). UniKL
                      MFI Engineering Challenge is a student-lead event, which
                      runs under UIRC 2019. The event is held on the 2nd and 3rd
                      of November 2019 at Entrepreneur square, UniKL MFI.
                    </p>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Card>
                    <Card.Header>SMK Category Prizes</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <b>Champion:</b> RM 150.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>2nd Place Award:</b> RM 100.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>3rd Place Award:</b> RM 50.00
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
                  <EngCPictures />
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
                            <b>Registration Fees</b>
                          </Col>
                          <Col>RM 10.00 (per team of two)</Col>
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
                        <Button variant="primary" href={PDFRules}>
                          View Rules and Regulation
                        </Button>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <u>Contact Us (WhatsApp PM only)</u>
                        <br />
                        Baaz <FaWhatsapp /> +6019 577 4940
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
