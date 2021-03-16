import React, {Component} from "react";

import "./jeux.css";

import { Navbar, Container, Col } from "react-bootstrap";

export default class Footer extends Component {
  render() {
      let anné = new Date().getFullYear();
    return (
       <Navbar className="foot" bg="dark" variant="dark">
           <Container>
               <Col lg={12} className="text-center text-muted">
                    <div>Copyright @{anné} -Projet_CDA</div>
               </Col>
           </Container>
       </Navbar> 
    );
  }
}

