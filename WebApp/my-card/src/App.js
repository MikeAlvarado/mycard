import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

import { AuthProvider } from './firebase/auth'
import firebase from './firebase/firebase'


// UI
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline, CircularProgress } from '@material-ui/core';
import 'fontsource-roboto';


// Our Views
import PrivateRoute from "./PrivateRoute"

import LandingPage from "./views/LandingPage";
import Logon from "./views/Logon";
import Registry from "./views/Registry";
import Profile from "./views/User/Profile";
import User from "./views/User/User";
import Settings from "./views/User/Settings";

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

theme = responsiveFontSizes(theme);

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default function App() {

  return (
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Switch>
            <PrivateRoute path={`${process.env.PUBLIC_URL}/`} exact component={Profile} />
            <Route path={`${process.env.PUBLIC_URL}/:username`} exact component={User} />
            <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Logon} />
            <Route path={`${process.env.PUBLIC_URL}/signup`} exact component={Registry} />
            <Route path={`${process.env.PUBLIC_URL}/welcome`} exact component={LandingPage} />
            <Route path={`${process.env.PUBLIC_URL}/settings`} exact component={Settings} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </AuthProvider>
  );

}
