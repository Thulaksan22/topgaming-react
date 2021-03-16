import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { Card, Form, Table, Button } from "react-bootstrap";
import JeuxService from "../services/JeuxService";

export default class Panier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jeux: [],
    };
  }

  componentDidMount(){
    JeuxService.getJeux().then((res) => {
      this.setState({ jeux: res.data});
    })
  }

  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>
          <FontAwesomeIcon icon={faUser} /> Panier{" "}
        </Card.Header>
        <Form>
          <Card.Body>
            <Form.Group controlId="formBasicNom">
              <Table striped bordered hover style={{ color: "white" }}>
                <thead>
                  <tr>
                    <th>Jeu</th>
                    <th>Prix HT</th>
                    <th>Quantite</th>
                    <th>Tva</th>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {             
                    this.state.jeux.map(
                      jeu => 
                      <tr key={jeu.id}>
                        <td>{jeu.nom}</td>
                        <td>{jeu.prixht}</td>
                        <td>{jeu.quantite}</td>
                        <td>{jeu.tva.taux}</td>
                        <td><Button></Button></td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>
            </Form.Group>
          </Card.Body>
        </Form>
      </Card>
    );
  }
}
