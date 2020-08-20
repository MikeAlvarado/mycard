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
    if (showappbar ===  'true'){
      return <Appbar Transform="translate(0, -200px)" />
    }
    else{
      return ""
    }
  }

  return(
    <React.Fragment>
      <div className={classes.backgroundImage} style={{backgroundImage: "url('"+props.BackgroundImage+"')"}}>
      </div>
      <ShowAppBar />
    </React.Fragment>
  )
}
