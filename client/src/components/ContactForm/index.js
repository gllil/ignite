import React from "react";
import HubspotForm from "react-hubspot-form";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Paper, Typography } from "@material-ui/core";
import imageLogo from "../../assets/images/mainLogo.png";
import background from "../../assets/images/mainBackground.jpg";

const ContactForm = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      alignContent: "center",
      color: "#e78200",
      margin: "200px",
    },
    paper: {
      padding: "20px",
      margin: "60px 0px",
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: "10px",
      flexGrow: 1,
      backgroundImage: `linear-gradient(to right, rgba(5, 5, 5, 1), rgba(5, 5, 5, 0)), url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
    paperContainer: {},
    title: {
      fontFamily: "'Michroma', sans-serif",
      color: "#7e7e7e",
    },
    form: {
      [theme.breakpoints.up("sm")]: {
        gridColumn: "span 6",
      },
      [theme.breakpoints.down("xs")]: {
        gridColumn: "span 12",
      },
      color: "#fff",
    },
    contactInfo: {
      [theme.breakpoints.up("sm")]: {
        gridColumn: "span 6",
      },
      [theme.breakpoints.down("xs")]: {
        gridColumn: "span 12",
      },
      textAlign: "center",
    },
    logo: {},
  }));

  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.form} style={{ gridColumnEnd: "span 6" }}>
        <h1>Free Consultation</h1>
        <HubspotForm
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
      </div>
      <div className={classes.contactInfo}>
        <img
          src={imageLogo}
          width="80px"
          alt="Ignite Developers"
          className={classes.logo}
        />
        <Typography variant="h4" className={classes.title}>
          IgniteDev
        </Typography>
      </div>
    </Paper>
  );
};

export default ContactForm;
