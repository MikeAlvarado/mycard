import React from 'react'

import { Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NameCard from './cards/nameCard'
import AboutCard from './cards/aboutCard'
import SocialCard from './cards/socialCard'

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

export default function BaseComponent(props) {
  const classes = useStyles();

  const share = props.User.Share;

  function About(){
    if (share['AboutMe'] !== undefined || share['AboutMe'] !== ""){
      return <AboutCard Content={share['AboutMe']}/>
    }
    else{
      return ""
    }
  }

  return (
    <div className={classes.root}>
      <img src={props.User.Information['Profile']}
            alt="ProfilePicture"
            className={classes.profileImage} />
        <Grid container direction="column"
                        justify="flex-start"
                        alignItems="center"
                        className={classes.cardsContainer}>
          <Grid item xs={12} className={classes.cardItem} >
            <NameCard Name={props.User.Information['Name']} Title={props.User.Information['Title']}/>
          </Grid>
          <Grid item xs={12} className={classes.cardItem}>
            <About />
          </Grid>
          <Grid item xs={12} className={classes.cardItem}>
            <SocialCard Social={props.User.Share['Social']} />
          </Grid>
        </Grid>
    </div>
  )
}
