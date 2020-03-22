import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = props => (
  <div>
    <Header />
    <div>
      <div>{props.children}</div>
    </div>
    <Footer />
  </div>
)

export default Layout
