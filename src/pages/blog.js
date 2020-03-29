import React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import classes from "../styles/pages/blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            thumbnail {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="ブログ" />
      <h1>ブログページ</h1>
      <ol className={classes.posts}>
        {data.allContentfulBlog.edges.map(edge => {
          return (
            <li key={edge.node.id} className={classes.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <img
                  src={edge.node.thumbnail.fluid.src}
                  alt={edge.node.title}
                  className="pr-3"
                />
                <div className={classes.content}>
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.publishedDate}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
