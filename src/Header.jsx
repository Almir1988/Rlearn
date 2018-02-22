import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem} from 'react-bootstrap';
import Slider from './slider.jsx'
class Header extends React.Component{

       render()
       {

        return(
           <div className="container">
             <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>

      <Link to="/">
       Home
      </Link>
      
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
      <Link to="/Login">
       Login
      </Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          </div>
          
        );
       }


}
export default Header;