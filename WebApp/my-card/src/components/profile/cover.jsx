import React, { useState } from 'react'

import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Appbar from './appbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80vh',
  },
  backgroundImage: {
    backgroundImage: 'url(https://i.pinimg.com/originals/61/5b/7c/615b7caf9b61ffe85852cde0ba67c9de.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '200px',
    filter: "blur(2px)",
  },
}));

export default function BaseComponent() {
  const classes = useStyles();

  return(
    <React.Fragment>
      <div className={classes.backgroundImage}>
        <Appbar />
      </div>
    </React.Fragment>
  )
}
