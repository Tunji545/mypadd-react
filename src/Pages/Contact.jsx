import React, {useState} from 'react'
import { Box, Grid, makeStyles, Typography, TextField } from '@material-ui/core';
import bgImage from "../images/bg-image.svg";
import Button from '../reusables/button';

const useStyles = makeStyles(theme => ({
  bgImage: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: theme.spacing(29),
    paddingBottom: theme.spacing(28.378),
    // padding: theme.spacing(29, 22, 28.375, 22),
    // margin: theme.spacing(0, "auto"),
    fontFamily: "Montserrat",
    textAlign: "center",
    width: "100%"
    // [theme.breakpoints.down('md')]: {
    //   padding: theme.spacing(29, 17, 28.375, 17),
    // },
    // [theme.breakpoints.down('sm')]: {
    //   padding: theme.spacing(29, 27.75, 28.375, 27.75),
    // },
    // [theme.breakpoints.down('xs')]: {
    //   padding: theme.spacing(22, 16, 22, 16),
    // },
  },
  par1: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: "1.875px",
    letterSpacing: "0em",
    color: "#ffffff",
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      fontSize: "1.125rem",
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "1.125rem",
    },
  },
  par2: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "3rem",
    letterSpacing: "0em",
    color: "#ffffff",
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      fontSize: "0.875rem"
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "0.875rem"
    },
  },
  par3: {
    paddingTop: theme.spacing(7.625),
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: "1.875rem",
    letterSpacing: "0em",
    color: "#ffffff",
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      fontSize: "1.125rem",
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.25rem",
    },
  },
  par4: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.5rem",
    letterSpacing: "0em",
    color: "#ffffff",
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      fontSize: "0.875rem",

    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",

    },
  },
  bg2: {
    padding: theme.spacing(17.75, 13.5, 14.75, 16),
    fontFamily: "Montserrat",
  },
  par5: {
    fontSize: "2.5rem",
    fontWeight: 600,
    lineHeight: "3.75rem",
    letterSpacing: "0em",
    color: "#312D22",
    [theme.breakpoints.down('md')]: {
      fontSize: "2.25rem"
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "1.75rem"
    },
  },
  par6: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.5rem",
    letterSpacing: "0em",
    color: "#504E48",
    [theme.breakpoints.down('md')]: {
      fontSize: "0.875rem"
    },
  },
  par7: {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: "1.125",
    letterSpacing: "0em",
    color: "#7C7666",
    paddingTop: theme.spacing(2)
  },
  form: {
    "& .MuiFormControl-root": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none"
    },
    "& .MuiFormLabel-root": {
      [theme.breakpoints.down('md')]: {
        fontSize: "0.875rem",
        lineHeight: "1.2rem"
      },
    }
  },
  btn: {
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
    fontWeight: 500,
    color: "#504E48",
    padding: theme.spacing(1, 2),
    textTransform: "none",
    [theme.breakpoints.down('md')]: {
      fontSize: "1.25rem",
    },
  },
}));

const initialFValues = {
  id: 0,
  text: "",
  email: "",
  textArea: ""
}

const Contact = () => {

  const [values, setValues] = useState(initialFValues)
  const classes = useStyles();

  const handleChange = e => {
    const [name, value] = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  function renderContactLeftSection() {
    return (
      <Grid item xs={12} md={6}>
        <Box className={classes.bgImage} display="flex" justifyContent="center" alignItems="center">
          <Box alignItems="center">
            <Typography className={classes.par1}> Address </Typography>
            <Typography className={classes.par2}>New York | Lagos | London | Paris</Typography>
            <Typography className={classes.par3}>Phone</Typography>
            <Typography className={classes.par4}>+1 (917) 541-8394</Typography>
            <Typography className={classes.par3}>Email</Typography>
            <Typography className={classes.par4}>info@prunedge.com</Typography>
          </Box>
        </Box>
      </Grid>
    )
  }

  function renderContactRightSection() {
    return (
      <Grid item xs={12} md={6}>
        <Box className={classes.bg2} >
          <Typography className={classes.par5}>Get in Touch</Typography>
          <Typography variant="body2" className={classes.par6}>
            Get in touch to start a conversation with us. We review every inquiry and respond promptly.
          </Typography>
          <Typography className={classes.par7}>Message Title</Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  elevation={0} 
                  variant="filled" 
                  label="Software Development" 
                  name="text" 
                  fullWidth
                  value={values.text}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  elevation={0} 
                  variant="filled" 
                  label="E-Mail" 
                  name="email" 
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  elevation={0} 
                  variant="filled" 
                  label="Drop your message here" 
                  name="textArea" 
                  multiline
                  fullWidth
                  rows={4}
                  value={values.textArea}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </form>
            <Button variant="contained" color="primary" size="medium" classes={{ root: classes.btn }}>
              Send
            </Button>
        </Box>
      </Grid>
    )
  }

  return (
    <Box className={classes.bg}>
      <Grid container>
        {renderContactLeftSection()}
        {renderContactRightSection()}
      </Grid>
    </Box>
  )
}

export default Contact
