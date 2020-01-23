import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

class AccordMenu extends Component {
  render() {
    return (
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
              History
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <NavLink to='/jshistory' activeClassName='is-active'>
                <h5>
                  Click here. Let&apos;s look at the history of JavaScript.
                </h5>
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='1'>
              Terminology
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>
              <NavLink to='/terms' activeClassName='is-active'>
                <h5>Click here. Glossary of Terms</h5>
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='2'>
              Resume: Keith Robinson
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='2'>
            <Card.Body>
              <NavLink to='/resume' activeClassName='is-active'>
                <h5>A little about KLR</h5>
              </NavLink>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
export default AccordMenu;
