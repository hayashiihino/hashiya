import React from "react";
import FooterStyle from "../styles/components/footer.module.scss";
import Container from "react-bootstrap/Container";

const Footer = () => (
  <Container className={FooterStyle.footer}>
    <p>©2020 林　翔太</p>
  </Container>
);

export default Footer;
