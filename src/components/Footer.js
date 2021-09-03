import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import {ReactComponent as Facebook} from "../images/facebook.svg";
import {ReactComponent as Twitter} from "../images/twitter.svg";
import {ReactComponent as Instagram} from "../images/instagram.svg";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: "#161100"
  },
  root: {
    backgroundColor: "#161100",
    height: 80,
    lineHeight: "80px",
    maxWidth: "calc(1224px + 216px)",
    margin: "0px auto",
    paddingLeft: 108,
    paddingRight: 108,
    "& > .MuiToolbar-gutters": {
      padding: 0
    },
    "& .MuiIconButton-root": {
      padding: 0
    },
    "& > .MuiToolbar-root": {
      justifyContent: "space-between"
    },
    "& > .MuiToolbar-regular": {
      height: 80
    },
  },
  footerText: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 16,
    "&:hover": {
      textDecorationLine: "underline",
      textDecorationColor: "blue",
      textDecorationThickness: "3px"
    }
  },
  flex: {
    display: "flex", 
    "& .MuiIconButton-root": {
      marginRight: 48,
    },   
  }
}))
const Footer = () => {

  const classes = useStyles();
  return (
    <div className={classes.background}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.footerText}>Copyright t2021 MIPAD ORG | All Rights Reserved</Typography>
          <span className={classes.flex}>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Footer
