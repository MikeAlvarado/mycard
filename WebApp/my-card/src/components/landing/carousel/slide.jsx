import React from 'react';
import { Card, CardMedia, makeStyles } from '@material-ui/core';

export default function CarouselSlide(props) {
    const { backgroundImage } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 8,
            margin: '0px 25px',
            width: '500px',
            height: '300px',
            boxShadow: '8px 8px 8px gray',
            display: 'flex',
            justifyContent: 'center',
        },
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt="cardSample"
            height="auto"
            className={classes.media}
            image={ backgroundImage }
          />
        </Card>
    );
}
