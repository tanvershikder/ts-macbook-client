import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {
        signOut(auth).then(() => {

        })
    }
    return (

        <nav className='fixed-top mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><span className='text-warning'>Ts</span><span className='text-success'>-</span><span className='text-primary'>MaCbOoK</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            {
                                user && <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
                            }
                            {
                                user && <Nav.Link as={Link} to="/manage">Manage Product</Nav.Link>
                            }

                            {
                                user && <Nav.Link as={Link} to="/myitems">My Products</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

                            {
                                user
                                    ?
                                    <Nav.Link as={Link} to="/login" onClick={handelSignOut}>
                                        signOut
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;