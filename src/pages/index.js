import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Carousel from "react-bootstrap/Carousel";
// import main0 from "../images/main0.jpg";
// import main1 from "../images/main1.jpg";
import indexStyles from "../styles/components/index.module.scss";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TwitterTimeline from "../components/TwitterTimeline";
import Profile from "../components/Profile";
import Quote from "../components/Quote";

const indexPage = props => (
  <Layout>
    <Head title="Home" />
    <Row>
      <Col md={8} className={indexStyles.index}>
        <Carousel interval={4000} className="mb-5">
          <Carousel.Item>
            <Img
              fluid={props.data.main0.childImageSharp.fluid}
              alt="slide image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={props.data.main1.childImageSharp.fluid}
              alt="slide image"
            />
          </Carousel.Item>
        </Carousel>
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

export const query = graphql`
  query {
    main0: file(relativePath: { eq: "images/main0.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    main1: file(relativePath: { eq: "images/main1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
