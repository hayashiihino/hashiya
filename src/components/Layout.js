import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css/normalize.css"
import layoutStyles from "../styles/components/layout.module.scss"

const Layout = props => (
  <div>
    <Header />
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>{props.children}</div>
    </div>
    <Footer />
  </div>
)

export default Layout
