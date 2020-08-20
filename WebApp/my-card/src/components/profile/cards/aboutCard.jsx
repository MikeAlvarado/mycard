import React from 'react'

import { Card, CardContent, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: '16px'
  },
  cardContent: {
    height: '100%',
  },
  cardTitles: {

  },
  cardText: {
    paddingTop: '6px'
  },
}));


export default function AboutCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" className={classes.cardTitle}>
          <b>About Me</b>
        </Typography>
        <Typography variant="body2" className={classes.cardText}>
          {props.Content}
        </Typography>
      </CardContent>
    </Card>
  )
}
