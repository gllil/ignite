import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  CssBaseline,
  useScrollTrigger,
  Slide,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Drawer,
  Grid,
} from "@material-ui/core";
import ImageLogo from "../../assets/images/mainLogo.png";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Home,
  Email,
  SupervisorAccount,
} from "@material-ui/icons";

const Navigation = (props) => {
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      // [theme.breakpoints.up("lg")]: {
      //   display: "none",
      // },
    },
    title: {
      flexGrow: 1,
      fontFamily: "'Michroma', sans-serif",
      color: "#7e7e7e",
    },
    phone: {
      color: "#e78200",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    drawer: {
      [theme.breakpoints.up("lg")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    navBar: {
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    logo: {
      textAlign: "center",
      backgroundImage: "linear-gradient(45deg, #333333 50%, #ffffff)",
    },
    contactUs: {
      backgroundImage: "#2EC4B6",
    },
    socialMedia: {
      marginTop: "5px",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  }));

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.logo}>
        <img src={ImageLogo} width="60px" alt="Ignite Developers" />
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemLink>
            <ListItemText primary="About Us" />
          </ListItemLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccount />
          </ListItemIcon>
          <ListItemLink>
            <ListItemText primary="Services" />
          </ListItemLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemLink>
            <ListItemText className={classes.contactUs} primary="Contact Us" />
          </ListItemLink>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Facebook />
          </ListItemIcon>
          <ListItemLink>
            <ListItemText primary="Facebook" />
          </ListItemLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LinkedIn />
          </ListItemIcon>
          <ListItemLink>
            <ListItemText primary="LinkedIn" />
          </ListItemLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Twitter />
          </ListItemIcon>
          <ListItemLink>
            <ListItemText primary="Twitter" />
          </ListItemLink>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const StyleAppBar = withStyles({
    root: {
      backgroundColor: "#ffffff",
      minHeight: 100,
      color: "7e7e7e",
      fontWeight: "bolder",
      paddingTop: "10px",
    },
  })(AppBar);

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <StyleAppBar position="fixed" className={classes.appBar}>
          <Container>
            <Toolbar className={classes.navBar}>
              <img src={ImageLogo} width="80px" alt="Ignite Developers" />
              <Typography variant="h4" className={classes.title}>
                IgniteDev
              </Typography>
              <Grid item container xs={6} direction="row" alignItems="flex-end">
                <Grid item container xs={12} justify="flex-end">
                  <Grid item xs={6} textAlign="right">
                    <Typography align="right" className={classes.phone}>
                      Call Us @ (407) 555-5555
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container xs={12} justify="flex-end">
                  <Grid
                    item
                    container
                    xs={6}
                    sm={8}
                    md={4}
                    justify="flex-end"
                    className={classes.socialMedia}
                    spacing={1}
                  >
                    <Grid item xs={6} />
                    <Grid item xs={2}>
                      <Facebook style={{ color: "#333" }} />
                    </Grid>
                    <Grid item xs={2}>
                      <Twitter style={{ color: "#333" }} />
                    </Grid>
                    <Grid item xs={2}>
                      <LinkedIn style={{ color: "#333" }} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* <IconButton
                edge="end"
                className={classes.menuButton}
                color="dark"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton> */}
            </Toolbar>
          </Container>
        </StyleAppBar>
      </HideOnScroll>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        {/* <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="right"
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden> */}
      </nav>
    </div>
  );
};

export default Navigation;
