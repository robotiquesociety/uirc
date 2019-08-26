import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Accomodation.css";
import Gmap from "../components/Gmap.js";
import PDFList from "../assests/list_of_hotels_and_homestay_3.pdf"
import mainBG from "../images/mainBG.jpg";
import TopBanner from "../components/TopBanner.js";

export default class Accomodation extends React.Component {
  render() {
    return (
      <div><TopBanner src={mainBG} />
      <br />
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="8">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4 className="about-text-center">LIST OF HOMESTAY AROUND BANGI</h4>
                  </Card.Title>
                  <Card.Text>
                    <table>
                      <tr>
                        <td rowspan="4">1</td>
                        <th>Name</th>
                        <td>OMAIRA 1 HOMESTAY</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                          No. 42, Jalan 3/10, Seksyen 3, Bandar Baru Bangi,
                          Selangor.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="https://sites.google.com/site/omairahomestaybangi/">https://sites.google.com/site/omairahomestaybangi/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>019-3875584</td>
                      </tr>
                      <tr>
                        <td rowspan="4">2</td>
                        <th>Name</th>
                        <td>OMAIRA 2 HOMESTAY</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        No 26, Jln 8/31A, Seksyen 8, Bandar Baru Bangi, Selangor.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="https://sites.google.com/site/omairahomestaybangi/omaira-2">https://sites.google.com/site/omairahomestaybangi/omaira-2</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>019-3875584</td>
                      </tr>
                      <tr>
                        <td rowspan="4">3</td>
                        <th>Name</th>
                        <td>Homestay Moden Seri Bangi</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        Taman Seri Bangi seksyen 8 43650, Bandar Baru Bangi Selangor.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        -
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>017-3668971</td>
                      </tr>
                      <tr>
                        <td rowspan="4">5</td>
                        <th>Name</th>
                        <td>Nanas Homestay Bandar Baru Bangi</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        Apartment Melor Seksyen 5, 43650, Bandar Baru Bangi, Selangor.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        -
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>019-2540468</td>
                      </tr>
                      <tr>
                        <td rowspan="4">5</td>
                        <th>Name</th>
                        <td>Qaireen Homestay</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        Taman Seri Bangi, Seksyen 8, 43650, Bandar Baru Bangi Selangor.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        -
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>017-366897</td>
                      </tr>
                      <tr>
                        <td rowspan="4">6</td>
                        <th>Name</th>
                        <td>Aneas Budget Homestay</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        Seksyen 16, Fasa 1 Bandar Baru Bangi, 43650 Kajang Selangor.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        -
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>019-3381642</td>
                      </tr>
                      <tr>
                        <td rowspan="4">7</td>
                        <th>Name</th>
                        <td>Homestay Sungai Merab</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        Lot 3105 Kampung Sungai Merab Luar, 43650, Bandar Baru Bangi Selangor.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        -
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>016-2223425</td>
                      </tr>
                    </table>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br/>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4 className="about-text-center">LIST OF HOTEL IN AROUND BANGI AND KAJANG</h4>
                  </Card.Title>
                  <Card.Text>
                    <table>
                      <tr>
                        <td rowspan="5">1</td>
                        <th>Name</th>
                        <td>City Boutique Bangi</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        No 13, Jalan 15/1B, Seksyen 15, 43650 Bangi, Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://www.cityboutiquehotel.com.my/bangi/">http://www.cityboutiquehotel.com.my/bangi/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>+603 8925 9226</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 142 - RM 228 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">2</td>
                        <th>Name</th>
                        <td>MyHotel@Seri Putra</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        No 1-2, Jalan Seri Putra 1/4, Bandar Seri Putra, 43000 Kajang, Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://seriputra.myhotels.com.my/">http://seriputra.myhotels.com.my/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>+603 8920 0800</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 88 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">3</td>
                        <th>Name</th>
                        <td>Hotel Bangi-Putrajaya</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        Off Persiaran Bandar Bandar Baru Bangi Selangor 43650 Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://www.hotelbangi-putrajaya.com/">http://www.hotelbangi-putrajaya.com/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>+603 8210 2222</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 324 - RM 460 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">4</td>
                        <th>Name</th>
                        <td>9 Square Hotel Bangi</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        C-01-G, Plaza Paragon Point, Jalan Medan Pusat Bandar 5, Pusat Bandar Baru Bangi, 43650 Kampong Sungai Ramal Dalam, Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://www.9squarehotel.com/">http://www.9squarehotel.com/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>03-61422822</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 79 - RM 179 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">5</td>
                        <th>Name</th>
                        <td>101 Bangi Hotel</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        21 &amp; 23, Jalan Medan Pusat 2D, Persiaran Bangi, Bandar Baru Bangi, Selangor, 43650, Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://www.101hotel.com.my/">http://www.101hotel.com.my/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>+603 8927 4988</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 85 - RM 138 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">6</td>
                        <th>Name</th>
                        <td>Eco Putra Kajang</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        2-1, JalanPutra 5, Taman Putra Kajang, 43000 Kajang, Selangor Darul Ehsan.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://www.ecohotel.com.my/">http://www.ecohotel.com.my/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>+603-8740 3756</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 83 - RM 146 per night.</td>
                      </tr>
                      <tr>
                        <td rowspan="5">7</td>
                        <th>Name</th>
                        <td>Marvelot</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        No. 7, Jalan Hentian 3, Pusat Hentian Kajang, Jalan Reko, Selangor Darul Ehsan.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://www.marvelothotel.com/">http://www.marvelothotel.com/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>03-87407277</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 78 - RM 108 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">8</td>
                        <th>Name</th>
                        <td>Prescott Hotel Kajang</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        Wisma Metro Kajang, Jalan Semenyih, 43000 Kajang, Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://prescotthotels.asia/Kajang/">http://prescotthotels.asia/Kajang/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>(60)3 8737 5555</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 162 - RM 226 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">9</td>
                        <th>Name</th>
                        <td>Ukm Puri Pujangga</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        Universiti Kebangsaan Malaysia, 43600 Bangi, Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://www.puripujangga.com.my/">http://www.puripujangga.com.my/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>03 89222891</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 244 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">10</td>
                        <th>Name</th>
                        <td>M Garden</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        1-1, Jalan Reko Sentral 2, Reko Sentral, 43000 Kajang, Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        -
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 58 - RM 138 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">11</td>
                        <th>Name</th>
                        <td>Best View (Bangi)</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        No. A-9 (Whole Block), A-10-1, A-10-2, A-10-3 Jalan Medan Pusat Bandar 5,Bandar Baru Bangi, Selangor, 43650, Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        -
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>1 800 814648</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 79 - RM 129 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">12</td>
                        <th>Name</th>
                        <td>RHR At Uniten</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        Km 7, Jalan IKRAM-UNITEN, 43009 Putrajaya, Malaysia.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://www.rhrhotel.com/">http://www.rhrhotel.com/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>2088 8922 603+</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 155 - RM 270 per night</td>
                      </tr>
                      <tr>
                        <td rowspan="5">13</td>
                        <th>Name</th>
                        <td>Bangi Gateway Hotel</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                        B-2-G, BangiGateway Shopping Complex, Persiaran Pekeliling, Seksyen 15, Bandar Baru Bangi, Putrajaya, Kuala Lumpur, Malaysia 43650.
                        </td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>
                        <Button variant="link" href="http://bangigatewayhotel.com/">http://bangigatewayhotel.com/</Button>
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>0700 2200</td>
                      </tr>
                      <tr>
                        <th>Price Range</th>
                        <td>RM 90 - RM 200</td>
                      </tr>
                    </table>
                  </Card.Text>
                </Card.Body>
              </Card>
            
            </Col>
            <Col md="4">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <p>View the list of hotels and homestays in pdf:</p>
                        <Button
                        variant="primary"
                        href={PDFList}
                      >
                        View
                      </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                <Card.Body>
                  <Card.Title>
                    <h3 className="about-text-center">Our Location</h3>
                  </Card.Title>
                  <Card.Text>
                  <Gmap />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}
