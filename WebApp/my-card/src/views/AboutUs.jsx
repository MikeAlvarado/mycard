import React, { useState } from 'react'

import { Button, Container, CssBaseline, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/header';
import Footer from '../components/footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: "60vh",
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
}));

const sections = [
  { title: 'Phones', url: '/compatibility' }, { title : 'About', url : '/about'},
];

export default function CompatiblePhones() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
      <Header title="" sections={sections} />
      <Grid container
        direction = "row"
        component = "main"
        spacing = {4}
        className={classes.root}
        style={{paddingTop: '32px'}}
      >
        <CssBaseline />
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" align="left">
            <strong>About mycard</strong>
          </Typography>
          <br/>
          <Typography variant="body1" align="left">
            Your card can be fully customized to fit your needs inside and outside.          <br/>
            Choose what information you would like to share.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" align="left">
            <strong>How it works?</strong>
          </Typography>
          <br/>
          <Typography variant="body1" align="left">
            Mycard works with an NFC chip or with QR code.<br/>
            The NFC chip works when the mycard card is tapped on the back of the phone, this only works if your phone has a NFC chip reader installed, check our Compatible Phones tab to see if your phone has one.
            Mycard also works with QR code, so any phone with a camera can scan the QR code.<br/>
            Using any of these two methods will take you to the profile you made with the information that you want to share.
          </Typography>
          <Button className={classes.button} variant="contained"
          href="/compatibility" rel="noopener noreferrer">
            Compatible phones
          </Button>
          <Button className={classes.button} variant="contained" color="primary"
            href="/signup" rel="noopener noreferrer"
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
      </Container>
      <Footer />
    </div>
  )
}
