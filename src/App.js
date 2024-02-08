import "./App.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Services from "./components/services/Services";
import Skill from "./components/skills/Skill";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Protfolio/Portfolio";
import Foter from "./components/Footer/Foter";
import Scrool from "./components/Scrool/Scrool";
import { useState } from "react";



function App() {
 const [activenav,setActiveNav]=useState("#home")
  return (
   <div className="pou">
    <Navbar expand="lg" className="bg-* navbar" fixed="top">
      < Container className="coke" >
        <Navbar.Brand className="a" style={{fontSize:"36px",fontWeight:"600",color:"red"}} href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link  href="#home" onClick={()=>{setActiveNav("#home")}} className={activenav === "#home" ? "nav-link active":"nav-link"}>Home <span></span></Nav.Link>
            <Nav.Link style={{i:1}} href="#about" onClick={()=>{setActiveNav("#about")}} className={activenav === "#about" ? "nav-link active":"nav-link"}>About <span></span></Nav.Link>
            <Nav.Link style={{i:1}} href="#service" onClick={()=>{setActiveNav("#service")}} className={activenav === "#service" ? "nav-link active":"nav-link"}>Service <span></span></Nav.Link>
            <Nav.Link style={{i:2}} href="#skills" onClick={()=>{setActiveNav("#skills")}} className={activenav === "#slills" ? "nav-link active":"nav-link"}>Skills <span></span></Nav.Link>
            <Nav.Link  style={{i:3}}href="#portfolio" onClick={()=>{setActiveNav("#portfolio")}} className={activenav === "#portfolio" ? "nav-link active":"nav-link"}>Portfolio <span></span></Nav.Link>
            <Nav.Link  style={{i:4}} href="#port" onClick={()=>{setActiveNav("#contacts")}} className={activenav === "#port" ? "nav-link active":"nav-link"}>Contact <span></span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Home/>
    <About/>
    <Services/>
    <Skill/>
    <Portfolio />
    <Contact/>
    <Foter />
    <Scrool/>




   </div>
  );
}

export default App;
