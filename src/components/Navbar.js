import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import {ReactComponent as Logo} from "../images/mipad-logo.svg";
import {ReactComponent as Angle} from "../images/Vector.svg";
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: "#161100"
  },
  root: {
    backgroundColor: "#161100",
    height: 80,
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
  },
  flex: {
    display: "flex",
    "& .MuiTypography-h6": {
      marginRight: 48,
      fontFamily: "Montserrat, sans-serif",
      fontSize: 16,
      "&:hover": {
        textDecorationLine: "underline",
        textDecorationColor: "blue",
        textDecorationThickness: "3px"
      }
    },
    "& .MuiSvgIcon-root": {
      display: "none"
    },
    [theme.breakpoints.down('md')]: {
      "&  .MuiTypography-h6": {
        marginRight: 28,
      },
    },
    [theme.breakpoints.down('sm')]: {
      "& .MuiSvgIcon-root": {
        display: "inline-block"
      },
      "&  .MuiTypography-h6": {
        display: "none",
      },
    },
  }
}))

const navColor = {
  color: "#fff",
  textDecorationLine: "none",
  textDecorationColor: "blue"
}
const Navbar = () => {

  const classes = useStyles();
  return (
    <div className={classes.background}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton>
            <Link to="/"><Logo fontSize="large" /></Link>
          </IconButton>
          <span className={classes.flex}>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              <Link style={navColor} to="/events">Events</Link>
            </Typography>
            <Typography variant="h6">
              <Link style={navColor} to="/honorees">Honorees <span><Angle /></span></Link> 
            </Typography>
            <Typography variant="h6">
              <Link style={navColor} to="/shops">Shops  <span><Angle /></span></Link> 
            </Typography>
            <Typography variant="h6">
              <Link style={navColor} to="/blog">Blog</Link>
            </Typography>
            <Typography variant="h6">
              <Link style={navColor} to="/contact">Contact</Link>
            </Typography>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
