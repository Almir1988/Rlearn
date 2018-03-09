import React from 'react';
import {Form,FormGroup,Button,Jumbotron,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass,HelpBlock,Grid} from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import Footer from './Footer.jsx';
import './Registration.css';
import {SignUp} from './actions/actions'
import { connect } from 'react-redux'
class Registration extends React.Component {  
        constructor(props)
        {
          super(props);
          this.state= {

            FirstName:'',
            LastName:'',
            Email:'',
            Password:''
          };

        }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
         render()
         {

              const {dispatch}=this.props
             return(
<div>
  

              <div div className="container">
              <h3>Sign Up</h3> 
               <div className="RegisterPosMain">
             
                <Form horizontal>
  <FormGroup controlId="FirstName" >
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="FirstName" placeholder="FirstName" value={this.state.FirstName} onChange={this.handleChange.bind(this)}/>
      {this.state.msg1 && <HelpBlock className="Valid">{this.state.msg1}</HelpBlock>}
    </Col>
  </FormGroup>
  <FormGroup controlId="LastName">
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="LastName" placeholder="LastName"value={this.state.LastName} onChange={this.handleChange.bind(this)}/>
      {this.state.msg2 && <HelpBlock className="Valid">{this.state.msg2}</HelpBlock>}
    </Col>
  </FormGroup>
  <FormGroup controlId="Email" >
    <Col componentClass={ControlLabel} xs={2}>
    </Col>
    <Col xs={10}>
      <FormControl type="email"  name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange.bind(this)} />
      {this.state.msg3 && <HelpBlock className="Valid">{this.state.msg3}</HelpBlock>}
    </Col>
  </FormGroup>

     <FormGroup controlId="Password">
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange.bind(this)} />
      {this.state.msg4 && <HelpBlock className="Valid">{this.state.msg4}</HelpBlock>}
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} xs={10}>
   

    <Button  className="AllButtons" bsStyle="info" onClick={() =>dispatch(SignUp(this.state,this.props.history))}>Submit</Button>
      {this.state.msg && <HelpBlock>{this.state.msg}</HelpBlock>}
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

export default withRouter(connect()(Registration));










