import React, { useState, useEffect } from 'react'

import firebase from '../../firebase/firebase'

import { Button, Container, CssBaseline, Fab,FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Appbar from '../../components/profile/appbar';

import SaveIcon from '@material-ui/icons/Save';
import FolderIcon from '@material-ui/icons/Folder';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#F5F5F5'
  },
  profileImage: {
    borderRadius: '35%',
    objectFit: 'cover',
    height: '150px',
    width: '150px',
    //padding: '6px',
    alignSelf: 'center',
    position: 'relative',
    border: '6px solid white',
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
    zIndex: '1'
  },
  sectionTitle:{
    padding: '12px',
  },
  textfield:{
    margin: theme.spacing(1),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  uploadPhotoIcon: {
    // top: '100px',
    zIndex: '2',
    // backgroundColor: '#4A80F6',
    // position: 'absolute',
    // left: '100px',
  }
}));

export default function Settings() {
  const classes = useStyles();

  const [user, setUser] = useState("empty")

  const [profileImage, setProfileImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    firebase.getCurrentUser().then(setUser)
  }, [])

  useEffect(() => {
    if (user !== "empty") {
      setUrl(user.Information['Profile']);
      setName(user.Information['Name']);
      setTitle(user.Information['Title']);
      setAbout(user.Share['AboutMe']);
    }
  }, [user, url])

  if (user === "empty") {
    return (<div></div>)
  }

  const handleProfileImageChange = e => {
    console.log(e)
    const file = e.target.files[0];

    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setProfileImage(file);
      } else {
        console.log("error");
        setError("error please upload a image file");
      }
    }
  };

  const handleProfileImageUpload = () => {
    if (profileImage) {                                                            // add to profileImage folder in firebase
      const uploadTask = firebase.storage.ref(`Users/${user.ID}/profile/${profileImage.name}`).put(profileImage);
      uploadTask.on(                                                              // Listen for state changes, errors, and completion of the upload.
        "state_changed",
        snapshot => {                                                             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {                                                                // error function ....
          console.log(error);
          setError(error);
        },
        () => {                                                                   // complete function ....
          firebase.storage
            .ref(`Users/${user.ID}/profile/`)
            .child(profileImage.name)                                             // Upload the file and metadata
            .getDownloadURL()                                                     // get download url
            .then(url => {
              console.log(url);
              setUrl(url);
              firebase.db.collection('Users').doc(user.ID).update({'Information.Profile' : url})
              setProgress(0);
            });
        }
      );
    } else {
      setError("Error please choose an image to upload");
    }
  };

  const handleSaveData = () => {
    handleProfileImageUpload();
    firebase.db.collection('Users').doc(user.ID)
    .update({
      'Information.Name' : name,
      'Information.Title' : title,
      'Share.AboutMe' : about
    })

  }

  const socialArray = [
    'Facebook',
    'Twitter',
    'Instagram',
    'YouTube',
    'Reddit',
    'LinkedIn',
    'Pinterest',
    'Other'
  ];

  function SocialMedia(){
    var socialMedia = user.Share['Social'];
    if (socialMedia !== undefined){
      return(
        <div>

            {Object.entries(socialMedia).map(([key, value]) => {
              return(

                <div style={{display: 'flex'}}>

                  <FormControl variant="outlined" className={classes.formControl}>
                     <InputLabel id={key}>Type</InputLabel>
                     <Select
                       labelId="demo-simple-select-outlined-label"
                       id="demo-simple-select-outlined"
                       label="Type"
                       value={key}
                     >
                     {socialArray.map((social, index) =>
                       <MenuItem key={index} value={social} >{social}</MenuItem>
                     )}
                     </Select>
                  </FormControl>




                   <TextField className={classes.textfield} fullWidth id={key} label="Your Account" variant="outlined" value={value} />


                </div>

              )
            })
            }

        </div>
      )
    }
    else {
      return("")
    }
  }

  return (
    <div className={classes.root} style={{paddingBottom: '86px'}}>
    <Appbar Color="#4A80F6" Title='Edit Profile' Margin='12px'/>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} style ={{alignSelf: 'center', position: 'relative'}}>
            <img src={user.Information['Profile']}
                  alt="ProfilePicture"
                  className={classes.profileImage} />
            <Button onClick={handleProfileImageChange} label="Choose file" className={classes.uploadPhotoIcon}>
              <input type="file"  />
            </Button>

            <div style={{ height: "10px" }}>
              <p style={{color:"red"}}>{error}</p>
              {progress > 0 ? <progress value={progress} max="100" /> : ""}
            </div>
          </Grid>

          <Grid item xs={12} style={{width: '95%'}}>
            <Typography variant="h5" className={classes.sectionTitle} >
              Personal Information
            </Typography>
            <div>
              <TextField className={classes.textfield} fullWidth id="Name" label="Name" variant="outlined" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
              <TextField multiline rows={2} className={classes.textfield} fullWidth id="Title" label="Title" variant="outlined" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
          </Grid>

          <Grid item xs={12} style={{width: '95%'}}>
            <Typography variant="h5" className={classes.sectionTitle} >
              AboutMe
            </Typography>
            <div>
              <TextField multiline rows={4} className={classes.textfield} fullWidth id="AboutMe" label="AboutMe" variant="outlined" value={about} onChange={e => setAbout(e.target.value)}/>
            </div>
          </Grid>

          <Grid item xs={12} style={{width: '95%'}}>
            <Typography variant="h5" className={classes.sectionTitle} >
              Share Links
            </Typography>
            <SocialMedia />
          </Grid>

        </Grid>
        <Fab onClick={handleSaveData} color="primary" className={classes.fab} variant="extended">
          <SaveIcon className={classes.extendedIcon} />
          Save
        </Fab>
      </Container>
    </div>
  )
}