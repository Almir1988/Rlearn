import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem} from 'react-bootstrap';

class Header extends React.Component{

       render()
       {

        return(
           <div>
            <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#app">RestApi task</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} >
      <Link to='/User'>
      Users
              </Link>
      </NavItem>
      <NavItem eventKey={2} >
      <Link to='/Product'>
             Products
              </Link>
      </NavItem>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>;
          </div>
        );
       }


}
export default Header;