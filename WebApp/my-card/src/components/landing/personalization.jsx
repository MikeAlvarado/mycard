import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, Grid, Typography} from '@material-ui/core';

import Carousel from './carousel/carousel'


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

export default function LandingPersonalization() {
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
        <Grid item xs={12} sm={5}>
        <Typography variant="h3" align="left">

        </Typography>
        <Typography variant="h6" align="left">
          Fully customize your card looks and the information you share!
        </Typography>
        <div>
          {/*<Button className={classes.button} variant="contained"> What to share </Button>*/}
          <Button className={classes.button} variant="contained" color="primary"
            href="/signup" rel="noopener noreferrer"
          >
            Sign Up
          </Button>
          <Typography variant="body1" align="left">
            Can be fully cutomized to fit your needs. <br/>
            You can always choose what information you would like to share.
          </Typography>
          <Typography variant="body2" align="left" color="textSecondary">
            <br/>
            <br />
            App is not required to read the card.
          </Typography>
        </div>
        </Grid>
        <Grid style={{overflow:"hidden"}} item xs={12} sm={6}>
          <div>
            <Carousel />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
