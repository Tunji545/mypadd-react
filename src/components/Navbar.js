import React from 'react';
import { AppBar, Box, Container, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import {ReactComponent as Logo} from "../images/mipad-logo.svg";
import {ReactComponent as Angle} from "../images/Vector.svg";
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: "#161100",
    "& .MuiContainer-root": {
      paddingLeft: theme.spacing(13.5),
      paddingRight: theme.spacing(13.5)
    },
    [theme.breakpoints.down('md')]: {
      "& .MuiContainer-root": {
        paddingLeft: theme.spacing(8.5),
        paddingRight: theme.spacing(8.5)
      },
    },
  },
  root: {
    backgroundColor: "#161100",
    height: theme.spacing(10),
    margin: "0px auto",
    padding: theme.spacing(0),
    "& > .MuiToolbar-gutters": {
      padding: theme.spacing(0)
    },
    "& .MuiIconButton-root": {
      padding: theme.spacing(0)
    },
    "& > .MuiToolbar-root": {
      justifyContent: "space-between"
    },
  },
  flex: {
    display: "flex",
    "& .MuiTypography-h6": {
      marginLeft: theme.spacing(6),
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1rem",
      "&:hover": {
        textDecorationLine: "underline",
        textDecorationColor: "blue",
        textDecorationThickness: "3px"
      }
    },
    [theme.breakpoints.down('md')]: {
      "&  .MuiTypography-h6": {
        marginLeft: theme.spacing(3.5),
      },
    },
    "& .MuiSvgIcon-root": {
      display: "none"
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
    <Box className={classes.background}>
      <Container maxWidth="lg">
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton>
              <Link to="/"><Logo size="large" /></Link>
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
      </Container>
    </Box>
  )
}

export default Navbar
