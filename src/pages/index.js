import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Carousel from "react-bootstrap/Carousel";
// import main0 from "../images/main0.jpg";
// import main1 from "../images/main1.jpg";
import indexStyles from "../styles/components/index.module.scss";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const indexPage = props => (
  <div className={indexStyles.index}>
    <Layout>
      <Head title="Home" />
      <Carousel>
        <Carousel.Item>
          <Img
            fluid={props.data.main0.childImageSharp.fluid}
            alt="slide image"
          />
          {/* <img src={main0} alt="slide image" /> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <img src={main1} alt="slide image" /> */}
          <Img
            fluid={props.data.main1.childImageSharp.fluid}
            alt="slide image"
          />
        </Carousel.Item>
      </Carousel>
    </Layout>
  </div>
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
