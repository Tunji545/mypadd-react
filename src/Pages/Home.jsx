import React from 'react'
import { Box, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import BgImage from "../images/bg-1.svg";
import Button from '../reusables/button';
import {ReactComponent as ArrowLeft} from "../images/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../images/arrow-right.svg";
import {ReactComponent as CircleRow} from "../images/row.svg";
import {ReactComponent as Mapp} from "../images/map.svg";
import {ReactComponent as MapCol} from "../images/mapCol.svg";
import { eventCards } from '../utils/data';
import Card from '../reusables/card';
import { ReactComponent as ChainBg } from "../images/chainBg.svg";
import { Crowds } from '../utils/data';
import MapRight from "../images/map.svg"
import Female1 from "../images/female1.svg";
import Male2 from "../images/male2.svg";
import Male3 from "../images/male3.svg";
import Male4 from "../images/male4.svg";
import Female5 from "../images/female5.svg";
import Female6 from "../images/female6.svg";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  bg1Image: {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "214px 0 218px 0",
    [theme.breakpoints.down('sm')]: {
      padding: "150px 0 150px 0"
    },
    margin: "0px auto",
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
    "& .MuiButton-root": {
      padding: "16px 32px",
      marginTop: theme.spacing(5)
    },
    [theme.breakpoints.down('md')]: {
      "& .MuiButton-root": {
      padding: "13px 26px",
      marginTop: theme.spacing(5)
    },
    },
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
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: "42px",
    letterSpacing: "0em",
    color: "#fff",
    position: "relative",
    [theme.breakpoints.down('md')]: {
      fontSize: "1.25rem"
    },
  },
  left: {
    position: "absolute",
    left: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      left: theme.spacing(2),
      width: theme.spacing(7.5)
    },
  },
  right: {
    position: "absolute",
    right: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      right: theme.spacing(2),
      width: theme.spacing(7.5)
    },
  },
  row: {
    position: "absolute",
    bottom: theme.spacing(-15),
    left: "50%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down('sm')]: {
      bottom: theme.spacing(0)
    },
  },
  bg2Dark: {
    backgroundColor: "#000000",
    backgroundImage: `url(${Mapp})`,
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
  bg2Dark1: {
    backgroundColor: "#000000",
    overflow: "hidden",
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
  bg2: {
    fontFamily: "Montserrat, sans-serif",
    color: "#ffffff",
  },
  bg4: {
    fontFamily: "Montserrat, sans-serif",
    color: "#ffffff",
    padding: theme.spacing(0),
    margin: "0 auto"
  },
  row2: {
    padding: "233px 0px",
    margin: "0 auto",
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      padding: "150px 0px"
    },
  },
  zIndex: {
    zIndex: 4,
    [theme.breakpoints.down('sm')]: {
      zIndex: 0
    },
  },
  par2: {
    fontSize: "2.5rem",
    fontWeight: 600,
    lineHeight: "60px",
    letterSpacing: "0em",
    [theme.breakpoints.down('md')]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.75rem"
    },  
    [theme.breakpoints.down('xs')]: {
      fontSize: "1.5rem"
    },
  },
  par: {
    fontSize: "2.5rem",
    fontWeight: 600,
    lineHeight: "60px",
    letterSpacing: "0em",
    [theme.breakpoints.down('md')]: {
      fontSize: "2rem"
    },  
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6)
    }, 
  },
  par3: {
    fontSize: "1.25rem",
    fontWeight: 400,
    lineHeight: "30px",
    letterSpacing: "0em",  
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem"
    },
  },
  par5: {
    fontSize: "1.25rem",
    fontWeight: 400,
    lineHeight: "30px",
    letterSpacing: "0em",  
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  map: {
    padding: "112px 0 112px 0", 
    position: "relative",
    right: 116,
    zIndex: 1
  },
  bg3Box: {
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
  bg3: {
    fontFamily: "Montserrat, sans-serif",
    padding: 0,
    margin: "0 auto",
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
  par4: {
    color: "#312D22",
    fontSize: "2.25rem",
    fontWeight: 600,
    lineHeight: "54px",
    paddingTop: theme.spacing(11.625),
    letterSpacing: "0em",
    [theme.breakpoints.down('md')]: {
      fontSize: "2rem",
      display: "block"
    },
  },
  mapCol: {
    paddingTop: theme.spacing(7.5),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(3)
    }, 
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down('md')]: {
      "& .MuiIconButton-label": {
        opacity: 0
      },
      "& .MuiTypography-root": {
        display: "block"
      }
    }
  },
  flex1: {
    display: "flex",
    gap: 24,
    position: "relative",
    bottom: 115,
    [theme.breakpoints.down('md')]: {
      "&": {
        flexWrap: "wrap",
      }
    }
  },
  flex2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",    
  },
  eventImg: {
    height: 160
  },
  eventImg1: {
    height: 236
  },
  row3: {
    "& .MuiButton-root": {
      padding: "16px 32px",
      marginTop: theme.spacing(8)
    }
  },
  gallery: {
    padding: "60px 0 0px 0",
    position: "relative",
    top: 90,
    zIndex: 4,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 30
    }, 
  },
  imageList: {
    minHeight: 214,
  },
  imageItem: {
    flexGrow: 2,
    "& .MuiImageListItem-item":{
      // height: 100
    }
  },
  chainBg: {
    position: "relative",
    top: 10,
    [theme.breakpoints.down('md')]: {
      "&": {
        top: 22,
      }
    },
    [theme.breakpoints.down('sm')]: {
      "&": {
        top: 50
      }
    }
  },
  right1: {
    position: "absolute",
    right: 0,
    [theme.breakpoints.down('md')]: {
      width: 700
    },
    [theme.breakpoints.down('sm')]: {
      width: 580,
      position: "relative",
      paddingTop: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      width: 340
    },
  }
}))

