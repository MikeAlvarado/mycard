import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import firebase from './firebase/firebase'

import './App.css';

// UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, CircularProgress } from '@material-ui/core';

// Our Views
import LandingPage from "./views/LandingPage";
import Logon from "./views/Logon";
import Registry from "./views/Registry";
import Dashboard from "./views/Dashboard";

const theme = createMuiTheme();

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

  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

  return firebaseInitialized !== false ? (
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={LandingPage} />
          <Route path={`${process.env.PUBLIC_URL}/login`} exact component={Logon} />
          {/*<Route path={`${process.env.PUBLIC_URL}/signup`} exact component={Registry} />
          <Route path={`${process.env.PUBLIC_URL}/dashboard`} exact component={Dashboard} />*/}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  ): <div id="loader"><CircularProgress /></div>;

}
