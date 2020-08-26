import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, CssBaseline, Grid, Typography} from '@material-ui/core';

import QrNfc from '../../assets/information_qrnfc.gif';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: "36px",
    minHeight: '80vh',
  },
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
}));

export default function LandingInformation() {
  const classes = useStyles();

  return(
    <div style={{overflow:"hidden", padding: "32px"}} >
      <Grid container
        direction = "row"
        component = "main"
        justify="space-between"
        spacing = {4}
        className={classes.root}
      >
        <CssBaseline />
        <Grid item component={Box} justify-self="flex-end" xs={12} lg={7} display={{ xs: "none", lg: "block" }} >
          <img src={QrNfc} className="App-logo" alt="logo" style= {{marginRight: "64px", height: "400px", width: "auto"}} />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Typography variant="h3" align="left">
            Tap or Scan
          </Typography>
          <Typography variant="h6" align="left">
            Simply tap your phone on the card,
            <br/> or scan the QR Code with your phone camera.
          </Typography>
          <div>
            <Button className={classes.button} variant="contained"
            href="/compatibility" rel="noopener noreferrer">
              Compatible phones
            </Button>
            <Button className={classes.button} variant="contained" color="primary"
              href="/signup" rel="noopener noreferrer"
            >
              Sign Up
            </Button>
            <Typography variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec scelerisque augue. Vivamus tristique condimentum pellentesque.
            </Typography>
            <Typography variant="body2" align="right" color="textSecondary">
              <br/>
              <i>"Nam nisl ante, dapibus et urna quis, finibus consequat sapien."</i> <br/>
              - Mike Alvarado
            </Typography>
          </div>
        </Grid>
        <Grid item component={Box} justify-self="flex-end" xs={12}  display={{ xs: "block", sm: "none" }} >
          <img src={QrNfc} className="App-logo" alt="logo" style= {{ height: "auto", width: "100%"}} />
        </Grid>
      </Grid>
    </div>
  )
}
