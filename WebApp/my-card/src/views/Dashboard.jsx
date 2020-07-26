import React, { useState } from 'react'

import firebase from '../firebase/firebase'

import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Cover from '../components/profile/cover';
import Profile from '../components/profile/profile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%'
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Cover />
      <CssBaseline />
      {/*<div>*/}
      <Container component="main" maxWidth="sm">
        <div className="App">
          <Profile />
        </div>
      </Container>
      {/*</div>*/}
    </div>
  )
}
