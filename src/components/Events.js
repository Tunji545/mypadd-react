import React, { useState } from 'react'
import { Box, Container, Grid, IconButton, ImageListItemBar, ListSubheader, makeStyles, Typography } from '@material-ui/core';
import Button from './reusables/Button';
import EvBgImage1 from "../images/ev-bg-image1.svg";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { loopText, pastEventCards, upEvents } from '../utils/data';
import Card from './reusables/Card';


const useStyles = makeStyles(theme => ({
  bg1Image: {
    backgroundImage: `url(${EvBgImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: theme.spacing(30, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(18.75, 0, 4, 0)
    },
    margin: theme.spacing(0, "auto"),
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
  bg1: {
    fontFamily: "Montserrat, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: 600,
    lineHeight: "60px",
    letterSpacing: "0em",
    color: "#FDC10E",
    [theme.breakpoints.down('md')]: {
      fontSize: "2rem"
    },
  },
  par1: {
    fontSize: "1.25rem",
    fontWeight: 400,
    lineHeight: "30px",
    letterSpacing: "0em",
    color: "#FFF9E6",
    position: "relative",
    [theme.breakpoints.down('md')]: {
      fontSize: "1rem"
    },
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(29),
    background: "#000000",
    padding: theme.spacing(3.875, 5.375, 3.875, ),
    borderTop: "5px solid #FDC10E",
    borderRight: "5px solid #FDC10E",
  },
  box: {
    color: "#ffffff",
    paddingLeft: theme.spacing(23.375),
    paddingRight: theme.spacing(23.375),
    display: "flex",
    alignItems: "center",
    fontFamily: "Montserrat",
    fontWeight: 600,
    letterSpacing: "0em",
    // [theme.breakpoints.down('lg')]: {
    //   paddingLeft: 130,
    //   paddingRight: 130,
    // },
  },
  bold: {
    fontSize: "2.5rem",
    paddingBottom: 2,
    // [theme.breakpoints.down('lg')]: {
    //   fontSize: 35,
    // },
    // [theme.breakpoints.down('md')]: {
    //   fontSize: 30
    // },
  },
  light: {
    fontSize: "0.875rem",
  },
  dot: {
    fontSize: "2.5rem",
    lineHeight: "60px",
    letterSpacing: "0em",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5.125),
    position: "relative",
    bottom: 20,
    // [theme.breakpoints.down('lg')]: {
    //   paddingLeft: 35,
    //   paddingRight: 35,
    // },
    // [theme.breakpoints.down('md')]: {
    //   paddingLeft: 30,
    //   paddingRight: 30,
    // },
  },
  btn1: {
    fontSize: "1.5rem",
    fontWeight: 600,
    padding: "16px 32px",
    [theme.breakpoints.down('md')]: {
      fontSize: "1.25rem",
      padding: "10px 20px"
    },
  },
  btn2: {
    fontFamily: "Montserrat",
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: "30px",
    letterSpacing: "0em",
    color: "#504E48",
    padding: "16px 32px",
    [theme.breakpoints.down('md')]: {
      fontSize: "1rem",
      padding: "10px 20px"
    },
  },
  btn3: {
    margin: "0px auto",
    padding: "26px 0 50px 0",
    fontFamily: "Montserrat",
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
  heading1: {
    fontSize: "2.25rem",
    fontWeight: 600,
    lineHeight: "54px",
    letterSpacing: "0em",
    color: "#312D22"
 },
  par2: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    color: "#7C7666"
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  imageList: {
    height: 390
  },
  imageItem: {
    flexGrow: 1
  },
  imageList2: {
    "& .MuiIconButton-root": {
      padding: 0
    }
  },
  row1: {
    display: "flex",
    alignItems: "flex-start",
    padding: 10
  },
  flex3: {
    display: "flex",
    gap: 24,
    [theme.breakpoints.down('md')]: {
      "&": {
        flexWrap: "wrap",
      }
    }
  },
   eventImg1: {
    height: theme.spacing(20),
  },
}))

const Events = () => {

  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  window.onresize = window.onload = function () {
    setCurrentWidth(this.innerWidth);
  };
  
  const getCurrentSize = () => {
    switch (Boolean(currentWidth)) {
      case currentWidth >= 1280:
      return 3;
      case currentWidth >= 960 && currentWidth < 1280:
      return 4;
      case currentWidth >= 600 && currentWidth < 960:
      return 6;
      case currentWidth >= 500:
      return 12;
      default:
      return 3;
    }
  };
  
  console.log('help', getCurrentSize());
  const classes = useStyles();

  return (
    <>
      <Box className={classes.bg1Image}>
        <Container maxWidth="lg">
          <Box className={classes.bg1}>
            <Grid container>
              <Grid item xs="12" sm="6">
                <Typography variant="h1" gutterBottom className={classes.heading}>Recognition Week.</Typography>
                <Typography gutterBottom className={classes.par1}>
                  In support of the International Decade for People of African Descent, proclaimed by United Nation's General Assembly resolution 68/237 and to be observed from 2015 to 2024,
                </Typography>
              </Grid>
              <Grid item xs='12'>
                <Box className={classes.flexBox}>
                  <Button variant="contained" color="primary" size="medium" classes={{ root: classes.btn1 }}>
                    AUG <br /> 14TH
                  </Button>
                  <Box className={classes.box}>
                    <Box className={classes.bold}>25 <br />
                      <Box component="span" className={classes.light}>Days</Box>
                    </Box>
                      <Box className={classes.dot}>:</Box> 
                    <Box className={classes.bold}>16 <br />
                      <Box component="span" className={classes.light}>Hours</Box>
                    </Box>
                      <Box className={classes.dot}>:</Box> 
                    <Box className={classes.bold}>47 <br />
                      <Box component="span" className={classes.light}>Mins</Box>
                    </Box>
                      <Box className={classes.dot}>:</Box> 
                    <Box className={classes.bold}>38 <br />
                      <Box component="span" className={classes.light}>Secs</Box> 
                    </Box>
                  </Box>
                  <Button variant="contained" color="primary" size="medium" classes={{ root: classes.btn2 }}>
                    Learn More
                  </Button>
                </Box>
              </Grid>              
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box className={classes.btn3}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs="12" sm="16">
              <Typography variant="h2" gutterBottom className={classes.heading1}>
                Upcoming Events
              </Typography>
              <Typography gutterBottom className={classes.par2}>
                We make your events smart & impactful by personalised event management services
              </Typography>
            </Grid>
            <Grid items xs="12">
                <Box className={classes.root}>
                  <ImageList rowHeight="auto" gap={24} cols={12}>
                      {upEvents.map((event, index) => (
                        <ImageListItem key={index} cols={getCurrentSize()}>
                          <img src={event.img} alt="event.subTitle" />
                          <ImageListItemBar
                            title={event.title}
                            subtitle={event.subTitle}
                          />
                        </ImageListItem>
                      ))};
                      {loopText.map(text => (
                        <ImageListItem cols={3} className={classes.imageList2} style={{height: "auto",padding: 0}}>  
                          <ListSubheader component="div">
                            {text.imageText}
                          </ListSubheader>
                          <Box className={classes.row1}>                       
                            <IconButton color="inherit">
                              {<text.img />}
                            </IconButton>
                            <ListSubheader component="div">
                              {text.imageText1}
                            </ListSubheader>
                          </Box>
                        </ImageListItem>
                      ))}
                  </ImageList>
                </Box>
            </Grid>
            <Grid item xs="12" sm="16">
              <Typography variant="h2" gutterBottom className={classes.heading1}>
                Past Events
              </Typography>
            </Grid>
            <Grid item xs="12">
              <Box className={classes.flex3}>
                {pastEventCards.map(pastEvent => (
                  <Card key={pastEvent.id} className={classes.eventImg1} renderBg={ pastEvent.img } heading={pastEvent.heading} renderCalIcon={() => <pastEvent.icon1 />} calText={pastEvent.text1} renderClockIcon={() => <pastEvent.icon2 />} clockText={pastEvent.text2} renderLocationIcon={() => <pastEvent.icon3 />} locationText={pastEvent.text3} /> 
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Events
