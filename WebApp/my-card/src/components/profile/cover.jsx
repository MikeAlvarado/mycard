import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Appbar from './appbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '80vh',
  },
  backgroundImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '200px',
    filter: "blur(2px)",
  },
}));

export default function BaseComponent(props) {
  const classes = useStyles();

  const showappbar = props.ShowAppbar;

  function ShowAppBar(){
<<<<<<< HEAD
    if (showappbar == 'true'){
=======
    if (showappbar ===  'true'){
>>>>>>> ce26dd3... Share Usernames
      return <Appbar />
    }
    else{
      return ""
    }
  }

  return(
    <React.Fragment>
      <div className={classes.backgroundImage} style={{backgroundImage: "url('"+props.BackgroundImage+"')"}}>
        <ShowAppBar />
      </div>
    </React.Fragment>
  )
}
