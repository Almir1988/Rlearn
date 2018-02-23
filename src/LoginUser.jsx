import React from 'react';
import {Link,withRouter} from "react-router-dom";
import {FormGroup,Col,Form,FormControl,Button,ControlLabel} from 'react-bootstrap';
import './LoginUser.css';
import Footer from './Footer.jsx'

class LoginUser extends React.Component {

    constructor(props)
    {
         super(props);
         this.state={
           
             username:'',
             password:''      
         }
         this.validate=this.validate.bind(this);
    }


    Transfer () {

        this.props.history.push("/AdminControls");
      }
    
   validate()
   { 
    var tr=this.Transfer();
     var val={
       username:this.state.username,
       password:this.state.password
     }

      if(val.username==="admin" && val.password ==="admin")
      {
         
         console.log('login successful');
         
      }
      else
      {
      console.log('login faild');
      
      
      }

      tr;
    
   }
   handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
   render() {
      return (

        <div>
         <div className="container">

         <h1>Log into your account</h1>
           <Form  className="FormPos"horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      
    </Col>
    <Col sm={10}>
      <FormControl type="text" name="username" placeholder="username"  value={this.state.username} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
    </Col>
    <Col sm={10}>
      <FormControl type="password" name="password" placeholder="Password" value={this.state.password}  onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit" bsStyle="info" onClick={this.validate}>Submit</Button>
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
export default withRouter(LoginUser);