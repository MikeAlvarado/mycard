import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, Grid, Typography} from '@material-ui/core';

import HeroIllustration from '../../assets/hero_illustrations.jpg';
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
    marginRight: theme.spacing(4),
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
        <Grid item xs={6}>
          <Typography variant="h3" align="left">
            THIS IS
          </Typography>
          <Typography variant="h2" align="left">
            <u><strong>YOUR NEW <br/> BUSINESS CARD</strong></u>
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
            <img src={appstoreLogo} className="App-logo" alt="logo" style={{height:"56px", width:"auto"}}/>
            <img src={playstoreLogo} className="App-logo" alt="logo" style={{height:"80px", width:"auto"}}/>
          </div>
        </Grid>
        <Grid item justify-self="flex-end" xs={4}>
          <img src={HeroIllustration} className="App-logo" alt="logo" style= {{height: "400px", width: "auto"}} />
        </Grid>
      </Grid>
    </div>
  )
}
