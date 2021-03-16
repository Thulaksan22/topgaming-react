import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSave } from '@fortawesome/free-solid-svg-icons'


import { Card, Form, Button, Col } from "react-bootstrap";

export default class Inscription extends Component {


    constructor(props) {
        super(props);
        this.state = {nom:'', prenom:'', pseudo:''}
        this.formChange = this.formChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event){
        alert('Nom: '+this.state.nom+',Prenom: '+this.state.prenom+',pseudo: '+this.state.pseudo+', date de naissance: '+this.state.dateDnaiss);
        event.preventDefault();
    }

    formChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header><FontAwesomeIcon icon={faUser} /> Formulaire Inscription</Card.Header>
        <Form onSubmit={this.submitForm} id="inscFromId">
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control required
                  type="text"
                  value={this.state.nom}
                  onChange={this.formChange}
                  name="nom"
                  classname={"bg-dark text-white"}
                  placeholder="Entrez votre Nom"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicPrenom">
                <Form.Label>Prenom</Form.Label>
                <Form.Control required
                  type="text"
                  value={this.state.prenom}
                  onChange={this.formChange}
                  name="prenom"
                  classname={"bg-dark text-white"}
                  placeholder="Entrez votre Prenom"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicPseudo">
              <Form.Label>Pseudo</Form.Label>
              <Form.Control required
                type="text"
                value={this.state.pseudo}
                onChange={this.formChange}
                name="pseudo"
                classname={"bg-dark text-white"}
                placeholder="Entrez votre Pseudo"
              />
            </Form.Group>

            <Form.Group controlId="formBasicdateDnaiss">
              <Form.Label>Date de naissance</Form.Label>
              <Form.Control
                type="date"
                value={this.state.dateDnaiss}
                onChange={this.formChange}
                name="dateDnaiss"
                classname={"bg-dark text-white"}
                placeholder="JJ/MM/AAAA"
              />
            </Form.Group>

            <Form.Row>
              <Form.Group  as={Col} controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control 
                type="email" 
                name="mail" 
                placeholder="Enter email" />
              </Form.Group>

              <Form.Group  as={Col} controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" />
              </Form.Group>
            </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control required
                type="text"
                value={this.state.pseudo}
                onChange={this.formChange}
                name="pseudo"
                classname={"bg-dark text-white"}
                placeholder="Entrez votre address"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPseudo">
              <Form.Label>Ville</Form.Label>
              <Form.Control required
                type="text"
                value={this.state.pseudo}
                onChange={this.formChange}
                name="pseudo"
                classname={"bg-dark text-white"}
                placeholder="Entrez votre Ville"
              />
            </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="J'acceptes les conditions d'utilisation" />
            </Form.Group>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
          
             <Button size="sm" variant="success" type="submit">
             <FontAwesomeIcon icon={faSave} /> Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    );
  }
}
