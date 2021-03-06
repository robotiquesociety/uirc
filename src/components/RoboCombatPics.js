import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../assets/images/robachamp.jpg"
import pic2 from "../assets/images/roba2nd.jpg"
import pic3 from "../assets/images/roba3rd.jpg"
import pic4 from "../assets/images/roba4th.jpg"
import pic5 from "../assets/images/robadesign.jpg"
import pic6 from "../assets/images/robatech.jpg"
import pic7 from "../assets/images/roba7.jpg"
import pic8 from "../assets/images/roba8.jpg"
import pic9 from "../assets/images/roba9.jpg"
import pic10 from "../assets/images/roba10.jpg"
import './EngCPictures.css'

export default class RoboCombatPics extends React.Component {
  render() {
    return (
      <Carousel interval="3000">
        <Carousel.Item>
            <div className="carau-slide"><img className="img-fit" src={pic1} alt="First slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={pic2} alt="2nd slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={pic3} alt="3rd slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={pic4} alt="4th slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={pic5} alt="5th slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={pic6} alt="6th slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={pic7} alt="7th slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={pic8} alt="7th slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={pic9} alt="7th slide" /></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="carau-slide"><img className="img-fit" src={pic10} alt="7th slide" /></div>
        </Carousel.Item>
      </Carousel>
    );
  }
}
