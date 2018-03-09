import React from 'react';
import {Form,FormGroup,Button,Jumbotron,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass,HelpBlock} from 'react-bootstrap';
import Header from './Header.jsx';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {AddProduct} from './actions/actions'
class PostProducts extends React.Component {


      constructor(props)
      { 
            super(props);
            this.state={
              ProductName:'',
              Quantity:''
            }
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

         render()
         {
          const { dispatch} = this.props
             return(
               
              <div className="container">



              <Jumbotron>  
                <li><Link to='/Product'>RETURN TO PRODUCTS</Link></li>
              </Jumbotron>
   
   


                <Form   horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="ProductName" placeholder="ProductName" value={this.state.ProductName} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="Quantity" placeholder="Quantity"  value={this.state.Quantity} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} xs={10}>
    
    <Button type="submit" bsStyle="info" onClick={() =>dispatch(AddProduct(this.state,this.props.history))}>Add Product</Button>
    {this.state.msg && <HelpBlock>{this.state.msg}</HelpBlock>}
    </Col>
  </FormGroup>
</Form>

</div>
);

  }
}

export default withRouter(connect()(PostProducts));










