import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  title: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const routes = ["/blog", "/contact"];
  const handleChange = (e, value) => {
    console.log(e.target);
    setValue(value);
  };
  useEffect(() => {
    const indexRoute =
      routes.includes(window.location.pathname) &&
      routes.indexOf(window.location.pathname);
    setValue(indexRoute);
  }, [routes, value]);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <ToolBar>
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            onClick={() => setValue(undefined)}
          >
            HOME
          </Typography>
          <Tabs
            className={classes.tabContainer}
            value={value}
            indicatorColor="secondary"
            onChange={handleChange}
          >
            <Tab label="ブログ" component={Link} to="/blog" />
            <Tab label="お問い合わせ" component={Link} to="/contact" />
          </Tabs>
        </ToolBar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
