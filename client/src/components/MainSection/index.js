import React from "react";
import { Paper, Button } from "@material-ui/core";
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
    },
    title: {
      color: "#ffffff",
      margin: "30px 0px",
    },
    paragraph: {
      color: "#ffffff",
      width: "50%",
      margin: "30px 0px",
      fontSize: "15pt",
    },
  }));
  const classes = useStyles();
  return (
    <div className="mainSection">
      <Paper className={classes.paper}>
        <h1 className={classes.title}>Web Design Easy And Beautiful</h1>
        <p className={classes.paragraph}>
          People friendly Nerds that listen. We'll help you make your online
          presence professional and marketable.
        </p>
        <StyleButton size="large" variant="contained">
          Free Consultation
        </StyleButton>
      </Paper>
    </div>
  );
};

export default MainSection;
