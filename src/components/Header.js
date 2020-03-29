import React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import headerStyles from "../styles/components/header.module.scss";

export default function Header() {
  return (
    <Navbar expand="md" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand className={headerStyles.brand}>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/blog" className="nav-link" activeClassName="active">
                ブログ
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/illustration"
                className="nav-link"
                activeClassName="active"
              >
                イラスト
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link" activeClassName="active">
                お問い合わせ
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
