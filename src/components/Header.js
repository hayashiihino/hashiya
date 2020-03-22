import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
// import headerStyles from "../styles/components/header.module.scss"

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>ホーム</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="navbarResponsive" />
    <Navbar.Collapse id="navbarResponsive" variant="light">
      <Nav as="ul" className="ml-auto">
        <Link to="/blog" className="nav-link" activeClassName="active">
          <Nav.Item>ブログ</Nav.Item>
        </Link>
        <Link to="/contact" activeClassName="active" className="nav-link">
          <Nav.Item>お問い合わせ</Nav.Item>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
