import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, CssBaseline, Grid, Typography} from '@material-ui/core';

import HeroIllustration from '../../assets/hero_illustrations.jpg';
import phoneMockup from '../../assets/phoneMock2full.png';
import playstoreLogo from '../../assets/google-play-badge.png';
import appstoreLogo from '../../assets/app-store-badge.svg';


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
    paddingTop: "48px",
    minHeight: '80vh',
  },
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
}));

export default function LandingHero() {
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
        <Grid item xs={12} lg={6}>
          <Typography variant="h4" align="left">
            Welcome to
          </Typography>
          <Typography variant="h3" align="left">
            <u><strong>YOUR NEW <br/> PERSONAL CARD</strong></u>
          </Typography>
          <div>
            <Button className={classes.button} variant="contained"> Learn More </Button>
            <Button className={classes.button} variant="contained" color="primary"
              href="/signup" rel="noopener noreferrer"
            >
              Sign Up
            </Button>
          </div>
          <div style={{paddingTop: "36px", display: "flex", alignItems: "center"}}>
            <img src={appstoreLogo} className="App-logo" alt="logo" style={{paddingTop: "8px", paddingBottom: "8px", paddingRight: "8px", height:"48px", width:"auto"}}/>
            <img src={playstoreLogo} className="App-logo" alt="logo" style={{height:"48px", width:"auto"}}/>
          </div>
        </Grid>
        <Grid item component={Box} justify-self="flex-end" lg={4} display={{ xs: "none", lg: "block" }}>
          <img src={HeroIllustration} className="App-logo" alt="logo" style= {{height: "400px", width: "auto"}} />
        </Grid>
        <Grid item component={Box} justify-self="flex-end" xs={12} display={{ xs: "block", sm: "none" }}>
          <img src={phoneMockup} className="App-logo" alt="logo" style= {{height: "auto", width: "100%"}} />
        </Grid>
      </Grid>
    </div>
  )
}
