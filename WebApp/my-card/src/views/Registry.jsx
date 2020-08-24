import React, { useState } from 'react'
import firebase from '../firebase/firebase'

import { Avatar, Button, Container, CssBaseline, Grid, Link, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CheckIcon from "@material-ui/icons/CheckOutlined";
import BlockIcon from "@material-ui/icons/BlockOutlined";

import Header from '../components/header';
import Footer from '../components/footer';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const sections = [
  { title: 'Products', url: '#' },
  { title: 'About', url: '#' },
];


export default function Logon(props) {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const [logged, setLogged] = useState('');

  async function signup() {
    const fullName = name + " " + lname;
		try {
			await firebase.register(fullName, email, password, cardNumber)
			props.history.replace('/settings')
		} catch(error) {
      setLogged("false");
			alert(error.message)
		}
	}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Header title="" sections={sections} />
        <Container component="login" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              {logged === "false"? <BlockIcon/> : (logged === "true"? <CheckIcon/> : <LockOutlinedIcon/>) }
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <TextField
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  autoComplete="given-name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lname}
                  onChange={e => setlName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              </Grid>
              <Grid item xs={12} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label=" Card Number"
                name="cardNumber"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
              />
              </Grid>
              <Grid item xs={12} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password} onChange={e => setPassword(e.target.value)}
              />
              </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={signup}
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}
