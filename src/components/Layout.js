import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/base/theme.scss";

const Layout = props => (
  <React.Fragment>
    <Header />
    <Container className="my-5">{props.children}</Container>
    <Footer />
  </React.Fragment>
);

export default Layout;
