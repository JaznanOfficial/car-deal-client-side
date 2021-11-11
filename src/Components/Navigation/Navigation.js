import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import logo from './logo.jpg'
import './Navigation.css'

const Navigation = () => {
    const { user, logout } = useAuth()
    
    const logOut = () => {
        logout()
        
}
    
    return (
        <div>
            <Navbar variation='light' expand="lg" className='navbar-custom'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" width='80px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center justify-content-center">
                            <Link to="/home" className='navigation-link'>Home</Link>
                            <Link to="/allCars" className='navigation-link'>Explore all cars</Link>
                            
                            {user.email && 
                                <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                <Link to="/my-order" className="dropdown-item ">
                                    My Orders
                                </Link>
                                <Link to="/review" className="dropdown-item ">
                                    Review
                                </Link>
                                <Link to="/payment" className="dropdown-item ">
                                    Payment
                                </Link>
                            </NavDropdown>
                            }
                            

                            {user.email && 
                                <NavDropdown title="Admin Panel" id="basic-nav-dropdown">
                                <Link to="/manage-orders" className="dropdown-item ">
                                    Manage All Orders
                                </Link>
                                <Link to="/add-products" className="dropdown-item ">
                                    Add A Product
                                </Link>
                                <Link to="/make-admin" className="dropdown-item ">
                                    Make Admin
                                </Link>
                            </NavDropdown>
                            }
                            {
                                user.email ?
                                <Button variant="outline-light" onClick={logOut}>Log Out</Button>
                                :
                                <Link to='/login'><Button variant="outline-light">Log In</Button></Link>
                                
                            } &nbsp; &nbsp;
                            {
                                user.email && <h4 className='text-light'>{user.email}</h4>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
