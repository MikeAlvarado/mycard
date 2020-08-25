import React, { useState, useEffect } from 'react'

import firebase from '../../firebase/firebase'

import { IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  toolbar:{
    borderRadius: '0 0 16px 16px',
  },
  toolbarTitle: {
    flexGrow: 1,
    color: 'white',
  }
}));

export default function AppBar(props) {
  const classes = useStyles();

  const [inProfile, setInProfile] = useState(false);
  const [openMenuSettings, setOpenMenuSettings] = useState(null);

  useEffect(() => {
    if (window.location.href.indexOf("settings") > -1) { setInProfile(false) }
    else { setInProfile(true) }
  }, [])

  const openMenu = (event) => {
    setOpenMenuSettings(event.currentTarget)
  }

  const closeMenu = () => {
    setOpenMenuSettings(null)
  }

  function RedirectTo(){
    if (inProfile){ window.location.href = "/settings"}
    else { window.location.href = "/" }
    closeMenu()
  }

  function Logout(){
    firebase.logout();
    closeMenu()
    //setTimeout(() => {  props.history.replace('/'); }, 1000);
  }

  return (
    <React.Fragment>
      <Toolbar style={{ backgroundColor: props.Color, marginBottom: props.Margin, transform: props.Transform }} className={classes.toolbar}>
        <Typography variant="h6" className={classes.toolbarTitle}>
          {props.Title}
        </Typography>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu} className={classes.margin}>
         { inProfile ?
           <SettingsIcon style={{ color: 'white' }} fontSize="large" /> :
           <AccountCircleIcon style={{ color: 'white' }} fontSize="large" />
         }
       </IconButton>
       <Menu
        id="simple-menu"
        anchorEl={openMenuSettings}
        keepMounted
        open={Boolean(openMenuSettings)}
        onClose={closeMenu}
      >
        <MenuItem onClick={RedirectTo}>{inProfile ? "Settings" : "Profile"}</MenuItem>
        <MenuItem onClick={Logout}>Logout</MenuItem>
      </Menu>
      </Toolbar>
    </React.Fragment>
  );
}
