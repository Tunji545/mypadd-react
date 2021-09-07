import React from 'react'
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import BgImage from "../images/bg-1.svg";
import Button from './reusables/Button';
import {ReactComponent as ArrowLeft} from "../images/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../images/arrow-right.svg";
import {ReactComponent as CircleRow} from "../images/row.svg";
import {ReactComponent as Map} from "../images/map.svg";
import {ReactComponent as MapCol} from "../images/mapCol.svg";
import { eventCards } from '../utils/data';
import Card from './reusables/Card';
import { ReactComponent as ChainBg } from "../images/chainBg.svg";
import { people } from '../utils/data';
import { Crowds } from '../utils/data';

const useStyles = makeStyles(theme => ({
  bg1: {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingLeft: 108,
    paddingTop: 214,
    paddingBottom: 218,
    fontFamily: "Montserrat, sans-serif",
    "& .MuiButton-root": {
      padding: "16px 32px",
      marginTop: theme.spacing(5)
    }
  },
  heading: {
  fontSize: "40px",
  fontWeight: 600,
  lineHeight: "60px",
  letterSpacing: "0em",
  color: "#FDC10E"
  },
  par1: {
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "42px",
  letterSpacing: "0em",
  color: "#fff",
  position: "relative"
  },
  left: {
    position: "absolute",
    left: theme.spacing(5)
  },
  right: {
    position: "absolute",
    right: theme.spacing(5)
  },
  row: {
    position: "absolute",
    bottom: theme.spacing(-5),
    left: "50%",
    transform: "translateX(-50%)"
  },
  bg2: {
    backgroundColor: "#000000",
    display: "flex",
    fontFamily: "Montserrat, sans-serif",
    color: "#ffffff",
  },
  bg4: {
    backgroundColor: "#000000",
    fontFamily: "Montserrat, sans-serif",
    color: "#ffffff",
  },
  row2: {
    padding: "233px 0 233px 116px",
    zIndex: 4
  },
  par2: {
    fontSize: 40,
    fontWeight: 600,
    lineHeight: "60px",
    letterSpacing: "0em",  
    zIndex: 4
  },
  par3: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: "30px",
    letterSpacing: "0em",  
    paddingTop: 40
  },
  map: {
    padding: "112px 0 112px 0", 
    position: "relative",
    right: 116,
    zIndex: 1
  },
  bg3: {
    fontFamily: "Montserrat, sans-serif",
    paddingLeft: 108,
    paddingRight: 95,
  },
  flex3: {
    display: "flex"
  },
  par4: {
    color: "#312D22",
    fontSize: 36,
    fontWeight: 600,
    lineHeight: "54px",
    paddingTop: 93,
    letterSpacing: "0em",
  },
  mapCol: {
    paddingTop: 60,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  },
  flex1: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    bottom: 115
  },
  flex2: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 110,
    paddingTop: 54
  },
  eventImg: {
    height: 160
  },
  eventImg1: {
    height: 236
  },
  row3: {
    padding: "208px 0 218px 116px",
    "& .MuiButton-root": {
      padding: "16px 32px",
      marginTop: theme.spacing(8)
    }
  },
  gallery: {
    padding: "60px 108px 60px 42px",
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2)
  }
}))

const Home = () => {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.bg1}>
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
        <Button variant="contained" color="primary" size="medium" label="Learn more" />
        <IconButton color="inherit" className={classes.row}>
          <CircleRow  />
        </IconButton>
      </div>
      <div className={classes.bg2}>
        <div className={classes.row2}>
          <Typography variant="h2" gutterBottom className={classes.par2}>
             Worlds&nbsp;No.&nbsp;1&nbsp;Excellence Network 
          </Typography>
          <Typography variant="p" gutterBottom className={classes.par3}>
            We recognize the Most Influential People of African Descent yearly. 
          </Typography>
        </div>
        <IconButton color="inherit" className={classes.map}>
          <Map fontSize="small" />
        </IconButton>
      </div>
      <div className={classes.bg3}>
        <div className={classes.flex}>
          <Typography variant="h1" gutterBottom className={classes.par4}>Events</Typography>
          <IconButton color="inherit" className={classes.mapCol}>
            <MapCol fontSize="small" />
          </IconButton>
        </div>
        <div className={classes.flex1}>
          {eventCards.map(eventCard => (
            <Card key={eventCard.id} className={classes.eventImg} renderBg={ eventCard.img } heading={eventCard.heading} renderCalIcon={() => <eventCard.icon1 />} calText={eventCard.text1} renderClockIcon={() => <eventCard.icon2 />} clockText={eventCard.text2} renderLocationIcon={() => <eventCard.icon3 />} locationText={eventCard.text3} /> 
          ))}
        </div>
      </div>
      <div className={classes.bg4}>
        <div className={classes.flex3}>
          <div className={classes.row3}>
            <Typography variant="h2" gutterBottom className={classes.par2}>
              Honourees 
            </Typography>
            <Typography variant="p" gutterBottom className={classes.par3}>
              We recognize the Most Influential People of African Descent yearly. 
            </Typography>
            <Button variant="contained" color="primary" size="medium" label="Nominate now" className={classes.btn} />
          </div>
          <div className={classes.gallery}>
              {people.map((person, index) => (
                <div key={index}>
                  <img src={person} alt="" />
                </div>
              ))}
          </div>
        </div>
        <IconButton color="inherit">
          <ChainBg fontSize="small" />
        </IconButton>
      </div>
      <div className={classes.bg3}>
        <div>
          <Typography variant="h1" gutterBottom className={classes.par4}>Feature posts</Typography>
        </div>
        <div className={classes.flex2}>
          {Crowds.map(crowd => (
            <Card key={crowd.id} className={classes.eventImg1} renderBg={crowd.img} heading={crowd.heading} renderCalIcon={() => ""}  calText={crowd.text} renderClockIcon={() => ""} clockText="" renderLocationIcon={() => ""} locationText=""  /> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
