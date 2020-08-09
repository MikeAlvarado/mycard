import React, { useState, useEffect } from 'react'

import firebase from '../../firebase/firebase'

import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Cover from '../../components/profile/cover';
import ProfileHeader from '../../components/profile/profileHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%'
  }
}));

export default function User() {
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
      <Cover ShowAppbar='true' BackgroundImage={user.Information['Cover']}/>
      <CssBaseline />
      {/*<div>*/}
      <Container component="main" maxWidth="sm">
        <div className="App">
          <ProfileHeader User={user} />
        </div>
      </Container>
      {/*</div>*/}
    </div>
  )
}
