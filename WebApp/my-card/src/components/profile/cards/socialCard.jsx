import React from 'react'

import { Card, CardContent, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkIcon from '@material-ui/icons/Language';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import TikTokIcon from '../../../assets/socialmedialogos/tiktok.png'
import SpotifyIcon from '../../../assets/socialmedialogos/spotify.png'
import SoundCloudIcon from '../../../assets/socialmedialogos/soundcloud.png'
import TwitchIcon from '../../../assets/socialmedialogos/twitch.png'
import SnapchatIcon from '../../../assets/socialmedialogos/snap.png'

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
  },
  icon: {
    flex: "0 0 auto",
    color: "rgba(0, 0, 0, 0.54)",
    padding: "12px",
    overflow: "visible",
    fontSize: "1.5rem",
    textAlign: "center",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "50%",
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
    Website: LinkIcon,
    Mail: MailIcon,
    WhatsApp: WhatsAppIcon,
  };

  const pngList = {
    TikTok: TikTokIcon,
    Spotify: SpotifyIcon,
    SoundCloud: SoundCloudIcon,
    Twitch: TwitchIcon,
    Snapchat: SnapchatIcon
  }

  const webPages = {
    Facebook: "https://www.facebook.com/",
    Twitter: "https://www.twitter.com/",
    Instagram: "https://www.instagram.com/",
    YouTube: "https://www.youtube.com/",
    Reddit: "https://www.reddit.com/user/",
    LinkedIn: "https://www.linkedin.com/in/",
    Pinterest: "https://www.pinterest.com/",
    Website: "",
    Mail: "mailto: ",
    WhatsApp: "https://wa.me/+521",
    Twitch: "https://www.twitch.tv/",
    SoundCloud: "https://www.soundcloud.com/",
    Snapchat: "https://www.snapchat.com/add/",
    TikTok: "https://www.tiktok.com/@"
  };

  const RenderedIcon = (icon) => {
    const i = iconList[icon];
    if (i !== undefined) {
      const Icon = i;
      return (
        <IconButton>
          <Icon style={{ color: 'white' }} fontSize="large" />
        </IconButton>
      )
    }
    else {
      const image = pngList[icon]
      return(
        <img src={image} alt={image} classeName={classes.icon} style={{margin: "16px", height:"24px", width:"24pxs"}}/>
      )
    }
  }

  function SocialCards(){
    var socialMedia = props['Social'];
    if (Object.entries(socialMedia).length > 0){
      return(
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>

            {Object.entries(socialMedia).map(([key, value]) => {
              const icon = RenderedIcon(key)
              return(
                <a key={key} href={[webPages[key] + value]} target="_blank" rel="noopener noreferrer" className={classes.socialText}>
                  <div className={classes.socialMedia}>
                    { icon }
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
