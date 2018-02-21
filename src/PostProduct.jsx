import React from 'react';
import {Form,FormGroup,Button,Jumbotron,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass,HelpBlock} from 'react-bootstrap';
import Header from './Header.jsx';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";


class PostProducts extends React.Component {


      constructor(props)
      { 
            super(props);
            this.state={


              ProductName:'',
              Quantity:''
            }

      }
      



      Transfer () {
       
        
      
        this.props.history.push("/");
      }

      AddProduct()
      { 
        const tr=this.Transfer();
        const body ={

          ProductName:this.state.ProductName,
          Quantity:this.state.Quantity
      };

      
      axios.post(`http://localhost:3000/Product`,body)
      .then(res =>this.setState({
        msg:'Product added successfully',
        ProductName:'',
        Quantity:'',
        tr
          
      }))
      .catch(err=>{

        debugger;
      })
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

         render()
         {

             return(
               
              <div className="container">



              <Jumbotron>  
                <li><Link to='/Product'>RETURN TO PRODUCTS</Link></li>
              </Jumbotron>
   
   


                <Form   horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    ProductName
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="ProductName" placeholder="ProductName" value={this.state.ProductName} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    Quantity
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="Quantity" placeholder="Quantity"  value={this.state.Quantity} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} xs={10}>
    <input type="submit" value="Submit"  onClick={this.AddProduct.bind(this)} />
    
    {this.state.msg && <HelpBlock>{this.state.msg}</HelpBlock>}
    </Col>
  </FormGroup>
</Form>

</div>
             );

         }
}

export default withRouter(PostProducts);










