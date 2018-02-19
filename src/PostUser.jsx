import React from 'react';
import {Form,FormGroup,Button,Col,Checkbox,ControlLabel,FormControl,controlId,componentClass,HelpBlock} from 'react-bootstrap';
import Header from './Header.jsx';
import axios from 'axios';
import {validateUser} from '../lib/validator';
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

        AddProduct= () => {
          const body ={

            FirstName:this.state.FistName,
            LastName:this.state.LastName,
            Email:this.state.Email,
            Password:this.state.Password
        };

        const res=validateUser(body);

        if (res.FirstName) {
          return this.setState({
            msg: res.FirstName,
            Validation: 'error'
          });
        
        }
        if (res.LastName) {
          return this.setState({
            msg: res.LastName,
            Validation: 'error'
          });
        
        }
        if (res.Email) {
          return this.Email({
            msg: res.email,
            Validation: 'error'
          });
        
        }
        if (res.Password) {
          return this.setState({
            msg: res.Password,
            Validation: 'error'
          });
        
        }
        axios.post(`localhost:8080/User`, body)
        .then(res => this.setState({
          msg: 'Thank you',
          Validation: 'success',
          FirstName:'',
          LastName:'',
          Email:'',
          Password:''
        }))
        .catch(err => this.setState({
          msg: parseErrorMessage(err),
          freeValidation: 'error'
        }));
        };

        textChanged = e => {
          this.setState({
            [e.target.name]: e.target.value
          });
        }
          
    

           
  
         render()
         {
             return(
                
                <Form className="container" horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    FirstName
    </Col>
    <Col xs={10}>
      <FormControl type="text" placeholder="FirstName" value={this.state.FirstName} onChange={this.textChanged}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} xs={2}>
    LastName
    </Col>
    <Col xs={10}>
      <FormControl type="text" placeholder="LastName"value={this.state.LastName} onChange={this.textChanged}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail" >
    <Col componentClass={ControlLabel} xs={2}>
    Email
    </Col>
    <Col xs={10}>
      <FormControl type="email" placeholder="Email" value={this.state.Email} onChange={this.textChanged} />
    </Col>
  </FormGroup>

     <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} xs={2}>
    Password
    </Col>
    <Col xs={10}>
      <FormControl type="password" placeholder="Password" value={this.state.Password} onChange={this.textChanged} />
    </Col>
  </FormGroup>

  

  <FormGroup>
    <Col smOffset={2} xs={10}>
      <Button type="submit" onClick={this.AddProduct}>Post</Button>
    </Col>
  </FormGroup>

  {this.state.msg && <HelpBlock>{this.state.msg}</HelpBlock>}
</Form>

             );

         }
}

export default PostUser;










