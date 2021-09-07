import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card as MuiCard} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 24,
    width: 392
  },
  eventImg: {
    height: 0,
    paddingTop: '56.25%',
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  row1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    right: 7
  },
  heading: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 20,
    fontWeight: 600,
    lineHeight: "30px",
    letterSpacing: "0em",
    color: "#FDC10E",
  }
}));

const Card = ({renderBg, heading, renderCalIcon, calText, renderClockIcon, clockText, renderLocationIcon, locationText   }) => {
  const classes = useStyles();

  return (
    <MuiCard className={classes.root}>
      <CardMedia square
        className={classes.eventImg} 
        image={renderBg}
        title="Event background 1"
      />
      <CardContent>
        <Typography variant="h6" noWrap={false} className={classes.heading} >
          {heading}
        </Typography>
      </CardContent>
      <CardActions className={classes.column}>
        <div className={classes.row}>
          <IconButton aria-label="Calender">
            {renderCalIcon()}
          </IconButton>
          <Typography>{calText}</Typography>
        </div>
        <div className={classes.row1}>
          <IconButton aria-label="Clock">
            {renderClockIcon()} 
          </IconButton>
          <Typography>{clockText}</Typography>
        </div>
        <div className={classes.row1}>
          <IconButton aria-label="Location">
            {renderLocationIcon()}
          </IconButton>
          <Typography>{locationText}</Typography>
        </div>
      </CardActions>
    </MuiCard>
  );
}

export default Card;