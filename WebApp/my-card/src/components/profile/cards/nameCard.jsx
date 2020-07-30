import React from 'react'

import { Card, CardContent, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card: {
    height:"200px",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: '16px'
  },
  cardContent: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    textAlign: 'center',
    height: '100%',
  },
  cardText: {
    paddingTop: '6px'
  },
}));


export default function NameCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography style={{height: '64px'}}/>
        <Typography variant="h4" className={classes.cardText}>
          <b>{props.Name}</b>
        </Typography>
        <Typography variant="subtitle1" className={classes.cardText} color="textSecondary">
          {props.Title}
        </Typography>
      </CardContent>
    </Card>
  )
}
