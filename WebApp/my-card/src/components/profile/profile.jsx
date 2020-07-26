import React, { useState } from 'react'

import { Box, Container, CssBaseline, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';

import NameCard from './cards/nameCard'
import AboutCard from './cards/aboutCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80vh',
  },
  profileImage: {
    borderRadius: '50%',
    objectFit: 'cover',
    height: '150px',
    width: '150px',
    //padding: '6px',
    alignSelf: 'center',
    position: 'relative',
    top: '-85px',
    border: '6px solid white',
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
    zIndex: '1'

  },
  cardsContainer: {
    flexGrow: 1,
    position: 'relative',
    top: '-160px',
  },
  cardItem: {
    width: '100%',
    paddingBottom: '24px'
  }
}));

export default function BaseComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src="https://www.suzuki.gr/moto-uplds/1647_ava-4.jpg"
            className={classes.profileImage} />
        <Grid container direction="column"
                        justify="flex-start"
                        alignItems="center"
                        className={classes.cardsContainer}>
          <Grid item xs={12} className={classes.cardItem} >
            <NameCard Name="Michelle Alvarado" Title="Software Engineer @moneypool"/>
          </Grid>
          <Grid item xs={12} className={classes.cardItem}>
            <AboutCard Content="Passionate about UI, adept of UX, trying to make software more accessible and usable one line of code at a time."/>
          </Grid>
        </Grid>
    </div>
  )
}
