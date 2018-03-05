import React from 'react';
import {Link,withRouter} from "react-router-dom";
import {FormGroup,Col,Form,FormControl,Button,ControlLabel,Image,HelpBlock} from 'react-bootstrap';
import './LoginUser.css';
import Footer from './Footer.jsx';
import ProFileImg from './images/Profile.png';

class LoginUser extends React.Component {

    constructor(props)
    {
         super(props);
         this.state={
             username:'',
             password:'',
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
       
      if( this.state.username== "" || this.state.password== "")
      {
        this.setState({
          msg1:'Enter Username',
          msg2:'Enter Password'
        });
      }     
      
       
      
      if(val.username==="admin" && val.password ==="admin")
      {
         
         console.log('login successful');
         tr;
      }
      else
      { 
        console.log('login faild');
        this.props.history.push("/Login");
       
      }
   }
   handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
   render() {
      return (
        <div>
       <div className="container">  
        
       <div className="FormPosC">
       <h3>SIGN IN </h3>
           <Form  horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
    </Col>
    <Col sm={10}>
      <FormControl type="text" name="username" placeholder="username"  value={this.state.username} onChange={this.handleChange.bind(this)} />
      {this.state.msg1 && <HelpBlock className="Valid">{this.state.msg1}</HelpBlock>}
    </Col>
   
  </FormGroup>
  
  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
    </Col>
    <Col sm={10}>
      <FormControl type="password" name="password" placeholder="Password" value={this.state.password}  onChange={this.handleChange.bind(this)} />
      {this.state.msg2 && <HelpBlock className="Valid">{this.state.msg2}</HelpBlock>}
    </Col>
    
  </FormGroup>
  
  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit" bsStyle="info" onClick={this.validate}>Submit</Button>
    
    </Col>
  </FormGroup>
</Form>
           
</div>

</div>

           <Footer/>
          </div>
          
          
          
      );
   }
}
export default withRouter(LoginUser);