import React from 'react';
import './App.css';
import {Container, Navbar} from 'react-bootstrap';
import NavLink from 'react-bootstrap/NavLink';



function App() {
  return (
    <div> 
  <Navbar expand='sm' bg='light'>
    <Navbar.Brand href='Home'>LSGC</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <NavLink href=''>Home</NavLink>
      <NavLink href=''>Proyectos</NavLink>
      <NavLink href=''>Curriculum</NavLink>
      <NavLink href=''>Contacto</NavLink>




    </Navbar.Collapse>
  </Navbar>

    </div>
  );
}

export default App;
