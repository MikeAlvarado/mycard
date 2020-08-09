import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  toolbar:{
    borderRadius: '0 0 16px 16px'
  },
  toolbarTitle: {
    flexGrow: 1,
    color: 'white',
  }
}));

export default function AppBar(props) {
  const classes = useStyles();

  const [inProfile, setInProfile] = useState(false)

  useEffect(() => {
    if (window.location.href.indexOf("settings") > -1) { setInProfile(false) }
    else { setInProfile(true) }
  }, [])

  function RedirectTo(){
    if (inProfile){ window.location.href = "/settings"}
    else { window.location.href = "/" }
  }

  return (
    <React.Fragment>
      <Toolbar style={{backgroundColor: props.Color, marginBottom: props.Margin }} className={classes.toolbar}>
        <Typography variant="h6" className={classes.toolbarTitle}>
          {props.Title}
        </Typography>
        <IconButton href="#" onClick={RedirectTo} aria-label="" className={classes.margin}>
         { inProfile ?
           <SettingsIcon style={{ color: 'white' }} fontSize="large" /> :
           <AccountCircleIcon style={{ color: 'white' }} fontSize="large" />
         }
       </IconButton>
      </Toolbar>
    </React.Fragment>
  );
}
