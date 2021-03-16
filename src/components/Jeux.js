import React, { Component } from "react";

import "./jeux.css";

import { Card, Button, CardDeck, Container} from "react-bootstrap";
import JeuxService from "../services/JeuxService";
import { Link } from "react-router-dom";
import { MDBView, MDBMask } from "mdbreact";

export default class Jeux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jeux: [],
    }
    this.addJeux = this.addJeux.bind(this);
  }

  componentDidMount() {
    JeuxService.getJeux().then((res) => {
      this.setState({ jeux: res.data });
      
    });
  }

  addJeux(){
    this.props.history.push('/det');
  }

  render() {

    const styles = {
      b1:"mt-3",
      b2:"block-example border border-primery",

    }


    return (
      <Container>
        <CardDeck>
            { this.state.jeux.map(jeu =>
            <Card style={{ minWidth: "15rem"}} bg="dark" variant="dark" className={`${styles.b1} ${styles.b2} ${styles.b3}`}>
              <Link to="/det">
                <MDBView hover zoom>
                  <Card.Img  variant="top" src={"images/"+jeu.image} alt={jeu.nom} className="img-fluid" />
                  <MDBMask className="flex-center" overlay="grey-strong">
                  </MDBMask>
                </MDBView>
              </Link>
              <Card.Body key={jeu.id}>
                <Card.Title style={{ color: "white", textAlign:"center" }}>{jeu.nom}</Card.Title>
                <Card.Text style={{ color: "white" }}>
                    {jeu.prixHT} €
                  </Card.Text>

                  <Card.Text style={{ color: "white" }}>
                    {jeu.tva.taux} €
                  </Card.Text>

                  <Button variant="success" className="btn-card" onclick={this.addJeux}>Ajouter à panier</Button>
                </Card.Body>
            </Card>
            )}
        </CardDeck>    
    </Container>
      );
    } 
}
