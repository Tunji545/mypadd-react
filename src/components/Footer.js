import React from 'react';
import { AppBar, Box, Container, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import {ReactComponent as Facebook} from "../images/facebook.svg";
import {ReactComponent as Twitter} from "../images/twitter.svg";
import {ReactComponent as Instagram} from "../images/instagram.svg";

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
    lineHeight: "80px",
    margin: "0px auto",
    padding: theme.spacing(0),
    borderTop: "10px solid #FDC10E",
    "& > .MuiToolbar-gutters": {
      padding: theme.spacing(0)
    },
    "& .MuiIconButton-root": {
      padding: theme.spacing(0)
    },
    "& > .MuiToolbar-root": {
      justifyContent: "space-between"
    },
    [theme.breakpoints.down('sm')]: {
      "& > .MuiToolbar-root": {
        flexDirection: "column"
      },
    },
    "& > .MuiToolbar-regular": {
      height: theme.spacing(10)
    },
  },
  footerText: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
    [theme.breakpoints.down('md')]: {
      "&  .MuiTypography-h6": {
        paddingTop: theme.spacing(5)
      },
    }, 
    "&:hover": {
      textDecorationLine: "underline",
      textDecorationColor: "blue",
      textDecorationThickness: "3px"
    }
  },
  flex: {
    display: "flex", 
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-between",
      "& .MuiIconButton-root": {
        marginLeft: theme.spacing(0),
      },
    },  
    "& .MuiIconButton-root": {
      marginLeft: theme.spacing(6),
    },
    [theme.breakpoints.down('md')]: {
      "&  .MuiTypography-h6": {
        marginLeft: theme.spacing(3.5),
      },
    },  
  }
}))
const Footer = () => {

  const classes = useStyles();
  return (
    <Box className={classes.background}>
      <Container maxWidth="lg">
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
      </Container>
    </Box>
  )
}

export default Footer
