import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { FaCuttlefish, FaUser } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';


const Header = () => {

    const {user ,logOut} = useContext(AuthContext);
    console.log(user)
    const handleLogOut = () =>{
        logOut()
        .then( () =>{})
        .catch(error=>console.error(error))
    }
   

    

    return (
        <Navbar collapseOnSelect className='mb-4 sticky-top' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="text-danger"><FaCuttlefish className='mb-1'></FaCuttlefish> Code-Planner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                        <Nav.Link href="#features " className='text-light'>
                            {user?.photoURL ?
                            <Image style ={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
                           : <FaUser></FaUser>

                            }


                        
                        
                        </Nav.Link>
                    
                        
                    </Nav>
                    <Nav>
                    <Link className='me-5 mt-2 text-decoration-none text-light' to='/coursePage'>Courses</Link>  

                           <Nav.Link href="#features " className='text-light'>
                            {
                                user?.uid ? 
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button variant='secondary' onClick={handleLogOut}>Log Out</Button>   

                                </>
                               
                                :
                                <>
                               <Link className='me-5 text-decoration-none text-light' to='/login'>Login</Link>
                   <Link  className='me-5 text-decoration-none text-light' to='/register'>Register</Link>  
                                </>
                            }
                            
                            
                            
                            </Nav.Link> 
                     
                   <Link  className='me-5 mt-2 text-decoration-none text-light' to='/faq'>FAQ</Link>    
                   <Link  className='me-5 mt-2 text-decoration-none text-light' to='/blog'>Blog</Link>    
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;