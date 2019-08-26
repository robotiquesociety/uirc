import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import robattle from "../images/robattle.jpg";
import { FaWhatsapp } from "react-icons/fa";
import mainBG from "../images/mainBG.jpg";
import TopBanner from "../components/TopBanner.js";
import "./LineFollow.css";

export default class LineFollow extends React.Component {
  render() {
    return (
      <div>
        <TopBanner src={mainBG} />
        <Container fluid>
          <br />
          <Row className="justify-content-md-center">
            <Col md="6" lg="7">
              <Row>
                <Col>
                  <Card body>
                    <h1 style={{ color: "#a62124" }}>Line Following Robot</h1>
                    <br />
                    <p>
                      A Robotic Line Follower Competition will be held in UniKL
                      MFI on 2nd until 3rd November 2019. There will be school
                      category and open category. Don't miss this chance to test
                      your understanding in line following robot.
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
                        <b>
                          1<sup>st</sup> Runner-Up:
                        </b>{" "}
                        TBA
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          2<sup>nd</sup> Runner-Up:
                        </b>{" "}
                        TBA
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Design Award:</b> TBA
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Technology Award:</b> TBA
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="6" lg="5">
              <Row>
                <Col>
                  <Carousel interval="3000">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={robattle}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={robattle}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={robattle}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
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
                          <Col>RM 100.00 (RM 50.00)</Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <p><b>Register Below</b></p>
                      <Button
                        variant="primary"
                        href="https://forms.gle/JHB54ZR7bPFhXb2W6"
                      >
                        Open Category
                      </Button>
                      <br /><br />
                      <Button
                        variant="primary"
                        href="https://forms.gle/JHB54ZR7bPFhXb2W6"
                      >
                        School Category (SMK)
                      </Button>
                      <br /><br />
                      <Button
                        variant="primary"
                        href="https://forms.gle/2tLQbEvL5KsXtNmBA"
                      >
                        School Category (SK)
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
                        Muhammad Aiman <FaWhatsapp /> 011-28478001
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
