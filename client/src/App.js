import React from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import { Container, Grid } from "@material-ui/core";
import MainSection from "./components/MainSection";
import ServiceSection from "./components/ServiceSection";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        {/* <Grid container>
          <Grid xs={12}> */}
        <MainSection />
        {/* </Grid>
        </Grid>
        <Grid container> */}
        <ServiceSection />
        {/* </Grid>
        <Grid container> */}
        <ContactForm />
        {/* </Grid> */}
      </Container>
    </div>
  );
}

export default App;
