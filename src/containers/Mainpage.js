import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import robattle from "../images/robattle.jpg";
import mainBG from "../images/mainBG.jpg";
import engcPic from "../images/engc4.jpeg";
import TopBanner from "../components/TopBanner.js";
import Countdown from "../components/Countdown.js";
import "./Mainpage.css";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaIdBadge,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaMailBulk
} from "react-icons/fa";
import { observer } from "mobx-react";
import store from "../stores/index.js";

const Mainpage = observer(
class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.gotoCombat = this.gotoCombat.bind(this);
    this.gotoLifo = this.gotoLifo.bind(this);
    this.gotoEngChallenge = this.gotoEngChallenge.bind(this);
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

  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div>
        <TopBanner src={mainBG} />
        {/* https://savvytime.com/converter/utc-to-myt/nov-2-2019/3am */}
        {/* https://www.w3schools.com/js/js_date_formats.asp */}
        <Countdown date={`${year}-11-02T00:00:00Z`} />
        <br />
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="8">
              <Row>
                <Col>
                  <div className="my-card">
                    <Row>
                      <Col md="4">
                        <img
                          className="d-block img-main"
                          src={robattle}
                          alt="Third slide"
                        />
                      </Col>
                      <Col>
                        <h3 className="editted-script">Robattle</h3>
                        <br />
                        <p className="editted-script-2">Unleash the beast</p>
                        <br />
                        <p>
                            Robot combat, a game where participants test their robot agility 
                            and durability to reach the objectives while withstanding the heavy blow of their opponent.
                            Does your robot satisfy that criteria? Show us what you and your robot(s) are capable off 
                            by winning the game. We await your accomplishments.
                        </p>
                        <Button variant="primary" onClick={this.gotoCombat}>More Informations...</Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="my-card">
                    <Row>
                      <Col md="4">
                        <img
                          className="d-block img-main"
                          src={robattle}
                          alt="Third slide"
                        />
                      </Col>
                      <Col>
                        <h3 className="editted-script">Line Following</h3>
                        <br />
                        <p className="editted-script-2">Innovating the future</p>
                        <br />
                        <p>
                          Line following robot, the first step towards autonomous car. 
                          A robot that follows the designated path to reach its objectives. 
                          Are you capable of making the fastest line follow robot? 
                          Prove your skill now! Participate and claim your title as the best. 
                          Challenge your knowledge in mechanical, programming and Critical Thinking skills. 
                          We await your achievements.
                        </p>
                        <Button variant="primary" onClick={this.gotoLifo}>More Informations...</Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="my-card">
                    <Row>
                      <Col md="4">
                      <img
                          className="d-block img-main"
                          src={engcPic}
                          alt="Third slide"
                        />
                      </Col>
                      <Col>
                        <h3 className="editted-script">Engineering Challenge</h3>
                        <br />
                        <p className="editted-script-2">Dream Big. Experience Bigger.</p>
                        <br />
                        <p>
                          Engineering Challenge is an innovation and creativity competition that is 
                          created to test the ability of participants to solve engineering related challenges. 
                          Test your limit as an engineer and improve yourself. Think outside the box?  
                          No! Think outside this world. Participate now and claim your position on the seat of GREATNESS. Surprise Us!
                        </p>
                        <Button variant="primary" onClick={this.gotoEngChallenge}>More Informations...</Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="4">
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
                    <Card.Header>Contact</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <p>
                          <b>Vice-Program Director</b>
                          <br />
                          <FaIdBadge /> Muhamad Azhar Ridhwan
                          <br />
                          <FaWhatsapp /> 011-611 40939
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p>
                          <b>Treasurer</b>
                          <br />
                          <FaIdBadge /> Qurratul Nadzirah
                          <br />
                          <FaWhatsapp /> 019-621 3791
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p>
                          <b>Registration Unit</b>
                          <br />
                          <FaIdBadge /> Nasrullah
                          <br />
                          <FaWhatsapp /> 019-904 5906
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p>
                          <b>Registration Unit</b>
                          <br />
                          <FaIdBadge /> Nasrullah
                          <br />
                          <FaWhatsapp /> 019-904 5906
                        </p>
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Button
                        variant="link"
                        href="https://www.facebook.com/robotiquesociety"
                      >
                        <FaFacebook /> Facebook
                      </Button>
                      <Button
                        variant="link"
                        href="https://twitter.com/RS_UniKLMFI"
                      >
                        <FaTwitter /> Twitter
                      </Button>
                      <Button
                        variant="link"
                        href="mailto:robotiquesociety@gmail.com"
                      >
                        <FaMailBulk /> Email
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />

        </Container>
      </div>
    );
  }
}
)

export default Mainpage