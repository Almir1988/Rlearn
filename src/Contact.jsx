import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem,Jumbotron,Button,FormGroup,Form,Col,FormControl,ControlLabel,Row,Grid} from 'react-bootstrap';4
import './Style.css';
import Footer from './Footer.jsx'
import './Contact.css'

class Contact  extends React.Component{ 

       render()
       {
           return(

            <div>
               <div className="container" >
               <Grid className="Pos">
<Row className="show-grid">
    <Col  className="ColPos1"xs={12} md={8}>
    <h3>CONTACT US</h3>
<Form  horizontal>
<FormGroup controlId="FirstName" >
<Col componentClass={ControlLabel} xs={2}>

</Col>
<Col xs={10}>
<FormControl type="text" name="FirstName" placeholder="FirstName:" />
</Col>
</FormGroup>
<FormGroup controlId="LastName">
<Col componentClass={ControlLabel} xs={2}>
</Col>
<Col xs={10}>
<FormControl type="text" name="LastName" placeholder="LastName:"/>
</Col>
</FormGroup>
<FormGroup controlId="Email" >
<Col componentClass={ControlLabel} xs={2}>

</Col>
<Col xs={10}>
<FormControl type="email"  name="Email" placeholder="Email:" />
</Col>
</FormGroup>
<FormGroup controlId="Email" >
<Col xs={2}>

</Col>
<Col xs={10}>
<FormControl componentClass="textarea"  type="textarea"  name="Message" placeholder="Message:" />
</Col>
</FormGroup>
<FormGroup>
<Col smOffset={2} xs={10}>

<Button type="submit" bsStyle="info">Send</Button>
</Col>
</FormGroup>
</Form>
    </Col>
    <Col className="ColPos2" xs={6} md={4}>
    <h1>Our office</h1>
<p>Twitter, Inc.
795 Folsom Ave, Suite 600
San Francisco, CA 94107
P: (123) 456-7890
Full Name
first.last@example.com</p>
    </Col>
</Row>
</Grid>
          </div>
          
              <Footer/>
              
              </div>
           );
       }



}

export default Contact