import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem,Jumbotron,Button,FormGroup,Form,Col,FormControl,ControlLabel} from 'react-bootstrap';4
import './Style.css';
import Footer from './Footer.jsx'

class Contact  extends React.Component{ 

       render()
       {
           return(
     <div>
          <div className="container" >
         <h1>Contact Us</h1>


      
         <Form  className="ContactStyle" horizontal>
  <FormGroup controlId="FirstName" >
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="FirstName" placeholder="FirstName" />
    </Col>
  </FormGroup>
  <FormGroup controlId="LastName">
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="LastName" placeholder="LastName"/>
    </Col>
  </FormGroup>
  <FormGroup controlId="Email" >
    <Col componentClass={ControlLabel} xs={2}>
    
    </Col>
    <Col xs={10}>
      <FormControl type="email"  name="Email" placeholder="Email" />
    </Col>
  </FormGroup>
  <FormGroup controlId="message">
    <Col componentClass={ControlLabel} xs={2}>
    
    </Col>
    <Col xs={10}>
    <textarea placeholder="Message" className="ContactMessage">
    </textarea>
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} xs={10}>
   
    <Button type="submit" bsStyle="info">Send</Button>
    </Col>
  </FormGroup>
 
  
</Form>

          </div>
          <div>
              
              <Footer/>
              </div>
</div>
           );
       }



}

export default Contact