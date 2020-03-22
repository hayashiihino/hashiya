import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="ブログ" />
      <h1>ブログページ</h1>
      <ol>
        {data.allContentfulBlog.edges.map(edge => {
          return (
            <li key={edge.node.title}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
