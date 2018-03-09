import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {Nav,Navbar,NavDropdown,NavItem,MenuItem,Button} from 'react-bootstrap';
import './Header.css';


class Header extends React.Component{
  render()
       {
        const admin=this.props.admins.username;
        const SignOut=this.props.admins
        return(
           <div>


             <Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand componentClass="span">
      <Link className="login" to="/">
      WEBSITE
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  {!admin &&
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
  }

  {admin && 

<Nav pullRight>
<NavItem >
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
  <Button className="Navbtn" onClick={SignOut}><Link  className=""to="/Login">  
    Logout
  </Link></Button>
</NavItem>
</Nav>
</Nav>  
  }

  </Navbar.Collapse>
</Navbar>
          </div>
        );
       }
}


function mapStateToProps({admins}) {
  return {admins};
}
export default connect(mapStateToProps)(Header);