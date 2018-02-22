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
             <Navbar >
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">
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
        Home
      </NavItem>
      <NavItem eventKey={2} href="#">
        About
      </NavItem>
      <NavItem eventKey={2} href="#">
        Products
      </NavItem>
      <NavItem eventKey={2} href="#">
        Contact
      </NavItem>
      <NavItem eventKey={2} href="#">
        <Link  class="login"to="/Login">  
          LOGIN
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