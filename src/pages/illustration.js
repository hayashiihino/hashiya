import React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import classes from "../styles/pages/illustration.module.scss";

const Illustration = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulIllustration {
        edges {
          node {
            title
            id
            illustration {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  const Illustrationlist = () => {
    const source = data.allContentfulIllustration.edges;
    return source.map(image => (
      <Col md={3} key={image.node.id}>
        <img src={image.node.illustration.fluid.src} alt={image.node.title} />
        <p>{image.node.title}</p>
      </Col>
    ));
  };

  return (
    <Layout>
      <Head title="イラスト" />
      <h2>イラスト</h2>
      <Row>{Illustrationlist()}</Row>
    </Layout>
  );
};

export default Illustration;
