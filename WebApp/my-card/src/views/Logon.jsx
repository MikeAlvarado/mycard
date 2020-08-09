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
    marginTop: theme.spacing(1),
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

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [logged, setLogged] = useState('')

  async function login() {
    setLogged("else");
		try {
			await firebase.login(email, password)
      setLogged("true");
      setTimeout(() => {  props.history.replace('/'); }, 1000);
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
              {logged === "false "? <BlockIcon/> : (logged === "true"? <CheckIcon/> : <LockOutlinedIcon/>) }
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
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
              {/*
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={login}
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
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
