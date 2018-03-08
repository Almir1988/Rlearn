import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem,Button} from 'react-bootstrap';
import './Header.css';


class Header extends React.Component{
  render()
       {
        return(
           <div>
             <Navbar   collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand componentClass="span">
      <Link className="login" to="/">
      WEBSITE
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
      </NavItem >
      <Nav pullRight>
      <NavItem eventKey={1}  >
      <Link  className="login"to="/Home">  
          Home
        </Link>
      </NavItem >
      <NavItem eventKey={2}  >
      <Link  className="login"to="/About">  
          About
        </Link>
      </NavItem>
      <NavItem eventKey={2}  >
      <Link  className="login"to="/Products">  
        Products
        </Link>
      </NavItem>
      <NavItem eventKey={2} >
      <Link  className="login"to="/Contact">  
          Contact
        </Link>
      </NavItem>
      <NavItem eventKey={2}>
        <Button className="Navbtn"><Link  className=""to="/Login">  
          SIGN IN
        </Link></Button>
      </NavItem>
      <NavItem eventKey={2}  >
        <Button className="Navbtn"><Link className=""to="/Registration">  
          SIGN UP
        </Link></Button>
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