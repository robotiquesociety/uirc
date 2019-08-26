import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import about from "../images/about.png";
import cheamer from "../images/cheamer.jpg";
import "./AboutUs.css";
import Gmap from "../components/Gmap.js";
import mainBG from "../images/engcBG.jpg";
import TopBanner from "../components/TopBanner.js";

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutUs">
      <TopBanner src={mainBG} title="robotique society" text="about us" />
    <br />
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="6" lg="6">
              <Card>
                <Card.Img variant="top" src={about} />
                <Card.Body>
                  <Card.Text>
                    <h4>Vision</h4>
                    <ul>
                      <li>
                        To support the vision of university in producing
                        technopreneurial students.
                      </li>
                      <li>
                        To produce students who are able to stand out in terms
                        of skills and job performance.
                      </li>
                    </ul>
                    <br />
                    <h4>Mission</h4>
                    <ul>
                      <li>
                        To provide an opportunity for students across the
                        country to show their talents and compete in terms of
                        technology, skills and expertise.
                      </li>
                      <li>
                        To create awareness and interest in robotic technology
                        and as a platform especially for students to be more
                        involved in the practical aspects of engineering and
                        technology through robotics.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" lg="6">
              <Card>
                <Card.Body>
                  <Card.Text>
                    <h1>About Us</h1>
                    <p>
                      Robotique Society is a club/society under Universiti Kuala
                      Lumpur, Malaysia France Institute. We aim to give exposure
                      among students, lecturers and the communities into
                      robotics world especially in Malaysia. We are also
                      conducting seminars and workshops for students as we teach
                      and share about programming, circuit designing and many
                      more. We are also actively participates in national level
                      robotics competition such as RoboGamez, Survival Robot
                      Competition, FRC 2015 and many more. We are also
                      organizing events either inside or outside campus by
                      request.
                    </p>
                    <br />
                    <h5>Achievements and Developments</h5>
                    <ul>
                      <li>
                        Robotique Society was a proud organizer of UniKL
                        Robattle Competition at University Kuala Lumpur Malaysia
                        France Institute.
                      </li>
                      <li>
                        Combat Robot, Royal Rumblez category at Pantai Morib,
                        Banting, Selangor.
                      </li>
                      <li>
                        Secured top 16 in Fighting Robot Competition in Serdang,
                        Selangor.
                      </li>
                      <li>
                        Top 8 in Survival Robot Competition at Science Centre,
                        Pulau Pinang.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Row>
                      <Col md="3">
                        <h2>Who We Are</h2>
                      </Col>
                      <Col>
                        <p>
                          We are an undergraduate engineering technology student
                          who are dedicated and passionate into robotics.
                          Robotique Society members consist of students who are
                          capable in mechanical, design, fabrication,
                          programming, electronics and many more.
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Row>
                      <Col md="3">
                        <h2>Our History</h2>
                      </Col>
                      <Col>
                        <p>
                          Robotique Society was established on March 12, 2014 by
                          a couple of University Kuala Lumpur, Malaysia France
                          Institute students who are passionate and dedicated
                          into Robotics. Most of the founder was an engineering
                          student who are major in Mechatronics, Industrial
                          Automation and Robotics.This association began to turn
                          on its first participation at the national level,
                          RobotWar Competition in UNITEN. Robotique Society is
                          active in robotic competitions throughout the country.
                          In addition, the association also organizes seminars
                          and workshops that involve engineering skills such as
                          software, hardware and other skills like Programming
                          Workshop and Circuit Designing Workshop.
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row className="about-text-center">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h2>Founders</h2>
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col md="6">
                        <Image
                          style={{ width: "100%" }}
                          src={cheamer}
                          rounded
                        />
                        <p>
                          The founders of Robotique Society. The first
                          generation.
                        </p>
                      </Col>
                      <Col>
                        <p>
                          The first generation of Robotique Society. During this
                          time, the club was not yet called Robotique Society,
                          its Robotique Club UniKL MFI. The picture on the left
                          was taken before Robotics Awareness Week (RAW)
                          organized by UNITEN.
                          <br />
                          <br />
                          On the left:
                          <br />
                          Hafiz Ikram Bin Husni Shariff
                          <br />
                          Ahmad Bin Zainul Abidin
                          <br />
                          Nor Hazrien Bin Hamdan
                          <br />
                          Mohd Akmal Afiq Bin Nor Effenday
                          <br />
                          Mior Mohd Sabri bin Safian
                          <br />
                          Muhammad Akmal Mukmin bin Iqhbal
                          <br />
                          Amir Izzat Bin Kamil
                          <br />
                          <br />
                          Below:
                          <br />
                          Mr. Amir Sharizam bin Ismail with our first robot:
                          GERONEETA
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h2 className="about-text-center">Location</h2>
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col md="5">
                        <p>
                          Address:
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
                          ​Selangor, Malaysia.
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
          </Row>
        </Container>
      </div>
    );
  }
}
