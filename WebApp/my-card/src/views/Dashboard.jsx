import React, { useState } from 'react'
import firebase from '../firebase/firebase'

import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/header';
import Footer from '../components/footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80vh',
  },
}));

const sections = [
  { title: 'Products', url: '#' },
  { title: 'About Us', url: '#' },
];

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Header title="" sections={sections} />
        <div className="App">

        </div>
      </Container>
      <Footer />
    </div>
  )
}
