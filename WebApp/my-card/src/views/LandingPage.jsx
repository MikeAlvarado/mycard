import React from "react";

import { Avatar, Button, Box, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../logo.svg';
import mycardlogo from '../mycardlogo.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://nfc-mycard.web.app/">
        myCard
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));


export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <img src={mycardlogo} className="App-logo" alt="logo" />

            <Typography variant="header1">  A Chava Medina's idea. <br/> </Typography>
            <Typography>
              <a
                className="App-link"
                href="/login"
                rel="noopener noreferrer"
              >
                login
              </a>
            </Typography>


          </header>
          <Typography>
            Powered by React and developed by &nbsp;
            <a
              className="App-link"
              href="https://github.com/MikeAlvarado"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mike Alvarado
            </a>
          </Typography>

        </div>

      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center"> Current version Alpha 0.0.03.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  )
}
