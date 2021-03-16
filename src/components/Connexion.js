import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import { Card, Form, Button, Col } from "react-bootstrap";

export default class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = { nom: "", prenom: "", pseudo: "" };
    this.formChange = this.formChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    alert(
      "Nom: " +
        this.state.nom +
        ",Prenom: " +
        this.state.prenom +
        ",pseudo: " +
        this.state.pseudo +
        ", date de naissance: " +
        this.state.dateDnaiss
    );
    event.preventDefault();
  }

  formChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"} style={{ width: '50rem', margin:"auto" }}>
        <Card.Header>
          <FontAwesomeIcon icon={faSignInAlt} /> Connexion
        </Card.Header>
        <Form onSubmit={this.submitForm} id="inscFromId">
          <Card.Body>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="mail"
                placeholder="Entrez votre mail"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrez votre Mot de passe"
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Rester Connecter" />
            </Form.Group>

          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              <FontAwesomeIcon icon={faSignInAlt} /> Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
