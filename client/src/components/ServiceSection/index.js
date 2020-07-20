import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { ExpandMore } from "@material-ui/icons";
import { Paper, Avatar } from "@material-ui/core";
import background from "../../assets/images/background2.jpg";
import design from "../../assets/images/design.png";
import design2 from "../../assets/images/design2.png";
import googleMaps from "../../assets/images/googleMaps.png";
import googleAds from "../../assets/images/googleAds.png";
import "./serviceSection.css";

const useStyles = makeStyles((theme) => ({
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
    <div className="serviceSection">
      <StylePaper className={classes.paper}>
        <h1 className={classes.title}>Our Services</h1>
      </StylePaper>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar alt="design" src={design} />
          <Typography className={classes.heading}>
            Web Design and Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar alt="redesign" src={design2} />
          <Typography className={classes.heading}>Web Redesign</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar alt="maps SEO" src={googleMaps} />
          <Typography className={classes.heading}>Local SEO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Avatar alt="Google Ads" src={googleAds} variant="rounded" />
          <Typography className={classes.heading}>Google Ads</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ServiceSection;
