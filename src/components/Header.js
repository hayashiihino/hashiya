import React from "react"
// import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  tabContainer: {
    marginLeft: "auto",
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="fixed">
      <ToolBar>
        <Typography>HOME</Typography>
        <Tabs className={classes.tabContainer}>
          <Tab label="ブログ" />
          <Tab label="お問い合わせ" />
        </Tabs>
      </ToolBar>
    </AppBar>
  )
}
