import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Header = () => {
   

    

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Code Planner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"></Nav.Link>
                    
                        
                    </Nav>
                    <Nav>
                    <Link className='me-5 text-decoration-none text-light' to='/courses'>Courses</Link>   
                    <Link className='me-5 text-decoration-none text-light' to='/login'>Login</Link>
                   <Link  className='me-5 text-decoration-none text-light' to='/register'>Register</Link>    
                   <Link  className='me-5 text-decoration-none text-light' to='/faq'>FAQ</Link>    
                   <Link  className='me-5 text-decoration-none text-light' to='/blog'>Blog</Link>    
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;