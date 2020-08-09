import React from 'react'

import { Card, CardContent, IconButton, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkIcon from '@material-ui/icons/Link';


const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#4A80F6",
    width: "100%",
    minHeight: '100px',
    boxShadow: "rgba(74, 128, 246, 0.2) 0px 2px 4px -1px, rgba(74, 128, 246, 0.14) 0px 4px 5px 0px, rgba(74, 128, 246, 0.12) 0px 1px 10px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: '16px'
  },
  cardContent: {
    height: '100%',
  },
  socialMedia:{
    display: 'flex',
    color: 'white',
    justifyContent: 'left',
    alignItems: 'center'
  },
  socialText:{
    fontWeight: 'bold',
    textDecoration: 'none !important'
  }
}));


export default function SocialCard(props) {
  const classes = useStyles();

  const iconList = {
    Facebook: FacebookIcon,
    Twitter: TwitterIcon,
    Instagram: InstagramIcon,
    YouTube: YouTubeIcon,
    Reddit: RedditIcon,
    LinkedIn: LinkedInIcon,
    Pinterest: PinterestIcon,
    Other: LinkIcon
  };

  function SocialCards(){
    var socialMedia = props['Social'];
    if (socialMedia !== undefined){
      return(
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>

            {Object.entries(socialMedia).map(([key, value]) => {
              const Icon = iconList[key] || 'Other';
              return(
                <a key={key} href={`https://www.${key}.com/${value}`} target="_blank" rel="noopener noreferrer" className={classes.socialText}>
                  <div className={classes.socialMedia}>
                    <IconButton aria-label={key}>
                      <Icon style={{ color: 'white' }} fontSize="large" />
                   </IconButton>
                   <Typography variant="h5" className={classes.socialText} >
                    {key}
                   </Typography>
                  </div>
                </a>
              )
            })
            }

        </CardContent>
      </Card>
      )
    }
    else {
      return("")
    }
  }


  return (
    <SocialCards/>
  )
}
