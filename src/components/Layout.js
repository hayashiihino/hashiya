import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import theme from "./Theme"
import { ThemeProvider } from "@material-ui/core/styles"

const Layout = props => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Header />
      <div>
        <div>{props.children}</div>
      </div>
      <Footer />
    </ThemeProvider>
  </React.Fragment>
)

export default Layout
