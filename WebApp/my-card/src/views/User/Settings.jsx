import React, { useState, useEffect } from 'react'

import firebase from '../../firebase/firebase'

import { Button, CssBaseline, Fab,FormControl, Grid, IconButton, InputLabel, Menu, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Appbar from '../../components/profile/appbar';

import SaveIcon from '@material-ui/icons/Save';
import ImageIcon from '@material-ui/icons/Image';
import ClearIcon from '@material-ui/icons/Clear';

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
    fontWeight: 'bold',
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
    top: '100px',
    zIndex: '2',
    backgroundColor: '#4A80F6',
    position: 'absolute',
    left: '100px',
    color: 'white',
  },
  backdrop: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: '24px',
    padding: '16px',
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
  }
}));

export default function Settings(props) {
  const classes = useStyles();

  const [user, setUser] = useState("empty")

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");

  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const [socialMedia, setSocialMedia] = useState({});
  const [unusedSocialMedia, setUnusedSocialMedia] = useState([]);

  const [imageMenu, setImageMenu] = useState("");

  useEffect(() => {
    firebase.getCurrentUser().then(setUser)
  }, [])

  useEffect(() => {
    if (user === undefined){
      window.location.replace("/");
    }
    else if (user !== "empty") {
      setUrl(user.Information['Profile']);
      setName(user.Information['Name']);
      setTitle(user.Information['Title']);
      setAbout(user.Share['AboutMe']);
      setSocialMedia(user.Share['Social']);
    }
  }, [user])

  const handleProfileImageChange = e => {
    const file = e.target.files[0];

    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setProfileImage(file);
        //handleProfileImageUpload();
      } else {
        console.log("error");
        setError("Please upload an image.");
      }
    }
    closeMenu()
  };

  const handleCoverImageChange = e => {
    const file = e.target.files[0];

    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("");
        setCoverImage(file);
        //handleProfileImageUpload();
      } else {
        console.log("error");
        setError("Please upload an image.");
      }
    }
    closeMenu()
  };

  useEffect(() => {
    if (profileImage != null) { handleProfileImageUpload() }
  }, [profileImage])

  useEffect(() => {
    if (coverImage != null) { handleCoverImageUpload() }
  }, [coverImage])

  const handleProfileImageUpload = () => {
    if (profileImage) {                                                           // add to profileImage folder in firebase
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
      setError("Please choose image file");
    }
  };

  const handleCoverImageUpload = () => {
    if (coverImage) {                                                           // add to profileImage folder in firebase
      const uploadTask = firebase.storage.ref(`Users/${user.ID}/cover/${coverImage.name}`).put(coverImage);
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
            .ref(`Users/${user.ID}/cover/`)
            .child(coverImage.name)                                             // Upload the file and metadata
            .getDownloadURL()                                                     // get download url
            .then(url => {
              firebase.db.collection('Users').doc(user.ID).update({'Information.Cover' : url})
              setProgress(0);
            });
        }
      );
    } else {
      setError("Please choose image file");
    }
  };

  const handleSaveData = () => {
    // handleProfileImageUpload();
    document.getElementById("saveButton").innerHTML = "Saving..."
    firebase.db.collection('Users').doc(user.ID)
    .update({
      'Information.Name' : name,
      'Information.Title' : title,
      'Share.AboutMe' : about,
      'Share.Social' : socialMedia
    })
    setTimeout(() => {  props.history.replace('/'); }, 1000);
  }

  const socialArray = [
    'Facebook',
    'Twitter',
    'Instagram',
    'YouTube',
    'Reddit',
    'LinkedIn',
    'Pinterest',
    'Website',
    'Mail',
    'WhatsApp',
    'Twitch',
    'SoundCloud',
    'Snapchat',
    'TikTok',
  ];

  useEffect(() => {
    if (socialMedia !== {}) {
      var newMap = [];
      var iJ = 0;
      for (var iI = 0; iI < 14; iI++){
        if (!socialMedia.hasOwnProperty(socialArray[iI])) {newMap[iJ++] = socialArray[iI]}
      }

      setUnusedSocialMedia(newMap);

    }
  }, [socialMedia])

  const updateField = e => {
    setSocialMedia({
      ...socialMedia,
      [e.target.name]: e.target.value
    });
  };

  const newSocialField = e => {
    setSocialMedia({
      ...socialMedia,
      [e.target.value]: ""
    })
  }

  function deleteSocialMedia(socialName, e) {
    var newMap = {};
    Object.keys(socialMedia).forEach((item, value) => {
      if (socialName !== item) {
        newMap[item] = socialMedia[item];
      }
    });

    setSocialMedia(newMap);
  }

  const openMenu = (event) => {
    setImageMenu(event.currentTarget)
  }

  const closeMenu = () => {
    setImageMenu(null)
  }

  if (user === "empty") {
    return (<div></div>)
  }

  function NewSocialMedia(){
    if (unusedSocialMedia.length > 0) {
      return(
        <div key="newSocialKey" id="newSocialKey" style={{display: 'flex'}}>

        <FormControl variant="outlined" className={classes.formControl} >
          <InputLabel id="newSocialKey"> Type </InputLabel>
          <Select label="Type"
            value="" name="" onChange={newSocialField} >
            {
              unusedSocialMedia.map((social, index) =>
              <MenuItem key={index} value={social} >{social}</MenuItem>)
            }
          </Select>
        </FormControl>

        <TextField className={classes.textfield} name="newSocialKey" fullWidth id="newSocialKey" key="newSocialKey" label="Choose type first" variant="outlined" disabled
        value="" />
        <IconButton aria-label="delete" name="newSocialKeySave" className={classes.margin} style={{padding: '0'}} >
          {/* <AddIcon fontSize="small" /> */}
        </IconButton>

        </div>


      )
    }
    else {
      return ("")
    }

  }

  return (
    <div className={classes.root} style={{paddingBottom: '86px'}}>
    <Appbar Color="#4A80F6" Title='Edit Profile' Margin='12px'/>

      <CssBaseline />
        <Grid container direction="column" justify="center" alignItems="flex-start">
          <Grid item xs={12} style ={{alignSelf: 'center', position: 'relative'}}>

            <img src={url} alt="ProfilePicture" className={classes.profileImage} />

            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu} variant="contained" component="label" className={classes.uploadPhotoIcon}>
              <ImageIcon/>
            </IconButton>
            <Menu
               id="simple-menu"
               anchorEl={imageMenu}
               keepMounted
               open={Boolean(imageMenu)}
               onClose={closeMenu}
            >
            <MenuItem>
                <Button component="label" disabled>
                  Edit Photo
                </Button>
              </MenuItem>
              <MenuItem>
                <Button component="label" >
                  Profile
                  <input type="file" onChange={handleProfileImageChange} style={{ display: "none" }} />
                </Button>
              </MenuItem>
              <MenuItem>
              <Button component="label" >
                  Cover
                  <input type="file" onChange={handleCoverImageChange} style={{ display: "none" }} />
                </Button>
              </MenuItem>
            </Menu>

            <div style={{ height: "10px", top: '-10px', position: 'relative' }}>
              <p style={{color:"red"}}>{error}</p>
              {progress > 0 ? <progress value={progress} max="100" /> : ""}
            </div>
          </Grid>

          <div className={classes.backdrop}>

            {/* Personal Information */}
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

            {/* About Me */}
            <Grid item xs={12} style={{width: '95%'}}>
              <Typography variant="h5" className={classes.sectionTitle} >
                About Me
              </Typography>
              <div>
                <TextField multiline rows={4} className={classes.textfield} fullWidth id="AboutMe" label="AboutMe" variant="outlined" value={about} onChange={e => setAbout(e.target.value)}/>
              </div>
            </Grid>

            {/* Social Media */}
            <Grid item xs={12} style={{width: '95%'}}>
              <Typography variant="h5" className={classes.sectionTitle} >
                Share Links
              </Typography>

              <div id="socialMedias">

                  {Object.entries(socialMedia).map(([socialKey, value]) => {
                    return(

                      <div key={socialKey} id={socialKey} style={{display: 'flex'}}>

                        <FormControl variant="outlined" className={classes.formControl} disabled>
                          <InputLabel id={socialKey}>Type</InputLabel>
                          <Select label="Type"
                            value={socialKey} name={value} >
                            <MenuItem key={socialKey} value={socialKey} >{socialKey}</MenuItem>
                          </Select>
                        </FormControl>

                        <TextField className={classes.textfield} name={socialKey} fullWidth id={socialKey} key={[socialKey + "tf"]} label="Your Account" variant="outlined"
                        value={value} onChange={updateField}/>
                        <IconButton aria-label="delete" name={[socialKey + "delete"]} className={classes.margin} style={{padding: '0'}}  onClick={(e) => deleteSocialMedia(socialKey, e)}>
                          <ClearIcon fontSize="small" />
                        </IconButton>

                      </div>

                    )
                  })}

              </div>


                <NewSocialMedia />


            </Grid>

          </div>
        </Grid>
        <Fab id='saveButton' onClick={handleSaveData} color="primary" className={classes.fab} variant="extended">
          <SaveIcon className={classes.extendedIcon} />
          Save
        </Fab>
    </div>
  )
}
