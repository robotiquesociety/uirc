import React from 'react';
import logo from './logo.svg';
import mainBG from './images/mainBG.jpg';
import Button from 'react-bootstrap/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-topbar">
        <div className="topbar-logo"></div>
        <div className="topbar-links">
          <Button variant="outline-primary" className="links-div">Primary</Button>
          <Button className="links-div">ROBO COMBAT</Button>
          <div className="links-div">LINE FOLLOW</div>
          <div className="links-div">ENGINEERING CHALLENGE</div>
          <div className="links-div">ABOUT US</div>
          <div className="links-div">CONTACT US</div>
        </div>
      </div>
      <header className="App-header">
        <div className="App-poster">
          <img src={mainBG} className="poster-img" alt="poster" />
          <div className="poster-gif">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className="App-info">
          <div className="info-text"></div>
          <div className="info-container">
            <div className="info-one"></div>
            <div className="info-two"></div>
            <div className="info-three"></div>
          </div>
        </div>


        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
