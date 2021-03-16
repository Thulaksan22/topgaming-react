import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Navigbar from "./components/Navigbar";
import Carossol from "./components/Carossol";
import Footer from "./components/Footer";
import Panier from "./components/Panier";
import Contact from "./components/Contact";
import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import Jeux from "./components/Jeux";
import DetailJeu from "./components/DetailJeu";

function App() {
  const marginTop={
    marginTop:"20px"
  };

  return (
    <Router>
        <Navigbar/>
          <Container>
            <Row>
              <Col lg={12} style={marginTop}>
                <Switch>
                  <Route exact path="/">
                    <Carossol/>
                    <Jeux/>
                    </Route>
                  <Route path="/add" exact component={Panier}/>
                  <Route path="/list" exact component={Contact}/>
                  <Route path="/insc" exact component={Inscription}/>
                  <Route path="/conn" exact component={Connexion}/>
                  <Route path="/det" exact component={DetailJeu}/>
                </Switch>
              </Col>
            </Row>
          </Container>

          <Footer/>
    </Router>
  );
}

export default App;
