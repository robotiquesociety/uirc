import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./TopBanner.css";

export default class TopBanner extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card className="bg-dark text-white justify-overlay">
              <Card.Img src={this.props.src} alt="Card image" className="poster-img" />
              <div className="img-overlay">
                <Card.Title className="overlay-title">
                  {this.props.title}
                </Card.Title>
                <Card.Text className="overlay-text">{this.props.text}</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
