import React, { useState, useEffect } from 'react'

import firebase from '../../firebase/firebase'

import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Cover from '../../components/profile/cover';
import Profile from '../../components/profile/profile';

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

  const [user, setUser] = useState("empty")

  useEffect(() => {
    firebase.getCurrentUser().then(setUser)
  }, [])

  if (user === "empty") {
    return (<div></div>)
  }

  return (
    <div className={classes.root}>
      <Cover BackgroundImage={user.Information['Cover']}/>
      <CssBaseline />
      {/*<div>*/}
      <Container component="main" maxWidth="sm">
        <div className="App">
          <Profile User={user} />
        </div>
      </Container>
      {/*</div>*/}
    </div>
  )
}
