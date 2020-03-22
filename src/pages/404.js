import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Head title="404" />
    <h3>404!! お探しのページはみつかりません。</h3>
    <p>
      <Link to="/">トップページにもどる</Link>
    </p>
  </Layout>
)

export default NotFoundPage
