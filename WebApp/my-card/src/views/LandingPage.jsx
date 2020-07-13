import React from "react";

import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/header';
import Footer from '../components/footer';
import LandingHero from '../components/landing/hero'
import LandingInformation from '../components/landing/information'
import LandingPersonalization from '../components/landing/personalization'

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


export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Header title="" sections={sections} />
        <div className="App">
          <LandingHero />
          <LandingInformation />
          <LandingPersonalization />
        </div>
      </Container>
      <Footer />
    </div>
  )
}
