import React, { useEffect } from "react";
import HubspotForm from "react-hubspot-form";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Phone, Email, Facebook, Twitter, LinkedIn } from "@material-ui/icons";
import imageLogo from "../../assets/images/mainLogo.png";
import background from "../../assets/images/mainBackground.jpg";

const ContactForm = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      // direction: "row",
      // [theme.breakpoints.up("sm")]: {
      //   direction: "column",
      // },
    },
    loading: {
      display: "flex",
      alignContent: "center",
      color: "#e78200",
      margin: "200px",
    },
    paper: {
      padding: "10px",
      marginTop: "60px",
      // display: "grid",
      // gridTemplateColumns: "repeat(12, 1fr)",
      // gridGap: "10px",
      width: "100%",
      backgroundImage: `linear-gradient(to right, rgba(5, 5, 5, 1), rgba(5, 5, 5, 0)), url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      backgroundAttachment: "fixed",

      color: "#fff",
    },
    paperContainer: {},
    title: {
      fontFamily: "'Michroma', sans-serif",
      color: "#7e7e7e",
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("600")]: {
        color: "#fff",
      },
    },
    form: {
      // [theme.breakpoints.up("sm")]: {
      //   gridColumn: "span 6",
      // },
      // [theme.breakpoints.down("xs")]: {
      //   gridColumn: "span 12",
      // },
    },
    contactInfo: {
      // [theme.breakpoints.up("sm")]: {
      //   gridColumn: "span 6",
      // },
      // [theme.breakpoints.down("sm")]: {
      //   gridColumn: "span 12",
      // },
    },
    logo: {},
    hubspot: {
      // [theme.breakpoints.up("sm")]: {
      //   gridColumn: "span 6",
      // },
      // [theme.breakpoints.down("sm")]: {
      //   gridColumn: "span 12",
      // },
    },
    icon: {
      color: "#fff",
    },
    socialMedia: {
      marginTop: theme.spacing(2),
      fontSize: "30pt",
    },
  }));

  const classes = useStyles();
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container xs={12} spacing={3} className={classes.root}>
        <Grid item container xs={12} sm={6} style={{ height: "100%" }}>
          <Grid item xs={1} />
          <Grid item xs={3} justify="flex-end">
            <img
              src={imageLogo}
              width="80px"
              alt="Ignite Developers"
              className={classes.logo}
            />
          </Grid>
          <Grid item xs={8} justify="flex-start">
            <Typography variant="h4" className={classes.title}>
              IgniteDev
            </Typography>
          </Grid>
          <Grid item container xs={12} justify="center">
            <Grid item xs={8}>
              <List>
                <ListItem alignItems="center">
                  <ListItemIcon>
                    <Phone className={classes.icon} />
                  </ListItemIcon>
                  <ListItemLink>
                    <ListItemText primary="Phone: (407) 555-5555" />
                  </ListItemLink>
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemIcon>
                    <Email className={classes.icon} />
                  </ListItemIcon>
                  <ListItemLink>
                    <ListItemText primary="Email: Info@IgniteDevelopers.com" />
                  </ListItemLink>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} id="contact-form">
          <Typography variant="h4">Free Consultation</Typography>

          <HubspotForm
            className={classes.hubspot}
            portalId="8012263"
            formId="549ef012-119a-4ab5-88b8-f2aca8fe11ce"
            onSubmit={() => console.log("Submit!")}
            onReady={(form) => console.log("Form ready!")}
            loading={
              <div className={classes.root}>
                <CircularProgress color="#e78200" />
              </div>
            }
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactForm;
