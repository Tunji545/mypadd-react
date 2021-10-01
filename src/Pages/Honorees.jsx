import React, {useState} from 'react';
import { Box, Container, Grid, IconButton, ImageList, ImageListItem, ListSubheader, makeStyles, Typography } from '@material-ui/core';
import honoreesBg1 from "../images/honoreesBg.svg";
import Picture1 from "../images/picture1.svg";
import { celebrities, HonoreesTexts, loopText2 } from '../utils/data';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  bgImage1: {
    backgroundImage: `url(${honoreesBg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0px auto",
    height: theme.spacing(41.375),
    color: "#ffffff",
    "& .MuiContainer-root": {
      paddingLeft: theme.spacing(13.5),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(8.5)
      },
    },
  },
  heading: {
    fontFamily: "Montserrat",
    fontSize: "2.25rem",
    fontWeight: 600,
    lineHeight: "54px",
    letterSpacing: "0em",
    paddingTop: theme.spacing(6.375),
    paddingBottom: theme.spacing(4.5),
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  top: {
    position: "relative",
    top: 70,
    [theme.breakpoints.down('xs')]: {
      top: 40
    },
  },
  subHeading: {
    fontFamily: "Montserrat",
    fontSize: "2.25rem",
    fontWeight: 600,
    lineHeight: "54px",
    letterSpacing: "0em",
    color: "#ffffff",
    marginLeft: theme.spacing(3.75),
    [theme.breakpoints.down('sm')]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "1.25rem",
    },
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    borderTop: "5px solid #FDC10E",
    borderLeft: "5px solid #FDC10E",
    
  },
  subHeading2: {
    fontFamily: "Montserrat",
    fontSize: "1.125rem",
    fontWeight: 400,
    lineHeight: "27px",
    letterSpacing: "0em",
    marginLeft: theme.spacing(3.75),
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "0.75rem",
    },
  },
  bg2: {
    padding: "40px 0 80px 0",
    margin: "0px auto",
    "& .MuiContainer-root": {
      paddingRight: theme.spacing(13.5),
      [theme.breakpoints.down('md')]: {
        paddingRight: theme.spacing(8.5)
      },
    },
  },
  par1: {
    fontFamily: "Montserrat",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "0em",
    paddingBottom:  theme.spacing(1),
    color: "#504E48",
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8),
      paddingLeft: theme.spacing(6),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(6),
      paddingTop: theme.spacing(0)
    },
  },
  left: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    borderRadius: 0,
    backgroundColor: "#FDC10E",
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(3),
      width: theme.spacing(3),
    },
  },
  right: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    borderRadius: 0,
    backgroundColor: "#FDC10E",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(3),
      width: theme.spacing(3),
    },
  },
  flex2: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: theme.spacing(3)
  },
  subHeading3: {
    fontFamily: "Montserrat",
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: "48px",
    letterSpacing: "0em",
    [theme.breakpoints.down('xs')]: {
      fontSize: "1.125rem",
    },
  },
  bg3: {
    padding: "0 0 24px 0",
    margin: "0px auto",
    "& .MuiContainer-root": {
      paddingLeft: theme.spacing(13.5),
      paddingRight: theme.spacing(13.5),
      [theme.breakpoints.down('md')]: {
         paddingLeft: theme.spacing(8.5),
         paddingRight: theme.spacing(8.5)
      },
    },
  },
  root: {
    display: 'flex',
    flexDirection: "column",
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  imageList: {
    height: theme.spacing(48.75),
  },
  imageItem: {
    flexGrow: 1
  },
  imgList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
}));

const Honorees = () => {

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
  
  const classes = useStyles();

  function renderHonoreesHomeSection() {
    return (
      <Box className={classes.bgImage1}>
        <Container maxWidth="lg">
          <Box className={classes.bg1}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h2" className={classes.heading}>Speaker</Typography>
              </Grid>
                <Grid item xs={5} md={3} spacing={8}>
                  <img src={Picture1} alt="" className={classes.img} />
                </Grid>
                <Grid item xs={7} md={9} className={classes.top}>
                  <Typography variant="h2" className={classes.subHeading}>Victor Adekola</Typography>
                  <Typography className={classes.subHeading2}>Product Designer, Prunedge.</Typography>
                </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    )
  }

  function renderHonoreesArticleSection() {
    return (
      <Box className={classes.bg2}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={4} />
            <Grid item xs={12} md={8}>
              {HonoreesTexts.map(text => (
                <Typography variant="body2" className={classes.par1} key={text.id}>
                  {text.par}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }

  function renderHonoreesGallerySection() {
    return (
      <Box className={classes.bg3}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box className={classes.flex2}>
                <Typography variant="h2" className={classes.subHeading3}>Others Speakers</Typography>
                <Box component="span">
                  <IconButton color="inherit" square className={classes.left}>
                    <ArrowLeft />
                  </IconButton>
                  <IconButton color="inherit" className={classes.right}>
                    <ArrowRight  />
                  </IconButton>
                </Box>
              </Box>
            </Grid> 
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Box className={classes.root}>
                <ImageList gap={24} cols={4.2} className={classes.imgList}>
                  {celebrities.map(celeb => (
                    <ImageListItem key={celeb.id}>
                      <img src={celeb.img} alt="celeb.subTitle" />
                    </ImageListItem>
                  ))};
                  {loopText2.map(text => (
                    <ImageListItem>  
                      <ListSubheader component="div">
                        {text.imageText}
                      </ListSubheader>
                      <ListSubheader component="div">
                        {text.imageText1}
                      </ListSubheader>
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
    
  }
  return (
    <>
      {renderHonoreesHomeSection()}
      {renderHonoreesArticleSection()}
      {renderHonoreesGallerySection()}
    </>
  )
}

export default Honorees
