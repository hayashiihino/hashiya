import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function randomQuote() {
  let randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);
  // let quote = `${__dirname}images/quote/q${randomNum}.jpg`;
  return <img src="../images/quote/q0.jpg" alt="quote" />;
}

const Quote = () => {
  const TodaysQuote = randomQuote();
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
      image: file(relativePath: { eq: "quote/q0.jpg" }) {
        id
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <div>
      <h3>今日の名言</h3>
      <Img fluid={data.image.childImageSharp.fluid} alt="today's quote" />
      {data.images.nodes.map(image => (
        <Img key={image.id} fluid={image.childImageSharp.fluid} />
      ))}
    </div>
  );
};

export default Quote;
