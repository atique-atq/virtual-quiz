import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
    <Navbar collapseOnSelect expand="lg" className='header'>
      <Container>
      <Link to="/"><Navbar className='name ms-5'>Virtual Quiz</Navbar></Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-5">
            <Link to="/">Topic</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    );
};

export default Header;