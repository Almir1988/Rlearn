import React from 'react';
import {Form,FormGroup,Button,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass,HelpBlock} from 'react-bootstrap';
import Header from './Header.jsx';
import axios from 'axios';
class PostUser extends React.Component {  
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
        AddProduct() { 
        const body ={
          FirstName:this.state.FirstName,
          LastName:this.state.LastName,
          Email:this.state.Email,
          Password:this.state.Password
        };
        axios.post(`http://localhost:3000/User`, body)
        .then(res => {
          debugger;
        })
        .catch(err => {
          debugger;
        });
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
         render()
         {
             return(
                
                <Form className="container" horizontal>
  <FormGroup controlId="FirstName" >
    <Col componentClass={ControlLabel} xs={2}>
    FirstName
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="FirstName" placeholder="FirstName" value={this.state.FirstName} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="LastName">
    <Col componentClass={ControlLabel} xs={2}>
    LastName
    </Col>
    <Col xs={10}>
      <FormControl type="text" name="LastName" placeholder="LastName"value={this.state.LastName} onChange={this.handleChange.bind(this)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="Email" >
    <Col componentClass={ControlLabel} xs={2}>
    Email
    </Col>
    <Col xs={10}>
      <FormControl type="email"  name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>

     <FormGroup controlId="Password">
    <Col componentClass={ControlLabel} xs={2}>
    Password
    </Col>
    <Col xs={10}>
      <FormControl type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange.bind(this)} />
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} xs={10}>
      <Button onClick={this.AddProduct.bind(this)}>Post</Button>
    </Col>
  </FormGroup>

  
</Form>

             );

         }
}

export default PostUser;










