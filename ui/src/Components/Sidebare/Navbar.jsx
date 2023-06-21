import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="black">
      <Navbar.Toggle
        aria-controls="navbarscroll"
        data-bs-target="#navbarscroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <NavLink eventKey="1" as={Link} to="/">
            <i className="fa fa-bell fa-large"></i>
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/about">
            <i class="fa fa-user fa-large"></i>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
