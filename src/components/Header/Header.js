import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        // <nav className='header'>
        //     <div className='name'>
        //         <p>Virtual Quiz</p>
        //     </div>   
        
        //     <div>
        //         <Link to="/">Topics</Link>
        //         <Link to="/statistics">Statistics</Link>
        //         <Link to="/blog">Blog</Link>
        //     </div>
        // </nav>

    <Navbar collapseOnSelect expand="lg" className='header'>
      <Container>
        <Navbar to="/home" className='name'>Virtual Quiz</Navbar>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">Topic</Link>
            <Link to="/statistics">Statistics</Link>
            <Nav.Link to="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    );
};

export default Header;