import React from "react";
import Carousel from "react-bootstrap/Carousel";
import engc1 from "../images/engc1.jpeg"
import engc2 from "../images/engc2.jpeg"
import engc3 from "../images/engc3.jpeg"
import engc4 from "../images/engc4.jpeg"
import engc5 from "../images/engc5.jpeg"
import engc6 from "../images/engc6.jpeg"
import engc7 from "../images/engc7.jpeg"
import './EngCPictures.css'

export default class EngCPictures extends React.Component {
  render() {
    return (
      <Carousel interval="3000">
        <Carousel.Item>
            <div className="carau-slide"><img className="img-fit" src={engc1} alt="First slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={engc2} alt="2nd slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={engc3} alt="3rd slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={engc4} alt="4th slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={engc5} alt="5th slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={engc6} alt="6th slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={engc7} alt="7th slide" /></div>
        </Carousel.Item>
      </Carousel>
    );
  }
}
