import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  toolbarTitle: {
    flexGrow: 1,
  }
}));

export default function AppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar >
        <Typography variant="h6" className={classes.toolbarTitle}>
        </Typography>
        <IconButton aria-label="settings" className={classes.margin}>
         <SettingsIcon style={{ color: 'white' }} fontSize="large" />
       </IconButton>
      </Toolbar>
    </React.Fragment>
  );
}
