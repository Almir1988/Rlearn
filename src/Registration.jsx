import React from 'react';
import {Form,FormGroup,Button,Jumbotron,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass,HelpBlock} from 'react-bootstrap';
import Header from './Header.jsx';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
import './Style.css'
import Footer from './Footer.jsx'
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
        Transfer () {
          this.props.history.push("/");
        }
        Register() { 

          const tr=this.Transfer();
        const body ={
          FirstName:this.state.FirstName,
          LastName:this.state.LastName,
          Email:this.state.Email,
          Password:this.state.Password
        };
        axios.post(`http://localhost:3000/User`, body)
        .then(res =>this.setState({
          msg:'Register successfully',
          FirstName:'',
          LastName:'',
          Email:'',
          Password:'',
          tr
        }))
        .catch(err => {
          msg:'Enter your information'
          debugger;
        });
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
         render()
         {
             return(

              <div>
              <div className="container">

              <h1>Sign Up</h1>
                <Form className="RegisterPos" horizontal>
  <FormGroup controlId="FirstName" >
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="FirstName" placeholder="FirstName" value={this.state.FirstName} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="LastName">
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="LastName" placeholder="LastName"value={this.state.LastName} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="Email" >
    <Col componentClass={ControlLabel} xs={2}>
    
    </Col>
    <Col xs={10}>
      <FormControl type="email"  name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>

     <FormGroup controlId="Password">
    <Col componentClass={ControlLabel} xs={2}>
   
    </Col>
    <Col xs={10}>
      <FormControl type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} xs={10}>
   
    <Button type="submit" className="AllButtons" bsStyle="info" onClick={this.Register.bind(this)} >Submit</Button>
      {this.state.msg && <HelpBlock>{this.state.msg}</HelpBlock>}
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

export default withRouter(Registration);










