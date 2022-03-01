import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className="anchor" to="/">
                        THẾ GIỚI ĐIỆN TỬ
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link eventKey={4}>
                            <Link className="anchor" to="phone">
                                Điện thoại
                            </Link>
                        </Nav.Link>
                        <Nav.Link eventKey={3}>
                            <Link className="anchor" to="laptop">
                                Laptop
                            </Link>
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link eventKey={1}>
                            <Link className="anchor" to="/register">
                                Register
                            </Link>
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            <Link className="anchor" to="/login">
                                Log in
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
