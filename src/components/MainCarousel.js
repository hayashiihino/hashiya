import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import classes from "../styles/components/main-carousel.module.scss";

const MainCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "main" } }) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <Carousel interval={4000}>
        {data.images.nodes.map(image => (
          <Carousel.Item key={image.id} className={classes.carousel}>
            <Img fluid={image.childImageSharp.fluid} alt="slide image" />
            <Carousel.Caption className={classes.title}>
              <h4>漫画、描きます</h4>
              <h4>絵、書きます</h4>
              <h4>似顔絵も書きます</h4>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
