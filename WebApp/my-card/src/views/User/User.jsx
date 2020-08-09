import React, { useState, useEffect, useCallback} from 'react'

import {
  useParams
} from "react-router-dom";

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

export default function User(props) {
  const classes = useStyles();

  let { username } = useParams();

  const [user, setUser] = useState("empty")
  const [myUser, setMyUser] = useState("empty")

  const fetchFirebase = useCallback(async () => {
    await firebase.getCurrentUser().then(setMyUser)
    await firebase.getUser(username).then(setUser)
  }, []);

  useEffect(() => {
    // console.log(username)
    if (username != undefined) {  fetchFirebase() }
  }, [fetchFirebase])

  useEffect(() => {
    if (user == undefined){
      window.location.href = "/";
    }

    if (myUser !== 'empty'){
      // console.log(myUser.Username)
      if (username === myUser.Username){
        window.location.replace("/");
      }
    }
  }, [myUser])



  if (user === "empty") {
    return (<div></div>)
  }

  if (user === undefined) {
    return (<div><h5>No User with username: {username}</h5></div>)
  }

  return (
    <div className={classes.root}>
      <Cover ShowAppbar='false' BackgroundImage={user.Information['Cover']}/>
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
