import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/base/theme.scss";
import LayoutStyles from "../styles/components/layout.module.scss";

const Layout = props => (
  <div className={LayoutStyles.container}>
    <div className={LayoutStyles.content}>
      <Header />
      <Container className="my-5">{props.children}</Container>
    </div>
    <Footer />
  </div>
);

export default Layout;
