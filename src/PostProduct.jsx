import React from 'react';
import {Form,FormGroup,Button,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass} from 'react-bootstrap';
import Header from './Header.jsx';

class PostProducts extends React.Component {
         render()
         {
             return(
                
                <Form  className="container" horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    ProductName
    </Col>
    <Col xs={10}>
      <FormControl type="text" placeholder="ProductName" />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    Quantity
    </Col>
    <Col xs={10}>
      <FormControl type="text" placeholder="Quantity" />
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

export default PostProducts;










