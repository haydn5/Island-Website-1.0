import React from "react"

import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import { Link } from 'gatsby'

import logo from "../images/logo-2x-new.png"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
      
      <div className="container">
        <Navbar className="navbar  navbar-expand-md navbar-light" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          
            <Link className="navbar-brand">
              <img src={logo} alt={'Beyond Napa Valley'} className="imgFullCol" width="200" />
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav text-center ml-auto">
              <ul className="navbar-nav  text-center">
	              
                <li><Link to="/about-the-book/" className="nav-link" activeClassName="active">About the Book</Link></li>
                <li><Link to="/about-the-author/" className="nav-link" activeClassName="active">About the Author</Link></li>
                <li><Link to="/contact/" className="nav-link" activeClassName="active">Contact</Link></li>
              </ul>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
        </div>
      </>
    );
  }
}
