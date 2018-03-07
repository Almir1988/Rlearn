import React from 'react';
import { connect } from 'react-redux'
import {Link,withRouter} from "react-router-dom";
import {FormGroup,Col,Form,FormControl,Button,ControlLabel,HelpBlock} from 'react-bootstrap';
import './LoginUser.css';
import Footer from './Footer.jsx'
import './Style.css'
import {signIn} from './actions/actions'
class LoginUser extends React.Component {

    constructor(props)
    {
         super(props);
         this.state={
             username:'',
             password:''
    }
         
    }  
   
   
  
   handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });  
  }
  
   render() {

    const { dispatch } = this.props
      return (
        

        <div>
         <div className="container">
         <h1>Sign in</h1>
           <Form  className="FormPosC"horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
    </Col>
    <Col sm={10}>
      <FormControl type="text" name="username" placeholder="username"  value={this.state.username} onChange={this.handleChange.bind(this)} />
      {this.state.msg1 && <HelpBlock>{this.state.msg1}</HelpBlock>}
    </Col>
    
  </FormGroup>
  
  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
    </Col>
    <Col sm={10}>
      <FormControl type="password" name="password" placeholder="Password" value={this.state.password}  onChange={this.handleChange.bind(this)} />
      {this.state.msg2 && <HelpBlock>{this.state.msg2}</HelpBlock>}
    </Col>
    
  </FormGroup>

  
  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button bsStyle="info" onClick={() =>dispatch(signIn(this.state))}>Submit</Button>
      {this.state.msg3 && <HelpBlock>{this.state.msg3}</HelpBlock>}
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


export default  connect()(withRouter(LoginUser));