import React from "react";
import { Paper, Button, Typography, Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import background from "../../assets/images/background3.jpg";
import "./mainSection.css";

const MainSection = () => {
  const StyleButton = withStyles({
    root: {
      background: "#e78200",
      color: "#ffffff",
      margin: "30px 0px",
    },
  })(Button);
  const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundImage: `linear-gradient(to right, rgba(5, 5, 5, 1), rgba(5, 5, 5, 0)), url(${background})`,
      backgroundSize: "cover",
      background: "center center",
      padding: "20px",

      width: "100%",
    },
    title: {
      color: "#ffffff",
      margin: "30px 0px",
    },
    paragraph: {
      color: "#ffffff",
      margin: "30px 0px",
      fontSize: "15pt",
    },
  }));
  const classes = useStyles();
  return (
    <Grid container xs={12}>
      <Paper className={classes.paper}>
        <Grid item xs={6}>
          <Typography variant="h2" className={classes.title}>
            Easy And Beautiful Web Design
          </Typography>

          <Typography variant="p" className={classes.paragraph}>
            People friendly Nerds that listen. We'll help you make your online
            presence professional and marketable.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <StyleButton size="large" variant="contained" href="#contact-form">
            Free Consultation
          </StyleButton>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default MainSection;
