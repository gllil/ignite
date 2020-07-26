import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper, Grid } from "@material-ui/core";
import background from "../../assets/images/background2.jpg";
import design from "../../assets/images/design.png";
import design2 from "../../assets/images/design2.png";
import design3 from "../../assets/images/design3.jpg";
import design4 from "../../assets/images/design4.jpg";
import googleMaps from "../../assets/images/googleMaps.png";
import googleAds from "../../assets/images/googleAds.png";

import "./serviceSection.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "60px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
    color: "#e78200",
    margin: "8px 10px",
  },
  accordion: {},
  paper: {
    backgroundImage: `linear-gradient(to right, rgba(5, 5, 5, 1), rgba(5, 5, 5, 0)), url(${background})`,
    backgroundSize: "cover",
    background: "center 65%",
  },
  title: {
    color: "#ffffff",
    textAlign: "left",
  },
  services: {
    marginTop: "10px",
    marginRight: "0px",
    marginLeft: "8px",
    alignItems: "center",
    width: "100%",
  },
  serviceItem1: {
    height: "100%",
    backgroundImage: `url(${design3})`,
    backgroundColor: "rgba(5,5,5,0.7)",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    background: "center",
    transition: theme.transitions.create(["backgroundImage"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      backgroundImage: "linear-gradient(top,  #333, #e78200)",
    },
  },
  serviceItem2: {
    height: "100%",
    backgroundImage: `url(${design4})`,
    backgroundColor: "rgba(5,5,5,0.7)",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    background: "center center",
    transition: theme.transitions.create(["backgroundImage"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      backgroundImage: "linear-gradient(top,  #333, #e78200)",
    },
  },
  serviceItem3: {
    height: "100%",
    backgroundImage: `url(${googleMaps})`,
    backgroundColor: "rgba(5,5,5,0.7)",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    background: "center",
    transition: theme.transitions.create(["backgroundImage"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      backgroundImage: "linear-gradient(top,  #333, #e78200)",
    },
  },
  serviceItem4: {
    height: "100%",
    backgroundImage: `url(${googleAds})`,
    backgroundColor: "rgba(5,5,5,0.7)",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    background: "center",
    transition: theme.transitions.create(["backgroundImage"], {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      backgroundImage: "linear-gradient(top,  #333, #e78200)",
    },
  },
  serviceItemTitle: {
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  serviceDescription: {
    padding: "10px",
    margin: "5px",
    textAlign: "center",
    color: "#fff",
  },
}));

const StylePaper = withStyles({
  root: {
    backgroundImage: "linear-grandient(45deg, #e78200, #ffffff)",
    padding: "20px",
  },
})(Paper);

const ServiceSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StylePaper className={classes.paper}>
        <Typography variant="h4" className={classes.title}>
          Our Services
        </Typography>
      </StylePaper>
      <div className={classes.services}>
        <Grid container xs={12} spacing={2} justify="space-between">
          <Grid item xs={12} sm={3} alignContent="center" justify="center">
            <Paper className={classes.serviceItem1}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.serviceItemTitle}>
                    Web Design and Development
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    paragraph
                    variant="h6"
                    className={classes.serviceDescription}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.serviceItem2}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.serviceItemTitle}>
                    Web Redesign
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    paragraph
                    variant="h6"
                    className={classes.serviceDescription}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.serviceItem3}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.serviceItemTitle}>
                    Local SEO
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    paragraph
                    variant="h6"
                    className={classes.serviceDescription}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.serviceItem4}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.serviceItemTitle}>
                    Google Ads
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    paragraph
                    variant="h6"
                    className={classes.serviceDescription}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ServiceSection;
