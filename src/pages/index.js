import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainCarousel from "../components/MainCarousel";
import Profile from "../components/Profile";
import Quote from "../components/Quote";
import TwitterTimeline from "../components/TwitterTimeline";
import indexStyles from "../styles/components/index.module.scss";

const indexPage = () => (
  <Layout>
    <Head title="Home" />
    <Row>
      <Col md={8} className={indexStyles.index}>
        <MainCarousel />
        <Profile />
        <Quote />
      </Col>
      <Col md={4}>
        <TwitterTimeline />
      </Col>
    </Row>
  </Layout>
);

export default indexPage;
