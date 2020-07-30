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
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '200px',
    filter: "blur(2px)",
  },
}));

export default function BaseComponent(props) {
  const classes = useStyles();

  return(
    <React.Fragment>
      <div className={classes.backgroundImage} style={{backgroundImage: "url('"+props.BackgroundImage+"')"}}>
        <Appbar />
      </div>
    </React.Fragment>
  )
}
