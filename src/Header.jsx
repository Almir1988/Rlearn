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
       HOME
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
       LOGIN  
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