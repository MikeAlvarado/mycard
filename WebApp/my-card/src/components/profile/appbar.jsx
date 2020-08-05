import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SettingsIcon from '@material-ui/icons/Settings';

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

  return (
    <React.Fragment>
      <Toolbar style={{backgroundColor: props.Color, marginBottom: props.Margin }} className={classes.toolbar}>
        <Typography variant="h6" className={classes.toolbarTitle}>
          {props.Title}
        </Typography>
        <IconButton aria-label="settings" className={classes.margin}>
         <SettingsIcon style={{ color: 'white' }} fontSize="large" />
       </IconButton>
      </Toolbar>
    </React.Fragment>
  );
}
