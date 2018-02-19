import React from 'react';
import {Form,FormGroup,Button,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass} from 'react-bootstrap';
import Header from './Header.jsx';

class PostUser extends React.Component {
         render()
         {
             return(
                
                <Form className="container" horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    FirstName
    </Col>
    <Col xs={10}>
      <FormControl type="text" placeholder="FirstName" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    LastName
    </Col>
    <Col xs={10}>
      <FormControl type="text" placeholder="LastName" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    Email
    </Col>
    <Col xs={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

     <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} xs={2}>
    Password
    </Col>
    <Col xs={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  

  <FormGroup>
    <Col smOffset={2} xs={10}>
      <Button type="submit">Post</Button>
    </Col>
  </FormGroup>
</Form>

             );

         }
}

export default PostUser;










