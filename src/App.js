import React from 'react';
import './App.css';
import { Navbar, Container, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NavLink from 'react-bootstrap/NavLink';
import Home from "./components/Home";
import Curriculum from "./components/Curriculum";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar expand='sm' bg='light' fixed='top'>
        <Navbar.Brand href='/'>&lt;LSGC&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <NavLink href='/' >Home</NavLink>
          <NavLink href='Curriculum'>Curriculum</NavLink>
          <NavLink href='Projects'>Proyectos</NavLink>
          <NavLink href='Contact'>Contacto</NavLink>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Curriculum" component={Curriculum} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </Router>
      </Container>



    </div >
);

}

export default App;
