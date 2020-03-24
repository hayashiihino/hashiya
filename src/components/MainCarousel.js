import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const MainCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "main" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  return (
    <Carousel interval={4000} className="mb-5">
      {data.images.nodes.map(image => (
        <Carousel.Item>
          <Img
            fluid={image.childImageSharp.fluid}
            alt="slide image"
            key={image.id}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
