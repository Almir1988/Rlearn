import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem} from 'react-bootstrap';
import './Header.css';


class Header extends React.Component{
  
  
  
  render()
       {
        return(
           <div className="position">
             <Navbar   collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link className="logo" to="/">
       LOGO
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
    </Nav>
    <Nav pullRight>
      <NavItem >
      <Link  className="login" to="/Login">
       
      </Link>
      </NavItem>
      <Nav pullRight>
      <NavItem eventKey={1} href="#">
      <Link  className="login"to="/Home">  
          Home
        </Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <Link  class="login"to="/About">  
          About
        </Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
        Products
      </NavItem>
      <NavItem eventKey={2} href="#">
      <Link  class="login"to="/Contact">  
          Contact
        </Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
        <Link  class="login"to="/Login">  
          Sign In
        </Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
        <Link className="login"to="/Registration">  
          Sign Up
        </Link>
      </NavItem>
    </Nav>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
          </div>
          
        );
       }


}
export default Header;