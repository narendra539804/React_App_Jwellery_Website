import React from "react";
import * as ReactBootStrap from "react-bootstrap";

import { BrowserRouter, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="sm"
        bg="secondary"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="/">
          Quantic
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <ReactBootStrap.Nav className="mr-auto ">
            <ReactBootStrap.Nav.Link href="/Earnings">
              Earnings
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/necklace">
              Necklace
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/sets">Sets</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/add">
              <i className="fas fa-plus-square"></i>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/dashboard">
              Dashboard
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
