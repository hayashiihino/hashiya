import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Quote = () => {
  const data = useStaticQuery(graphql`
    query images {
      images: allFile(filter: { relativeDirectory: { eq: "quote" } }) {
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

  const randomImage = () => {
    const images = data.images.nodes;
    let randomNum = Math.floor(Math.random() * images.length);
    const image = images[randomNum].childImageSharp.fluid;
    return <Img key={image.id} fluid={image} />;
  };

  console.log(randomImage());

  return (
    <React.Fragment>
      <h3>今日の名言</h3>
      {randomImage()}
    </React.Fragment>
  );
};

export default Quote;