const Home = () => {
  
  const classes = useStyles();
  
  function renderHomeHeaderSection() {
    return (
      <Box className={classes.bg1Image}>
        <Container maxWidth="lg">
          <Box className={classes.bg1}>
            <Grid container>
              <Grid item xs="12" sm="6">
                <Typography variant="h1" gutterBottom className={classes.heading}>Recognition Week.</Typography>
                <Typography variant="p" gutterBottom className={classes.par1}>
                  Global Reckoning Edition "Representation<br /> Matters". Who is Who in Global 100 Week
                </Typography>
                <IconButton color="inherit" className={classes.left}>
                  <ArrowLeft />
                </IconButton>
                <IconButton color="inherit" className={classes.right}>
                  <ArrowRight  />
                </IconButton>
                <Button variant="contained" color="primary" size="medium">
                  Learn more
                </Button>
                <IconButton color="inherit" className={classes.row}>
                  <CircleRow  />
                </IconButton>
              </Grid>   
            </Grid>
          </Box>
        </Container>
      </Box>
    )
  }

  function renderHomeDarkBgSection() {
    return (
      <Box className={classes.bg2Dark}>
        <Container maxWidth="lg">
          <Box className={classes.bg2}>
            <Box className={classes.row2}>
              <Grid container>
                <Grid item xs={12} md={5} className={classes.zIndex}>
                  <Typography variant="h2" gutterBottom className={classes.par2}>
                      Worlds No. 1 Excellence Network 
                  </Typography>
                  <Typography variant="body2" gutterBottom className={classes.par3}>
                    We recognize the Most Influential People of African Descent yearly. 
                  </Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                  <img src={MapRight} alt="" className={classes.right1} />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }

  function renderHomeEventsSection() {
    return (
      <Box className={classes.bg3Box}>
        <Container maxWidth="lg">
          <Box className={classes.bg3}>
            <Box className={classes.flex}>
              <Typography variant="h1" gutterBottom className={classes.par4}>Events</Typography>
              <IconButton color="inherit" className={classes.mapCol}>
                <MapCol fontSize="small" />
              </IconButton>
            </Box>
            <Box className={classes.flex1}>
              {eventCards.map(eventCard => (
                <Card key={eventCard.id} className={classes.eventImg} renderBg={ eventCard.img } heading={eventCard.heading} renderCalIcon={() => <eventCard.icon1 />} calText={eventCard.text1} renderClockIcon={() => <eventCard.icon2 />} clockText={eventCard.text2} renderLocationIcon={() => <eventCard.icon3 />} locationText={eventCard.text3} /> 
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }

  function renderHomeHonoreesSection() {
    return (
      <Box className={classes.bg2Dark1}>
        <Container maxWidth="lg">
          <Box className={classes.bg4}>
            <Grid container>
              <Grid item xs="12" sm="4" className={classes.flex2}>
                <Typography variant="h2" gutterBottom className={classes.par}>
                  Honourees 
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.par5}>
                  We recognize the Most Influential People of African Descent yearly. 
                </Typography>
                <Button variant="contained" color="primary" size="medium"className={classes.btn}>
                  Nominate
                </Button>
              </Grid>
              <Grid item xs="12" sm="8"className={classes.gallery}>
                <Grid container spacing={6}>
                  <Grid item xs={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <img src={Female1} alt="" />
                      </Grid>
                      <Grid item xs={12}>
                        <img src={Female5} alt="" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <img src={Male2} alt="" />
                      </Grid>
                      <Grid item xs={12}>
                        <img src={Female6} alt="" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <img src={Male4} alt="" />
                      </Grid>
                      <Grid item xs={12}>
                        <img src={Male3} alt="" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                  {/* <Box className={classes.root}>
                    <ImageList rowHeight="auto" gap={24} className={classes.imageList} cols={12}>
                      {people.map(person => (
                        <ImageListItem key={person.id} cols={4} style={{maxHeight: person.height}} className={classes.imageItem}>
                          <img src={person.img} alt="" />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box> */}
              </Grid>
            </Grid>
          </Box>
        </Container>
        <IconButton color="inherit" className={classes.chainBg}>
          <ChainBg />
        </IconButton>
      </Box>
    )
  }

  function renderHomeFeaturePostsSection() {
    return (
      <Box className={classes.bg3Box}>
        <Container maxWidth="lg">
          <Box className={classes.bg3}>
            <Box>
              <Typography variant="h1" gutterBottom className={classes.par4}>Feature posts</Typography>
            </Box>
            <Box className={classes.flex3}>
              {Crowds.map(crowd => (
                <Card key={crowd.id} className={classes.eventImg1} renderBg={crowd.img} heading={crowd.heading} renderCalIcon={() => ""}  calText={crowd.text} renderClockIcon={() => ""} clockText="" renderLocationIcon={() => ""} locationText=""  /> 
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    )
  }

  return (
    <>
      {renderHomeHeaderSection()}
      {renderHomeDarkBgSection()}
      {renderHomeEventsSection()}
      {renderHomeHonoreesSection()}
      {renderHomeFeaturePostsSection()}
    </>
  )
}

export default Home
