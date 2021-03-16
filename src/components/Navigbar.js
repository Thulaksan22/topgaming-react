import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

import "./jeux.css"

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default class Navigbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Link to={"/"} className="navbar-brand">
          Top Gaming
        </Link>
        
        <Nav className="mr-auto">
          <Link to={"/"} className="nav-link">Accueil</Link>
          <NavDropdown title="Catégories" id="basic-nav-dropdown">
            <NavDropdown.Item to={""}>Action</NavDropdown.Item>
            <NavDropdown.Item to={""}>Aventure</NavDropdown.Item>
            <NavDropdown.Item to={""}>Sport</NavDropdown.Item>
            <NavDropdown.Item to={""}>Course</NavDropdown.Item>
            </NavDropdown>
            <Link to={"list"} className="nav-link">Contact</Link>
        </Nav>
        <Nav>
              <Link to={"add"} className="nav-link"><FontAwesomeIcon icon={faCartArrowDown} />Panier <span class='badge badge-warning' id='lblCartCount'> 0 </span> </Link>
              <Link to={"insc"} className="nav-link"><FontAwesomeIcon icon={faUser} /> Inscription</Link>
              <Link to={"conn"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt} /> Connexion</Link>      
        </Nav>    
      </Navbar>
    );
  }
}


