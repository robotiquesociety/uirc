import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import lifo1 from "../assets/images/lifo1.jpg";
import lifo2 from "../assets/images/lifo2.jpg";
import lifo3 from "../assets/images/lifo3.jpg";
import lifo4 from "../assets/images/lifo4.jpg";
import { FaWhatsapp } from "react-icons/fa";
import mainBG from "../assets/images/uircMain.png";
import TopBanner from "../components/TopBanner.js";
import PDFRules from "../assets/RnR_LIFO_UIRC_2019.pdf";
import "./LineFollow.css";

export default class LineFollow extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Robotique Society - Line Following</title>
          <meta
            name="description"
            content="Line following robot, the first step towards autonomous car. A robot that follows the designated path to reach its objectives. Are you capable of making the fastest line follow robot? Prove your skill now! Participate and claim your title as the best. Challenge your knowledge in mechanical, programming and Critical Thinking skills. We await your achievements."
          />
          <meta
            name="keywords"
            content="UIRC, Malaysia, Robattle, UniKL, MFI, Malaysia France Institute, Line Following, Robot, University Kuala Lumpur, Competition, November, 2019, Robotique Society, Robotic, Community, Society"
          />
        </Helmet>
        <TopBanner src={mainBG} />
        <Container fluid>
          <br />
          <Row className="justify-content-md-center">
            <Col md="6" lg="7">
              <Row>
                <Col>
                  <br />
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
                    <Card.Header>Primary School Category Prizes</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <b>Champion:</b> RM 300.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          1<sup>st</sup> Runner-Up:
                        </b>{" "}
                        RM 200.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          2<sup>nd</sup> Runner-Up:
                        </b>{" "}
                        RM 100.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Design Award:</b> RM 50.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Technology Award:</b> RM 50.00
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Card>
                    <Card.Header>Secondary School Category Prizes</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <b>Champion:</b> RM 300.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          1<sup>st</sup> Runner-Up:
                        </b>{" "}
                        RM 200.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          2<sup>nd</sup> Runner-Up:
                        </b>{" "}
                        RM 100.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Design Award:</b> RM 50.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Technology Award:</b> RM 50.00
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Card>
                    <Card.Header>Open Category Prizes</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <b>Champion:</b> RM 300.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          1<sup>st</sup> Runner-Up:
                        </b>{" "}
                        RM 200.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>
                          2<sup>nd</sup> Runner-Up:
                        </b>{" "}
                        RM 100.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Design Award:</b> RM 50.00
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Best Technology Award:</b> RM 50.00
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="6" lg="5">
              <Row>
                <Col>
                  <br />
                  <Carousel interval="3000">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={lifo1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={lifo2}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={lifo3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={lifo4}
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
                      <p>
                        <b>Register Below</b>
                      </p>
                      <Button
                        variant="primary"
                        href="https://forms.gle/2tLQbEvL5KsXtNmBA"
                      >
                        Primary School Category
                      </Button>
                      <br />
                      <br />
                      <Button
                        variant="primary"
                        href="https://forms.gle/bg5DeCzBDDZrHKTs6"
                      >
                        Secondary School Category
                      </Button>
                      <br />
                      <br />
                      <Button
                        variant="primary"
                        href="https://forms.gle/JHB54ZR7bPFhXb2W6"
                      >
                        Open Category
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
                        Aiman Kamarudin <FaWhatsapp /> 011-28478001
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
