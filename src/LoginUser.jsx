import React from 'react';
import {Link,withRouter} from "react-router-dom";
import {FormGroup,Col,Form,FormControl,Button,ControlLabel,HelpBlock} from 'react-bootstrap';
import './LoginUser.css';
import Footer from './Footer.jsx'
import './Style.css'
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
       
     
       
      
      if(val.username==="admin" && val.password ==="admin")
      {
         
         console.log('login successful');
         tr;
      }
      else
      { 
        console.log('login faild');
        this.props.history.push("/Login");
        msg1:'Enter Username';
        msg2:'Enter Password';
        msg3:'Login faild';
      }
   }
   handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
   render() {
      return (
        <div>
         <div className="container">
         <h1>Sign in</h1>
           <Form  className="FormPos"horizontal>
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
      <Button type="submit" bsStyle="info" onClick={this.validate}>Submit</Button>
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
export default withRouter(LoginUser);