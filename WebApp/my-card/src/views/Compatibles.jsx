import React, { useState } from 'react'

import { Container, CssBaseline, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/header';
import Footer from '../components/footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: "60vh",
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const sections = [
  { title: 'Compatible Phones', url: '/compatibility' },
];

const Brands = {
   "Apple (iPhone)" : [
    "iPhone 11 Pro Max",
    "iPhone 11 Pro",
    "iPhone 11",
    "iPhone XS Max",
    "iPhone XS",
    "iPhone XR",
    "iPhone SE (2020)"
  ],
  "Samsung Galaxy Note" : [
    "Note 10, Note 10+, Note 10+ 5G",
    "Note 9",
    "Note 8"
  ],
  "Samsung Galaxy S" : [
    "Galaxy S20, S20+, S20 Ultra",
    "Galaxy S10, S10+, S10e",
    "Galaxy S9, S9+",
    "Galaxy S8, S8+",
    "Galaxy S7, S7 Edge",
    "Galaxy S6, S6 Edge",
    "Galaxy S5, S5 Mini, S5 Neo"
  ],
  "Samsung Galaxy A": [
    "2019 models: A20e, A40, A50, A70",
    "2018 models: A6, A7, A8, A9",
    "2017 models: A3, A5",
    "2016 models: A3, A5"
  ],
  "Samsung Galaxy J" : [
    "2018 models: J4+, J6, J5, J3"
  ],
  "HTC": [
    "Most HTC phones between 2015-2019 will be compatible",
    "U19e, U12+, U12 Life",
    "Desire 12, Desire 12s (2017 model not compatible)",
    "U11, Life, +",
    "Exodus 1"
  ],
  "Google" : [
    "Pixel 4, 4 XL",
    "Pixel 3, 3 XL, 3a, 3a XL",
    "Pixel 2, 2XL",
    "Pixel, Pixel XL",
    "Nexus 5X",
    "Nexus 6P, 6"
  ],
  "Huawei" : [
    "P30, P30 Pro, P30 Lite",
    "P20, P20 Pro, P20 Lite",
    "P10, P10 Plus, P10 Lite"
  ],
  "OnePlus" : [
    "7, 7 Pro, 7 Pro 5G",
    "6, 6T",
    "5, 5T",
    "3, 3T",
    "One"
  ],
  "LG" : [
    "Q9",
    "One",
    "G8, G8s ThinQ",
    "G7, G7 ThinQ",
    "V50, V40",
    "V30, V35"
  ]
}

export default function CompatiblePhones() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
      <Header title="" sections={sections} />
        <div>
          <h1> Compatible Phones </h1>
          <h2> All phones with cameras that can read QR Codes. </h2>
          <br/>
          <h2> Phones with NFC Readers </h2>
          <List className={classes.listRoot} subheader={<li />}>
            {Object.entries(Brands).map((sectionId, arr) => {
              console.log(sectionId)
              return(
                <li key={`section-${sectionId[0]}`} className={classes.listSection}>
                  <ul className={classes.ul}>
                    <ListSubheader>{`${sectionId[0]}`}</ListSubheader>
                    {sectionId[1].map((item) => (
                      <ListItem key={`item-${sectionId}-${item}`}>
                        <ListItemText primary={`${item}`} />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              )
            })}
          </List>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
